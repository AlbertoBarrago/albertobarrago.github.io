//Revised by alBz
class Oneko {
    constructor(options = {}) {
        this.config = {
            nekoSpeed: options.speed || 10,
            spriteSize: options.spriteSize || 32,
            updateInterval: options.updateInterval || 100,
            spriteUrl: options.spriteUrl || 'https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif',
            nekoSites: options.nekoSites || [
                "adryd.com",
                "localhost",
                "c7.pm",
                "fade.nya.rest",
                "fleepy.tv",
                "maia.crimew.gay",
                "spookyghost.zone",
                "noelle.df1.dev",
                "kibty.town",
                "www.kibty.town",
            ]
        };

        this.state = {
            nekoPosX: 32,
            nekoPosY: 32,
            mousePosX: 0,
            mousePosY: 0,
            frameCount: 0,
            idleTime: 0,
            idleAnimation: null,
            idleAnimationFrame: 0,
            lastFrameTimestamp: 0,
            clickCounter: 0
        };

        this.spriteSets = {
            idle: [[-3, -3]],
            alert: [[-7, -3]],
            scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
            scratchWallN: [[0, 0], [0, -1]],
            scratchWallS: [[-7, -1], [-6, -2]],
            scratchWallE: [[-2, -2], [-2, -3]],
            scratchWallW: [[-4, 0], [-4, -1]],
            tired: [[-3, -2]],
            sleeping: [[-2, 0], [-2, -1]],
            N: [[-1, -2], [-1, -3]],
            NE: [[0, -2], [0, -3]],
            E: [[-3, 0], [-3, -1]],
            SE: [[-5, -1], [-5, -2]],
            S: [[-6, -3], [-7, -2]],
            SW: [[-5, -3], [-6, -1]],
            W: [[-4, -2], [-4, -3]],
            NW: [[-1, 0], [-1, -1]]
        };

        this.nekoEl = null;
        this.animationFrameId = null;
    }

    static checkReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    init() {
        if (Oneko.checkReducedMotion()) {
            return;
        }

        this.parseQueryParams();
        this.createNekoElement();
        this.setupEventListeners();
        this.startAnimation();
    }

    parseQueryParams() {
        try {
            const params = new URLSearchParams(window.location.search);
            this.state.nekoPosX = parseInt(params.get('catx')) || this.state.nekoPosX;
            this.state.nekoPosY = parseInt(params.get('caty')) || this.state.nekoPosY;
            this.state.mousePosX = parseInt(params.get('catdx')) || this.state.mousePosX;
            this.state.mousePosY = parseInt(params.get('catdy')) || this.state.mousePosY;
        } catch (e) {
            console.error('oneko.js: Failed to parse query params:', e);
        }
    }

    createNekoElement() {
        this.nekoEl = document.createElement('div');
        Object.assign(this.nekoEl.style, {
            id: 'oneko',
            width: `${this.config.spriteSize}px`,
            height: `${this.config.spriteSize}px`,
            position: 'fixed',
            pointerEvents: 'none',
            backgroundImage: `url('${this.config.spriteUrl}')`,
            imageRendering: 'pixelated',
            left: `${this.state.nekoPosX - 16}px`,
            top: `${this.state.nekoPosY - 16}px`,
            zIndex: '999999'
        });
        this.nekoEl.setAttribute('aria-hidden', 'true');
        document.body.appendChild(this.nekoEl);
    }

    setupEventListeners() {
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener('click', this.handleNekoSiteNavigation.bind(this));
    }

    handleMouseMove(event) {
        this.state.mousePosX = event.clientX;
        this.state.mousePosY = event.clientY;
    }

    handleClick(event) {
        const nekoBounds = {
            minX: this.state.nekoPosX - 16,
            maxX: this.state.nekoPosX + 1,
            minY: this.state.nekoPosY - 16,
            maxY: this.state.nekoPosY + 1
        };

        if (this.isClickInBounds(event, nekoBounds)) {
            this.state.clickCounter++;
            if (this.state.clickCounter >= 7) {
                this.performEasterEgg();
                this.state.clickCounter = 0;
            }
        }
    }

    isClickInBounds(event, bounds) {
        return (
            event.clientX > bounds.minX &&
            event.clientX < bounds.maxX &&
            event.clientY > bounds.minY &&
            event.clientY < bounds.maxY
        );
    }

    performEasterEgg() {
        document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,title').forEach(element => {
            element.innerHTML = element.innerHTML
                .replace(/eva/g, 'ezra')
                .replace(/Eva/g, 'Ezra');
        });
    }

    handleNekoSiteNavigation(event) {
        const target = this.findClickTarget(event);
        if (!target) return;

        const newLocation = this.createNekoSiteUrl(target);
        if (!newLocation) return;

        event.preventDefault();
        window.location.href = newLocation.toString();
    }

    findClickTarget(event) {
        if (event.target.tagName === 'A' && event.target.href) {
            return event.target;
        }
        if (event.target.tagName === 'IMG' &&
            event.target.parentElement.tagName === 'A' &&
            event.target.parentElement.href) {
            return event.target.parentElement;
        }
        return null;
    }

    createNekoSiteUrl(target) {
        try {
            const newLocation = new URL(target.href);
            if (!this.config.nekoSites.includes(newLocation.host) || newLocation.pathname !== '/') {
                return null;
            }

            newLocation.searchParams.append('catx', Math.floor(this.state.nekoPosX));
            newLocation.searchParams.append('caty', Math.floor(this.state.nekoPosY));
            newLocation.searchParams.append('catdx', Math.floor(this.state.mousePosX));
            newLocation.searchParams.append('catdy', Math.floor(this.state.mousePosY));
            return newLocation;
        } catch (e) {
            return null;
        }
    }

    startAnimation() {
        this.animationFrameId = window.requestAnimationFrame(this.onAnimationFrame.bind(this));
    }

    stop() {
        if (this.animationFrameId) {
            window.cancelAnimationFrame(this.animationFrameId);
        }
        if (this.nekoEl && this.nekoEl.parentElement) {
            this.nekoEl.parentElement.removeChild(this.nekoEl);
        }
    }

    onAnimationFrame(timestamp) {
        if (!this.nekoEl.isConnected) {
            return;
        }

        if (timestamp - this.state.lastFrameTimestamp > this.config.updateInterval) {
            this.state.lastFrameTimestamp = timestamp;
            this.updateFrame();
        }

        this.animationFrameId = window.requestAnimationFrame(this.onAnimationFrame.bind(this));
    }

    setSprite(name, frame) {
        const sprite = this.spriteSets[name][frame % this.spriteSets[name].length];
        this.nekoEl.style.backgroundPosition =
            `${sprite[0] * this.config.spriteSize}px ${sprite[1] * this.config.spriteSize}px`;
    }

    updateFrame() {
        this.state.frameCount++;
        const { distance, diffX, diffY } = this.calculateDistances();

        if (distance < this.config.nekoSpeed || distance < 48) {
            this.handleIdle();
            return;
        }

        this.handleMovement(distance, diffX, diffY);
    }

    calculateDistances() {
        const diffX = this.state.nekoPosX - this.state.mousePosX;
        const diffY = this.state.nekoPosY - this.state.mousePosY;
        return {
            diffX,
            diffY,
            distance: Math.sqrt(diffX ** 2 + diffY ** 2)
        };
    }

    handleIdle() {
        this.state.idleTime++;

        if (this.shouldStartNewIdleAnimation()) {
            this.state.idleAnimation = this.selectIdleAnimation();
        }

        this.updateIdleAnimation();
    }

    shouldStartNewIdleAnimation() {
        return (
            this.state.idleTime > 10 &&
            Math.floor(Math.random() * 200) === 0 &&
            this.state.idleAnimation === null
        );
    }

    selectIdleAnimation() {
        const availableAnimations = ['sleeping', 'scratchSelf'];

        if (this.state.nekoPosX < 32) availableAnimations.push('scratchWallW');
        if (this.state.nekoPosY < 32) availableAnimations.push('scratchWallN');
        if (this.state.nekoPosX > window.innerWidth - 32) availableAnimations.push('scratchWallE');
        if (this.state.nekoPosY > window.innerHeight - 32) availableAnimations.push('scratchWallS');

        return availableAnimations[Math.floor(Math.random() * availableAnimations.length)];
    }

    updateIdleAnimation() {
        switch (this.state.idleAnimation) {
            case 'sleeping':
                this.handleSleepingAnimation();
                break;
            case 'scratchWallN':
            case 'scratchWallS':
            case 'scratchWallE':
            case 'scratchWallW':
            case 'scratchSelf':
                this.handleScratchingAnimation();
                break;
            default:
                this.setSprite('idle', 0);
                return;
        }
        this.state.idleAnimationFrame++;
    }

    handleSleepingAnimation() {
        if (this.state.idleAnimationFrame < 8) {
            this.setSprite('tired', 0);
        } else {
            this.setSprite('sleeping', Math.floor(this.state.idleAnimationFrame / 4));
        }

        if (this.state.idleAnimationFrame > 192) {
            this.resetIdleAnimation();
        }
    }

    handleScratchingAnimation() {
        this.setSprite(this.state.idleAnimation, this.state.idleAnimationFrame);
        if (this.state.idleAnimationFrame > 9) {
            this.resetIdleAnimation();
        }
    }

    resetIdleAnimation() {
        this.state.idleAnimation = null;
        this.state.idleAnimationFrame = 0;
    }

    handleMovement(distance, diffX, diffY) {
        this.state.idleAnimation = null;
        this.state.idleAnimationFrame = 0;

        if (this.state.idleTime > 1) {
            this.setSprite('alert', 0);
            this.state.idleTime = Math.max(0, Math.min(this.state.idleTime, 7) - 1);
            return;
        }

        const direction = this.calculateDirection(diffX, diffY, distance);
        this.setSprite(direction, this.state.frameCount);

        this.updatePosition(diffX, diffY, distance);
    }

    calculateDirection(diffX, diffY, distance) {
        let direction = '';
        direction += diffY / distance > 0.5 ? 'N' : '';
        direction += diffY / distance < -0.5 ? 'S' : '';
        direction += diffX / distance > 0.5 ? 'W' : '';
        direction += diffX / distance < -0.5 ? 'E' : '';
        return direction;
    }

    updatePosition(diffX, diffY, distance) {
        this.state.nekoPosX -= (diffX / distance) * this.config.nekoSpeed;
        this.state.nekoPosY -= (diffY / distance) * this.config.nekoSpeed;

        this.state.nekoPosX = Math.min(Math.max(16, this.state.nekoPosX), window.innerWidth - 16);
        this.state.nekoPosY = Math.min(Math.max(16, this.state.nekoPosY), window.innerHeight - 16);

        this.nekoEl.style.left = `${this.state.nekoPosX - 16}px`;
        this.nekoEl.style.top = `${this.state.nekoPosY - 16}px`;
    }
}

const oneko = new Oneko({
    speed: 10,
    spriteSize: 32,
    updateInterval: 100
});
oneko.init();