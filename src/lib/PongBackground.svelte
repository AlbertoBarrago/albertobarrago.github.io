<script>
  import { onMount, onDestroy } from 'svelte';

  /** @type {HTMLCanvasElement} */
  let canvas;
  /** @type {number} */
  let animationFrameId;

  onMount(() => {
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // --- Game State ---
    const paddleSpeed = 2;
    const ballSpeed = 2;
    
    /** @type {{x: number, y: number, radius: number, speed: number, dx: number, dy: number}} */
    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      speed: ballSpeed,
      dx: ballSpeed,
      dy: ballSpeed
    };

    /** @type {{x: number, y: number, width: number, height: number, dy: number}} */
    let leftPaddle = {
      x: 10,
      y: canvas.height / 2 - 50,
      width: 10,
      height: 100,
      dy: 0
    };

    /** @type {{x: number, y: number, width: number, height: number, dy: number}} */
    let rightPaddle = {
      x: canvas.width - 20,
      y: canvas.height / 2 - 50,
      width: 10,
      height: 100,
      dy: 0
    };
    
    /** @type {number} */
    let leftScore = 0;
    /** @type {number} */
    let rightScore = 0;
    
    /** @type {{ArrowUp: boolean, ArrowDown: boolean}} */
    const keys = {
        ArrowUp: false,
        ArrowDown: false
    };

    // --- Drawing Functions ---
    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    function drawPaddles() {
      ctx.fillStyle = 'white';
      ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
      ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
    }
    
    function drawCenterLine() {
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
        ctx.fillStyle = 'grey';
        ctx.font = '20px sans-serif';
        ctx.fillText(leftScore.toString(), canvas.width / 4, 50);
        ctx.fillText(rightScore.toString(), 3 * canvas.width / 4, 50);
    }

    // --- Game Logic ---
    function update() {
      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Wall collision (top/bottom)
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }

      // Paddle collision
      // Left paddle
      if (ball.x - ball.radius < leftPaddle.x + leftPaddle.width &&
          ball.y > leftPaddle.y &&
          ball.y < leftPaddle.y + leftPaddle.height) {
        ball.dx *= -1;
      }
      // Right paddle
      if (ball.x + ball.radius > rightPaddle.x &&
          ball.y > rightPaddle.y &&
          ball.y < rightPaddle.y + rightPaddle.height) {
        ball.dx *= -1;
      }
      
      // Reset ball if it goes past a paddle
      if (ball.x + ball.radius < 0) {
          rightScore++;
          resetBall();
      } else if (ball.x - ball.radius > canvas.width) {
          leftScore++;
          resetBall();
      }

      // AI for left paddle
      let leftPaddleCenter = leftPaddle.y + leftPaddle.height / 2;
      if (leftPaddleCenter < ball.y - 10) {
          leftPaddle.y += paddleSpeed;
      } else if (leftPaddleCenter > ball.y + 10) {
          leftPaddle.y -= paddleSpeed;
      }
      
      // Move right paddle based on keyboard input
      if (keys.ArrowUp) {
          rightPaddle.y -= 5;
      }
      if (keys.ArrowDown) {
          rightPaddle.y += 5;
      }
      
      // Keep paddles within canvas bounds
      if (leftPaddle.y < 0) leftPaddle.y = 0;
      if (leftPaddle.y + leftPaddle.height > canvas.height) leftPaddle.y = canvas.height - leftPaddle.height;
      if (rightPaddle.y < 0) rightPaddle.y = 0;
      if (rightPaddle.y + rightPaddle.height > canvas.height) rightPaddle.y = canvas.height - rightPaddle.height;

    }
    
    function resetBall() {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = (Math.random() > 0.5 ? 1 : -1) * ballSpeed;
        ball.dy = (Math.random() > 0.5 ? 1 : -1) * ballSpeed;
    }

    // --- Game Loop ---
    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCenterLine();
      drawScore();
      drawPaddles();
      drawBall();
      update();
      animationFrameId = requestAnimationFrame(gameLoop);
    }

    // --- Event Listeners ---
    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        rightPaddle.x = canvas.width - 20;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    }
    
    /** @param {KeyboardEvent} e */
    function handleKeyDown(e) {
        if (Object.prototype.hasOwnProperty.call(keys, e.key)) {
            keys[e.key] = true;
        }
    }
    
    /** @param {KeyboardEvent} e */
    function handleKeyUp(e) {
        if (Object.prototype.hasOwnProperty.call(keys, e.key)) {
            keys[e.key] = false;
        }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    gameLoop();

    onDestroy(() => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    });
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

  @media (max-width: 768px) {
    .pong-background {
      display: none;
    }
  }
</style>