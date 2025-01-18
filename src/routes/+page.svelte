<script>
    import {onMount} from 'svelte';

    let name = "alBz";
    let role = "Senior Fullstack Developer";
    let cv_filename = "albertobarrago_cv_2024.pdf"
    let githubRepoString = "https://github.com/AlbertoBarrago?tab=repositories"
    let tagline = "Building digital experiences that matter"
    let skills = [
        "Frontend Development",
        "Backend Architecture",
        "Cloud Solutions",
        "Team Leadership"
    ];
    let version = "v1.1.0"
    let email = "albertobarrago@gmail.com";


    let isVisible = false;

    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = cv_filename;
        link.download = cv_filename;
        link.dispatchEvent(new MouseEvent('click'));
    }

    const mailtoLink = `mailto:${email}`;

    onMount(() => {
        isVisible = true;
        particlesJS.load('particles-js', './particles-config.json');

        const script = document.createElement('script');
        script.src = '/oneko.js';
        script.async = true;
        document.body.appendChild(script);
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
        <footer>
            <small>{version}</small>
        </footer>
    </section>

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