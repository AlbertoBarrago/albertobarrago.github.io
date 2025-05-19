import {gsap} from "gsap";
import {Flip} from "gsap/Flip";
import {Physics2DPlugin} from "gsap/Physics2DPlugin";

gsap.registerPlugin(Flip, Physics2DPlugin);

const WAIT_BEFORE_NEXT_TICK = 1000;
/**
 * @description <string> actualRandomNumber
 * @default -1
 * @goal This var is used to improve the randomness of the animation.
 We use it to store the last random number generated.
 If the random number is the same as the last one, we generate a new one in the size of element size.
 **/
let actualRandomNumber = -1;

/**
 * @class GsapImpl
 * @description Custom implementation of GSAP.
 * @author Alberto Barrago
 * @version 0.0.1
 */
export default class GsapImpl {
    constructor() {
        this.gsap = gsap;
    }

    /**
     * @function animateBodyWithFlash
     * @description Animate the body element.
     *
     * @returns {gsap.core.Timeline} Timeline for body animation
     */
    animateBodyWithFlash() {
        const bodyTl = gsap.timeline();

        // Initial state
        gsap.set(document.body, {
            opacity: 1,
            background: '#3bbf2b',
        });

        // Flash effect and fade in
        bodyTl.to(document.body, {
            opacity: 1,
            duration: 0.3,
            background: '#e50d3f',
            ease: 'power2.inOut',
            delay: 0.1,
        })
            .to(document.body, {
                duration: 0.3,
                ease: 'power2.inOut',
                background: '#2663e7',
            })
            .to(document.body, {
                duration: 0.3,
                ease: 'power2.inOut',
                background: '#010201',
            })
        return bodyTl;
    }

    /**
     * @function createEntranceTimeline
     * @description Create the entrance timeline.
     *
     * @param elements
     * @returns {gsap.core.Timeline}
     */
    createEntranceTimeline(elements) {
        const {
            content,
            profileImage,
            nameHeading,
            roleHeading,
            taglineElement,
            skillsContainer,
            skillTags,
            downloadBtn,
            ctaContainer,
            footer
        } = elements;

        // Create the main timeline
        const mainTimeline = gsap.timeline();

        // Add body animation first
        mainTimeline.add(this.animateBodyWithFlash());

        // Set initial states for main elements
        gsap.set(
            [profileImage, nameHeading, roleHeading, taglineElement, skillsContainer,
                downloadBtn, ctaContainer, footer],
            {
                autoAlpha: 0,
                y: 20
            }
        );

        // Set initial states specifically for skill tags
        gsap.set(skillTags, {
            autoAlpha: 0,
            scale: 0.8,
            y: 15
        });

        // Build the animation sequence
        mainTimeline
            .to(content, {autoAlpha: 1, duration: 0.5})
            .to(profileImage, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(nameHeading, {
                autoAlpha: 1,
                y: 1,
                duration: 1,
                ease: "back.out(1.2)",
            })
            .to(roleHeading, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "power1.out"
            }, "-=0.3")
            .to(taglineElement, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "power1.out"
            }, "-=0.2")
            .to(skillsContainer, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "power1.out"
            }, "-=0.1");

        skillTags.forEach((tag, index) => {
            mainTimeline.to(tag, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "back.out(1.7)",
                delay: 0.1,
                onStart: function () {
                    gsap.to(tag, {
                        backgroundColor: "rgba(255, 30, 30, 0.3)",
                        duration: 0.3,
                        yoyo: true,
                        repeat: 1
                    });
                }
            }, index > 0 ? "-=0.2" : "+=0.1");
        });

        mainTimeline
            .to(downloadBtn, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.4")
            .to(ctaContainer, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "back.out(1.2)"
            }, "-=0.3")
            .to(footer, {
                autoAlpha: 1,
                duration: 0.4,
                ease: "power1.inOut"
            }, "-=0.2");

        return mainTimeline;
    }

    /**
     * @function gatherAnimationElements
     * @description Gather all elements needed for animation
     * @returns {Object} Object containing all elements
     */
    gatherAnimationElements() {
        return {
            content: document.querySelector('.content'),
            profileImage: document.querySelector('.profile-image'),
            nameHeading: document.querySelector('h1'),
            roleHeading: document.querySelector('h2'),
            taglineElement: document.querySelector('.tagline'),
            skillsContainer: document.querySelector('.skills'),
            skillTags: document.querySelectorAll('.skill-tag'),
            downloadBtn: document.querySelector('.cta_download'),
            ctaContainer: document.querySelector('.cta'),
            footer: document.querySelector('footer')
        };
    }

    /**
     * @function animatePortfolioEntrance
     * @description Create and start the animation sequence
     * @returns {gsap.core.Timeline}
     */
    animatePortfolioEntrance() {
        // Clean up any leftover elements from previous animations
        const oldContainers = document.querySelectorAll('div[id^="wave-container-"]');
        oldContainers.forEach(container => {
            if (document.body.contains(container)) {
                document.body.removeChild(container);
            }
        });

        const elements = this.gatherAnimationElements();
        const timeline = this.createEntranceTimeline(elements);

        // Start the timeline
        timeline.play();

        // Setup interactive effects for skill tags
        timeline.eventCallback("onComplete", () => {
            setTimeout(() => {
                this.setupSkillTagInteractions();
            }, 100);
        });

        return timeline;
    }

    /**
     * @function flipEffect
     * @description Creates a 360-degree flip effect using GSAP Flip plugin
     * @param {HTMLElement} tag - The skill tag element
     */
    flipEffect(tag) {
        // Capture the initial state of the element
        const state = Flip.getState(tag);

        // Set perspective for 3D effect
        gsap.set(tag.parentNode, {
            perspective: 800
        });

        // Store original color
        const originalColor = getComputedStyle(tag).backgroundColor;

        // Create a sequence of rotations using a timeline
        // We'll use this to change color during the rotation
        const tl = gsap.timeline();

        // First half of rotation (with color change)
        tl.to(tag, {
            backgroundColor: '#1E90FF',
            duration: 0.4,
            ease: "power1.inOut"
        });

        // Second half of rotation (back to original color)
        tl.to(tag, {
            backgroundColor: originalColor,
            duration: 0.4,
            ease: "power1.inOut"
        });

        // Apply a 360 rotation to the element
        gsap.to(tag, {
            rotationY: 360,
            duration: 0.8,
            ease: "power1.inOut",
            onComplete: () => {
                // Reset rotation once complete (to prevent accumulation)
                gsap.set(tag, {rotationY: 0, clearProps: "transform"});
            }
        });

        // Use the Flip plugin to handle additional transition aspects
        return Flip.from(state, {
            duration: 0.8,
            ease: "power1.inOut",
            absolute: false,
            scale: true,
            simple: true
        });
    }

    /**
     * @function bounceEffect
     * @description Creates a physics-based bouncing effect using Physics2DPlugin
     * @param {HTMLElement} tag - The skill tag element
     */
    bounceEffect(tag) {
        const tl = gsap.timeline();

        tl.to(tag, {
            y: -40,
            duration: 0.3,
            ease: "power2.out"
        });

        // Apply physics for the bounce
        tl.to(tag, {
            duration: 0.7,
            physics2D: {
                velocity: 0,
                angle: 90,
                gravity: 800,
                friction: 0.3,
                bounce: 0.6
            },
            y: 0, // Return to original position
            onUpdate: function () {
                const currentY = gsap.getProperty(tag, "y");

                if (currentY > -5) {
                    const squashFactor = Math.min(1.2, 1 + Math.abs(Number(currentY)) / 100);
                    gsap.set(tag, {
                        scaleX: squashFactor,
                        scaleY: 1 / squashFactor
                    });
                } else {
                    gsap.set(tag, {scaleX: 1, scaleY: 1});
                }
            },
            onComplete: () => {
                // Reset any scaling
                gsap.set(tag, {
                    clearProps: "scale,scaleX,scaleY"
                });

                // Color flash at the end
                gsap.to(tag, {
                    backgroundColor: '#3bbf2b',
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            }
        });

        return tl;
    }

    /**
     * @function explosionEffect
     * @description Creates a physics-based particle explosion
     * @param {HTMLElement} tag - The skill tag element
     */
    explosionEffect(tag) {
        // Get the tag dimensions and position
        const rect = tag.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create particles
        const particleCount = 12;
        const colors = ['#FF1E1E', '#1E90FF', '#3bbf2b'];

        // Create container for particles
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.zIndex = '9999';
        container.style.pointerEvents = 'none';
        container.style.left = '0';
        container.style.top = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.overflow = 'hidden';
        document.body.appendChild(container);

        // Create master timeline
        const masterTl = gsap.timeline({
            onComplete: () => {
                if (container.parentNode === document.body) {
                    document.body.removeChild(container);
                }
            }
        });

        // Animate the tag itself first
        masterTl.to(tag, {
            scale: 1.2,
            duration: 0.1,
            ease: "power1.in",
            onComplete: () => {
                gsap.to(tag, {
                    scale: 1,
                    duration: 0.3,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        });

        // Create and animate particles with physics
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;

            container.appendChild(particle);

            // Calculate random angle
            const angle = Math.random() * 360;
            const velocity = 100 + Math.random() * 150;

            // Add physics-based animation to master timeline
            masterTl.to(particle, {
                duration: 1.2,
                physics2D: {
                    velocity: velocity,
                    angle: angle,
                    gravity: 300,
                    friction: 0.1
                },
                opacity: 0,
                ease: "power1.out",
                onComplete: () => {
                    if (particle.parentNode === container) {
                        container.removeChild(particle);
                    }
                }
            }, 0.1); // Start at the same time, slight offset
        }

        return masterTl;
    }

    /**
     * @function handleProfileClick
     * @description On click all contents in page explode and disappear randomly
     *
     * @returns {void}
     */
    /**
     * @function handleProfileClick
     * @description On click all contents in page drop and fade, then restart entrance animation
     *
     * @returns {void}
     */
    handleProfileClick() {
        const profileImgElement = document.querySelector('.profile-image');
        const clickSound = new Audio('fatality.mp3');

        if (profileImgElement.getAttribute('data-has-click-listener') === 'true') {
            return;
        }

        profileImgElement.setAttribute('data-has-click-listener', 'true');

        profileImgElement.addEventListener('click', () => {
            const dropTl = gsap.timeline();
            const profileImgElement = document.querySelector('.profile-image');
            const body = document.querySelector('body');

            clickSound.play()
                .catch(e => console.log("Error playing sound: ", e));

            dropTl.set(body, {
                opacity: 1,
                background: '#e50d3f',
            })

            dropTl.set(profileImgElement, {
                opacity: 0,
                scale: 0.8,
                rotation: 0,
                duration: 0.3,
                ease: "back.out(1.5)"
            })

            dropTl.to(profileImgElement, {
                opacity: 1,
                scale: 1,
                rotation: 360,
                duration: 0.6,
                ease: "back.in(1.5)"
            }, "<0.3");

            dropTl.to(body, {
                opacity: 1,
                background: '#010201',
                duration: 0.3,
                ease: "power2.inOut"
            })

            window.gtag('event', "fatality_click_event", {
                event_category: "engagement",
                event_label: "Profile Fatality Clicked"
            });

        });
    }

    /**
     * @function animateBodyWithFlash
     * @description Animate the body with a flashing effect, and reassign value default if the number is different
     * @param max - The maximum value to generate
     * @param previousValue - The previous value to compare
     * @returns string
     */
    getDifferentRandomValue(max, previousValue) {
        let randomValue;
        do {
            randomValue = this.getRandomValue(max);
        } while (randomValue === previousValue);

        return randomValue;
    }

    /**
     * Generates a random integer value between 0 (inclusive) and the specified maximum value (exclusive).
     *
     * @param {number} max - The maximum value (exclusive) for the random number range.
     * @return {number} A random integer between 0 (inclusive) and the given max (exclusive).
     */
    getRandomValue(max) {
        return Math.floor(Math.random() * max)
    }

    /**
     * @function setupSkillTagInteractions
     * @description Adds interactive effects to skill tags on click
     */
    setupSkillTagInteractions() {
        const skillTags = document.querySelectorAll('.skill-tag');

        skillTags.forEach((tag) => {
            const newTag = tag.cloneNode(true);
            tag.parentNode.replaceChild(newTag, tag);
        });

        document.querySelectorAll('.skill-tag').forEach((tag) => {

            // Add the click event listener
            tag.addEventListener('click', (e) => {
                // Prevent event bubbling
                e.stopPropagation();
                let effectSize = 3;

                if (tag.getAttribute('data-animating') === 'true') return;

                tag.setAttribute('data-animating', 'true');

                //custom solution for not iterating the same number twice
                const effectNumber = this.getDifferentRandomValue(effectSize, actualRandomNumber);

                actualRandomNumber = effectNumber;

                switch (effectNumber) {
                    case 0:
                        this.flipEffect(tag);
                        break;
                    case 1:
                        this.bounceEffect(tag);
                        break;
                    case 2:
                        this.explosionEffect(tag);
                        break;
                }

                setTimeout(() => {
                    tag.setAttribute('data-animating', 'false');
                }, WAIT_BEFORE_NEXT_TICK);
            });
        });
    }
}