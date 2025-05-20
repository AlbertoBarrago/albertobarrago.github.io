import pkg from '../../package.json'

let name = "alBz";
let role = "Fullstack DevLover";
let cv_filename = "albertobarrago_cv.pdf"
let githubRepoString = "https://github.com/AlbertoBarrago?tab=repositories&catx=736&caty=799&catdx=1208&catdy=890&type=public"
let tagline = "Building digital experiences that matter"
let skills = [
    "Cloud Solutions",
    "Full-Stack Development",
    "DevOps Optimization",
    "AI Integration"
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

  gtag("event", "download_cv", {
      event_category: "engagement",
      event_label: "Download CV Button",
      value: 1
  });
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