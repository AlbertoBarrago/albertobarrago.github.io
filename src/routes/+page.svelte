<script>
    import { onMount } from 'svelte';

    let name = "Alberto Barrago";
    let role = "Senior Developer";
    let skills = [
        "Frontend Development",
        "Backend Architecture",
        "Cloud Solutions",
        "Team Leadership"
    ];

    let isVisible = false;

    // Initialize Particle.js
    onMount(() => {
        isVisible = true;
        particlesJS.load('particles-js', './particles-config.json');
    });
</script>

<main class="container">
    <div id="particles-js"></div>
    <section class="hero">
        <div class="content" class:visible={isVisible}>
            <img src="https://github.com/albertobarrago.png" alt="Alberto Barrago" class="profile-image" />

            <h1>{name}</h1>
            <h2>{role}</h2>
            <p class="tagline">Building digital experiences that matter</p>

            <div class="skills">
                {#each skills as skill}
                    <span class="skill-tag">{skill}</span>
                {/each}
            </div>

            <div class="cta">
                <a href="https://github.com/AlbertoBarrago?tab=repositories" target="_blank" class="btn primary">View Projects</a>
                <a href="mailto:albertobarrago@gmail.com?subject=Let's%20Collaborate&body=Hi%20Alberto%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards%2C%0AYour%20Name" class="btn secondary">Get in Touch</a>
            </div>
        </div>
    </section>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    :global(body) {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background: #121212;
        color: #ffffff;
    }

    .container {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        overflow: hidden;
    }

    :global(html, body) {
        height: 100%;
        margin: 0;
        overflow: hidden;
    }

    #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .hero {
        max-width: 800px;
        text-align: center;
        z-index: 1;
        position: relative;
        max-height: 100vh;
        padding: 1rem;
    }

    .content {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0;
        background: linear-gradient(45deg, #FF1E1E, #1E90FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h2 {
        font-size: 1.5rem;
        color: #1E90FF;
        margin: 1rem 0;
    }

    .tagline {
        font-size: 1.25rem;
        color: #FF1E1E;
        margin-bottom: 2rem;
    }
    .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .skill-tag {
        background: rgba(255, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: 0.9rem;
        color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .cta {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .btn {
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s;
    }

    .btn:hover {
        transform: translateY(-2px);
    }

    .primary {
        background: #FF1E1E;
        color: white;
    }

    .secondary {
        background: rgba(30, 144, 255, 0.1);
        color: #1E90FF;
    }

    .profile-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 1px solid #FF1E1E;
        object-fit: cover;
        margin: 0 auto 1rem;
        display: block;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
</style>
