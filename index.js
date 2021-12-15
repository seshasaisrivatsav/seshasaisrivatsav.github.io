const indexPage = {
    aboutMe: {
        masters: "I am a Masters student at Northeastern University and am expected to graduate in Dec 2017 and available to work from Jan 2018." +
            "As a student, I developed interest on Web Development using Angular 1/2/4, Software Development and problem solving." +
            "I am passionate about Software Engineering and Full Stack Development.",
        newYorkLife: "As a Cloud Software Engineer Intern at New York Life, I worked on building Insurance as a Service platform using Angular 2/4 using AWS Tech Stack (EC2, S3, Lambda, ECS, API Gateway), JavaScript, CSS, Bootstrap, DynamoDB, mySQL, database design and modeling." +
            "Working in all these varied areas across teams gave me extensive experience in the entire SDLC process of building full stack applications on the cloud.",
        wellsFargo: "I worked as Database Analyst at Wells Fargo for 2.5 years where I primarily served Teradata and Aster database applications (using SQL, Shell/Bash Scripting, Autosys and Teradata Tools and Utilities 14.0)." +
            "During this tenure, I worked with application teams providing them database support with Query Tuning, Database design, data migration etc." +
            "I also received 22 shared success awards during this period.",
        hobbies: "While I enjoy a great movie, I like to go outdoors for photography and traveling. I also am a budding cook and an amateur guitarist." +
            " post videos on YouTube and aspire to work on my hobbies once I graduate."
    },
    links: {
        resume: "https://docs.google.com/document/d/1g3P8X02bR3nBqrEMv9ARQnmea8imoptReW6ZUmEOuAE/edit?usp=sharing",
        github: "https://github.com/seshasaisrivatsav",
        linkedin: "https://www.linkedin.com/in/seshasaisrivatsav/",
        youtube: "https://www.youtube.com/seshasaisrivatsav",
        facebook: "https://www.facebook.com/seshasai.srivatsav",
        twitter: "https://twitter.com/seshasai_tris",
        instagram: "https://www.instagram.com/seshasai_tris/",
    },
    images: {
        landingImages: {
            img1_suitBoot: "images/suit_boot_1280_690.jpg",
            img2_straightPose : "images/projects/wtc_straight_pose_1280_690.png",
            img3_wtcBackdrop: "images/wtc_background_1280_690.jpg",
        }
    },
    footer: {

    }
}

const setImages = () => {
    let img1 = document.getElementById("home1-img");
    let img2 = document.getElementById("home2-img");
    let img3 = document.getElementById("home3-img");
    img1.setAttribute("src", indexPage.images.landingImages.img1_suitBoot);
    img2.setAttribute("src", indexPage.images.landingImages.img2_straightPose);
    img3.setAttribute("src", indexPage.images.landingImages.img3_wtcBackdrop);
};

const setContent = (element, content) => {
    if (typeof element.innerText == "undefined") {
        element.textContent = content;
    } else {
        element.innerText = content;
    }
}

const navBarAndLinks = () => {
    // Nav Bar
    let navBarGithub = document.getElementById("navbar-github");
    let navBarLinkedin = document.getElementById("navbar-linkedin");
    let navBarResume = document.getElementById("navbar-resume");

    // Network Icons In Description
    let networkFacebook = document.getElementById("network-facebook");
    let networkGithub = document.getElementById("network-github");
    let networkInstagram = document.getElementById("network-instagram");
    let networkLinkedIn = document.getElementById("network-linkedin");
    let networkResume = document.getElementById("network-resume");
    let networkTwitter = document.getElementById("network-twitter");
    let networkYoutube = document.getElementById("network-youtube");

    // Footer
    let footerGithub = document.getElementById("footer-github");
    let footerFacebook = document.getElementById("footer-facebook");
    let footerLinkedin = document.getElementById("footer-linkedin");
    let footerTwitter = document.getElementById("footer-twitter");

    // Nav Bar
    navBarGithub.setAttribute("href", indexPage.links.github);
    navBarLinkedin.setAttribute("href", indexPage.links.linkedin);
    navBarResume.setAttribute("href", indexPage.links.resume);

    // Network Icons in Description
    networkFacebook.setAttribute("href", indexPage.links.facebook);
    networkGithub.setAttribute("href", indexPage.links.github);
    networkInstagram.setAttribute("href", indexPage.links.instagram);
    networkLinkedIn.setAttribute("href", indexPage.links.linkedin);
    networkResume.setAttribute("href", indexPage.links.resume);
    networkTwitter.setAttribute("href", indexPage.links.twitter);
    networkYoutube.setAttribute("href", indexPage.links.youtube);

    // Footer
    footerFacebook.setAttribute("href", indexPage.links.facebook);
    footerGithub.setAttribute("href", indexPage.links.github);
    footerLinkedin.setAttribute("href", indexPage.links.linkedin);
    footerTwitter.setAttribute("href", indexPage.links.twitter);
}

const content = () => {
    let mastersStudent = document.getElementById("masters-student");
    let newYorkLife = document.getElementById("newyork-life");
    let wellsFargo = document.getElementById("wells-fargo");
    let hobbies = document.getElementById("hobbies");

    setContent(mastersStudent, indexPage.aboutMe.masters);
    setContent(newYorkLife, indexPage.aboutMe.newYorkLife);
    setContent(wellsFargo, indexPage.aboutMe.wellsFargo);
    setContent(hobbies, indexPage.aboutMe.hobbies);
}

window.addEventListener('DOMContentLoaded', () => {
    // setImages(); TODO: fix such that we dynamically update images
    navBarAndLinks();
    content();
});