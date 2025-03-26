import pkg from '../../package.json'

let name = "alBz";
let role = "Fullstack DevLover";
let cv_filename = "BARRAGOALBERTO-CV.pdf"
let githubRepoString = "https://github.com/AlbertoBarrago?tab=repositories&catx=736&caty=799&catdx=1208&catdy=890&type=public"
let tagline = "Building digital experiences that matter"
let skills = [
    "Team Leadership",
    "Cloud Solutions",
    "Frontend Development",
    "Backend Architecture",
];
let version = pkg.version;
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