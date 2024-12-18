<script>
    import {onMount} from 'svelte';

    let name = "alBz";
    let role = "Senior Fullstack Developer";
    let cv_filename = "albertobarrago_cv_2024.pdf"
    let skills = [
        "Frontend Development",
        "Backend Architecture",
        "Cloud Solutions",
        "Team Leadership"
    ];

    let isVisible = false;

    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = cv_filename;
        link.download = cv_filename;
        link.dispatchEvent(new MouseEvent('click'));
    }

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
            <p class="tagline">Building digital experiences that matter</p>

            <div class="skills">
                {#each skills as skill}
                    <span class="skill-tag">{skill}</span>
                {/each}
            </div>

            <button class="btn cta_download" onclick={downloadCv}>
                Download CV
            </button>

            <div class="cta">
                <a href="https://github.com/AlbertoBarrago?tab=repositories" target="_blank" class="btn primary">View
                    Projects</a>
                <a href="mailto:albertobarrago@gmail.com?subject=Let's%20Collaborate&body=Hi%20Alberto%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards%2C%0AYour%20Name"
                   class="btn secondary">Get in Touch</a>
            </div>
        </div>
    </section>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

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

    .container {
        position: fixed;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
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
        padding: 4rem 1rem;
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
        font-size: 4rem;
        font-weight: 800;
        margin: 0;
        line-height: 1.1;
        background: linear-gradient(
                120deg,
                var(--primary-color) 0%,
                var(--secondary-color) 35%,
                var(--tertiary-color) 70%,
                var(--primary-color) 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 10s alternate ease-in-out;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.1);
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        margin: 0.5rem 0;
        position: relative;
        display: inline-block;
        line-height: 1.2;
    }

    h2::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--secondary-color);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
    }

    h2:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .profile-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid rgba(30, 144, 255, 0.2);
        object-fit: cover;
        margin: 0 auto 1.5rem;
        display: block;
        box-shadow: 0 8px 32px rgba(30, 144, 255, 0.15);
        position: relative;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation: blur 3s ease-in;
    }

    /*.profile-image:hover {*/
    /*    transform: scale(1.05) rotate(2deg);*/
    /*    border-color: rgba(255, 30, 30, 0.2);*/
    /*    box-shadow: 0 12px 40px rgba(30, 144, 255, 0.3);*/
    /*    cursor: pointer;*/
    /*}*/

    .profile-image::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        border-radius: 50%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    /*.profile-image:hover::after {*/
    /*    opacity: 0.5;*/
    /*}*/

    .tagline {
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.7);
        margin: 0.75rem 0 1.5rem;
        font-weight: 400;
        position: relative;
        display: inline-block;
        padding: 0.3rem 0.8rem;
        background: rgba(30, 144, 255, 0.1);
        border-radius: 4px;
        backdrop-filter: blur(4px);
        line-height: 1.3;
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
        color: var(--text-color);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .cta {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }

    .btn {
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s;
        font-size: 1rem;
    }

    .btn:hover {
        transform: translateY(-2px);
    }

    .primary {
        background: var(--primary-color);
        color: var(--text-color);
    }

    .secondary {
        background: rgba(30, 144, 255, 0.1);
        color: var(--secondary-color);
    }

    .cta_download {
        color: var(linear-gradient(45deg, var(--primary-color), var(--secondary-color)));
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(30, 144, 255, 0.2);
        margin: .7rem 0;
    }

    .cta_download:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 30, 30, 0.3);
    }

    .cta_download:active {
        transform: translateY(1px);
    }

    .cta_download::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
        );
        transition: 0.5s;
    }

    .cta_download:hover::before {
        left: 100%;
    }

    @media (max-width: 768px) {

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.2rem;
        }

        .cta {
            flex-direction: column;
            gap: 0.75rem;
            padding: 0 2rem;
            max-width: 300px;
            margin: 2rem auto 0;
        }

        .profile-image {
            width: 150px;
            height: 150px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    }

    @media (max-width: 428px) {
        .hero {
            margin: 0;
            width: 100%;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        h1 {
            font-size: 2rem;
            line-height: 1.2;
        }

        h2 {
            font-size: 1.1rem;
            margin: 0.3rem 0;
        }

        .tagline {
            font-size: 0.9rem;
            padding: 0.2rem 0.6rem;
            margin: 0.5rem 0 1rem;
        }

        .profile-image {
            width: 120px;
            height: 120px;
            margin: 0 auto 1rem;
        }

        .skills {
            gap: 0.3rem;
            margin-bottom: 1rem;
        }

        .skill-tag {
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
        }

        .cta {
            gap: 0.5rem;
            padding: 0 1rem;
            max-width: 250px;
            margin: 1rem auto 0;
        }
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 8px 32px rgba(30, 144, 255, 0.15);
        }
        50% {
            box-shadow: 0 8px 32px rgba(255, 30, 30, 0.25);
        }
    }

    @keyframes shine {
        0% {
            background-position: 200% center;
        }
        100% {
            background-position: -200% center;
        }
    }

    @keyframes blur {
        0% {
           filter: blur(2px);
        }
        100% {
            filter: blur(0);
        }
    }
</style>
