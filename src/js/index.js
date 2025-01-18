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
let version = "v1.2.0"
let email = "albertobarrago@gmail.com";
let isVisible = true;

const mailtoLink = `mailto:${email}`;


const downloadCv = () => {
    const link = document.createElement('a');
    link.href = cv_filename;
    link.download = cv_filename;
    link.dispatchEvent(new MouseEvent('click'));
}


export {
    version,
    email,
    isVisible,
    name,
    role,
    githubRepoString,
    tagline,
    skills,
    mailtoLink,
    downloadCv,
}