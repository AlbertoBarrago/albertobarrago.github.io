<script>
  import { onMount } from 'svelte';

  /** @type {HTMLCanvasElement} */
  let canvas;
  /** @type {number} */
  let animationFrameId;

  onMount(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let paddleSpeed = 1.5;
    const ballSpeed = 2;

    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      dx: ballSpeed,
      dy: ballSpeed
    };

    let leftPaddle = {
      x: 10,
      y: canvas.height / 2 - 50,
      width: 10,
      height: 100
    };

    let rightPaddle = {
      x: canvas.width - 20,
      y: canvas.height / 2 - 50,
      width: 10,
      height: 100
    };

    let leftScore = 0;
    let rightScore = 0;

    /** @type {Record<string, boolean>} */
    const keys = {
      ArrowUp: false,
      ArrowDown: false
    };

    function drawBall() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    function drawPaddles() {
      if (!ctx) return;
      ctx.fillStyle = 'white';
      ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
      ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
    }

    function drawCenterLine() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.setLineDash([10, 15]);
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
      ctx.setLineDash([]);
    }

    function drawScore() {
      if (!ctx) return;
      ctx.fillStyle = 'grey';
      ctx.font = '20px sans-serif';
      ctx.fillText(leftScore.toString(), canvas.width / 4, 50);
      ctx.fillText(rightScore.toString(), 3 * canvas.width / 4, 50);
    }

    function update() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }

      if (
        (ball.dx < 0 &&
          ball.x - ball.radius < leftPaddle.x + leftPaddle.width &&
          ball.y > leftPaddle.y &&
          ball.y < leftPaddle.y + leftPaddle.height) ||
        (ball.dx > 0 &&
          ball.x + ball.radius > rightPaddle.x &&
          ball.y > rightPaddle.y &&
          ball.y < rightPaddle.y + rightPaddle.height)
      ) {
        ball.dx *= -1;
      }

      if (ball.x + ball.radius < 0) {
        rightScore++;
        resetBall();
      } else if (ball.x - ball.radius > canvas.width) {
        leftScore++;
        resetBall();
      }

      let leftPaddleCenter = leftPaddle.y + leftPaddle.height / 2;
      if (leftPaddleCenter < ball.y - 30) {
        leftPaddle.y += paddleSpeed;
      } else if (leftPaddleCenter > ball.y + 30) {
        leftPaddle.y -= paddleSpeed;
      }

      if (keys.ArrowUp) {
        rightPaddle.y -= 5;
      }
      if (keys.ArrowDown) {
        rightPaddle.y += 5;
      }

      leftPaddle.y = Math.max(0, Math.min(leftPaddle.y, canvas.height - leftPaddle.height));
      rightPaddle.y = Math.max(0, Math.min(rightPaddle.y, canvas.height - rightPaddle.height));
    }

    function resetBall() {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = (Math.random() > 0.5 ? 1 : -1) * ballSpeed;
      ball.dy = (Math.random() > 0.5 ? 1 : -1) * ballSpeed;
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCenterLine();
      drawScore();
      drawPaddles();
      drawBall();
      update();
      animationFrameId = requestAnimationFrame(gameLoop);
    }

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      rightPaddle.x = canvas.width - 20;
      resetBall();
    }

    /** @param {KeyboardEvent} e */
    function handleKeyEvent(e) {
      if (e.key in keys) {
        keys[e.key] = e.type === 'keydown';
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyEvent);
    window.addEventListener('keyup', handleKeyEvent);

    gameLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyEvent);
      window.removeEventListener('keyup', handleKeyEvent);
    };
  });
</script>

<canvas bind:this={canvas} class="pong-background"></canvas>

<style>
  .pong-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: #0d1117;
    opacity: 0.2;
  }

  @media (max-width: 1024px) {
    .pong-background {
      display: none;
    }
  }
</style>