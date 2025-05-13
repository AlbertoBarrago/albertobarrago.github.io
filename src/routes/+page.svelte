<script>
    import {onMount} from 'svelte';
    import GsapImpl from "$lib";
    import {
        isVisible,
        version,
        name,
        skills,
        tagline,
        role,
        githubRepoString,
        mailtoLink,
        downloadCv,
    } from '../js/index.js'

    // Custom impl of Gsap animation and timelines
    const gsap = new GsapImpl();

    // improve upload of oneko.js
    let onekoLoaded = false;

    onMount(() => {

        particlesJS.load('particles-js', './particles-config.json');

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
</script>

<main class="container">
    <div id="particles-js"></div>
    <section class="hero">
        <div class="content" class:visible={isVisible}>
            <img src="https://github.com/albertobarrago.png" alt="alBz (Alberto Barrago)" class="profile-image"/>

            <h1>{name}</h1>
            <h2>{role}</h2>
            <p class="tagline">{tagline}</p>

            <div class="skills">
                {#each skills as skill}
                    <span class="skill-tag">{skill}</span>
                {/each}
            </div>

            <button class="btn cta_download" onclick={downloadCv}>
                Download CV
            </button>

            <div class="cta">
                <a href="{githubRepoString}" target="_blank" class="btn primary">View
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
        background: var(--bg-color);
        color: var(--text-color);
    }
</style>