<script>
    import {onMount} from 'svelte';
    import GsapImpl from "$lib/gsapAnimations.js";
    import {
        isVisible,
        version,
        name,
        skills,
        tagline,
        role,
        githubRepoString,
        mailtoLink,
        devToLink,
        downloadCv, albBlogLink,
    } from '../js/index.js'
    import PongBackground from "$lib/PongBackground.svelte";

    // Custom impl of Gsap animation and timelines
    const gsap = new GsapImpl();

    // improve upload of oneko.js
    let onekoLoaded = false;

    onMount(() => {

        if (!onekoLoaded && !document.querySelector('script[src="/oneko.js"]')) {
            const script = document.createElement('script');
            script.src = '/oneko.js';
            script.async = true;
            document.body.appendChild(script);
            onekoLoaded = true;
            console.log('🐱 Oneko script loaded');
        }

        // Create and play the animation sequence
        gsap.animatePortfolioEntrance();
        // Magic tricky effects on the profile image
        gsap.handleProfileClick();

        console.log('%c🚀 Portfolio loaded!', 'background: #FF1E1E; color: white; padding: 8px; border-radius: 4px; font-weight: bold;');
        console.log('%c👋 Welcome to my interactive space', 'color: #1E90FF; font-size: 14px; font-weight: bold;');
    });


    function handleClick(event, link) {
        event.preventDefault();
        if (!link) return;
        window.open(link, '_blank');
    }
</script>

<main class="container">
    <PongBackground />
    <section class="hero">
        <div class="content" class:visible={isVisible}>
            <img src="https://github.com/albertobarrago.png" alt="alBz (Alberto Barrago)" class="profile-image"/>

            <h1>{name}</h1>
            <h2>{role}</h2> <br>
            <p class="tagline">{tagline}</p>

<!--            <div class="dev-to">-->
<!--                 <span class="dev-to-link">-->
<!--                    <a href="{null}" class="cursor-pointer"-->
<!--                       onclick={(event) => handleClick(event, devToLink)}-->
<!--                    >📒 Read My Articles</a>-->
<!--                </span>-->
<!--            </div>-->

            <div class="alb-blog">
                 <span class="alb-blog-link">
                    <a href="{null}" class="cursor-pointer"
                       onclick={(event) => handleClick(event, albBlogLink)}
                    >📝 Read My Blog</a>
                </span>
            </div>

            <div class="skills">
                {#each skills as skill}
                    <span class="skill-tag">{skill}</span>
                {/each}
            </div>

            <button class="btn cta_download" aria-label="Download Curriculum Vitae" onclick={downloadCv}>
                Download CV
            </button>

            <div class="cta">
                <a href={null} onclick={(event) => handleClick(event, githubRepoString)}
                   class="btn primary cursor-pointer">View
                    Projects
                </a>
                <a href={mailtoLink} class="btn secondary">Get in Touch</a>
            </div>
        </div>

    </section>
    <footer>
        <small>{version}</small>
    </footer>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
    @import "../styles/main.css";

    :root {
        --primary-color: #FF1E1E;
        --secondary-color: #1E90FF;
        --tertiary-color: #3bbf2b;
        --bg-color: #121212;
        --text-color: #ffffff;
    }

    :global(html, body) {
        height: 100%;
        margin: 0;
        overflow: hidden;
        font-family: 'JetBrains Mono', monospace;
        color: var(--text-color);
    }
</style>
