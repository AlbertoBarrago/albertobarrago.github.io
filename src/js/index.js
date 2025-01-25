let name = "alBz";
let role = "Fullstack DevLover";
let cv_filename = "cv_2025_eng_albz.pdf"
let githubRepoString = "https://github.com/AlbertoBarrago?tab=repositories"
let tagline = "Building digital experiences that matter"
let skills = [
    "Team Leadership",
    "Cloud Solutions",
    "Frontend Development",
    "Backend Architecture",
];
let version = "v1.3.0"
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