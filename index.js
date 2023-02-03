const indexPage = {
    aboutMe: {
        hubSpot: "I have a lifelong passion for computer science, which was sparked by my experience playing Dangerous Dave in 1st standard. Intrigued by the power of computers, I pursued a career in the field, honing my skills through various experiences, such as helping my teachers with Microsoft products and making short movies as a high school student. I further developed my knowledge and problem-solving abilities by obtaining a Master's degree in computer science from Northeastern University, where I also served as a TA, designing assignments for the Web Development course.",
        constantContact: "I value collaboration and teamwork, and strive to maintain simple, efficient code and up-to-date architecture documents. I believe in continuous growth through listening, learning and sharing knowledge with others. ",
        masters: "My professional experience includes a Co-op role at NewYork Life Insurance, where I built Insurance as a Service using Angular and AWS technologies. I also worked as a software engineer II at Constant Contact in Boston, building marketing software for small businesses and contributing to a team that handled 80-90% of the website traffic. Currently, as a senior software engineer at HubSpot, I am part of the core CRM team, working on building services that power the creation and associations of CRM objects.",
        newYorkLife: "In my free time, I enjoy staying active through workouts, runs, and playing guitar. I also enjoy video games, cooking, and traveling. More details about each role in My Experience section below",
        wellsFargo: "",
        hobbies: "",
    },
    links: {
        resume: "https://drive.google.com/file/d/1E_o3BziBOu7uS7ktepkBLqd6qtgUi0sx/view",
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
    workExperience: {
        hubSpot: {
          name: "HubSpot",
          fromDate: "Apr 2022",
          toDate: "Feb 2023",
          title: "Senior Software Engineer I",
          description: "Delivered Same Object Associations, a most requested feature that " +
                      "would enable customers to associate objects (contacts, companies, deals etc) of the same type and created documentation for internal and external use for the same." +
                      " Optimized existing Kafka workers that used to get lagged by creating swimlanes for deletes and restores that only account for 3% of the traffic. This alleviated some of the frequent on-call alerts." +
                      " Provided 24x7 on call support for services that received nearly 400k requests/sec at 100-150 instances. Whilst on support, I worked with customer reps to understand and address customer problems that needed quick solutions." +
                      " Documented complex architecture flows for internal use that helped onboard new team members",
        },
        constantContactII: {
            name: "Constant Contact",
            fromDate: "Mar 2020",
            toDate: "Apr 2022",
            title: "Software Engineer II",
            description: "Collaborated with teams to design and implement COVID dashboard (using React, Spring and AWS) that allowed small businesses to schedule campaigns during the 2020 pandemic. " +
                "Mentoring Junior Software Engineers and interns with tech walk throughs and code reviews. " +
                "Designed and delivered marketing calendar feature that allows users to manage their marketing emails on custom built calendar with react front end and AWS backend." +
                "Resurrected a derelict migration service app to move data between internal services and from AWS using custom quartz scheduler to facilitate campaign migration for 100k accounts that use placeholder campaigns in AWS.",
        },
        constantContact: {
            name: "Constant Contact",
            fromDate: "Jan 2018",
            toDate: "Mar 2020",
            title: "Software Engineer",
            description: "Worked on Facebook integration with Constant Contact that gives users ability to send, view and receive Instagram and Facebook messages in product using FB webhooks." +
                "Ensuring high test coverage using Jest, Junit, Jasmine and also worked on integration testing using protractor.",
        },
        northeastern: {
            name: "Northeastern University",
            fromDate: "Sep 2017",
            toDate: "Dec 2017",
            title: "Graduate Teaching Assistant",
            description: "Designed the course Web Development graduate course CS 5610 with Prof. Jose. Designed final project and seed project for course references",
        },
        nyl: {
            name: "NewYork Life Insurance",
            fromDate: "Jan 2017",
            toDate: "Aug 2017",
            title: "Cloud Software Engineer Intern",
            description: "Leveraged AWS services to develop Insurance as a Service Platform using Angular 2 and PrimeNG frameworks primarily for Compensation and Billing team. Automated PDF creation for bill generation with policy data from DyanamoDB. Developed micro services and deployed them on AWS ECS for scalability. Field Marshal for Data Analysis team, responsible for migration from DynamoDB to MongoDB.",
        },
        wellsFargo: {
            name: "Wells Fargo",
            fromDate: "Jul 2013",
            toDate: "Dec 2015",
            title: "Database Administrator",
            description: "Improved the system performance by implementing ‘Automated Catalog Vacuum’ using Shell Scripting for Aster Database that reduced the failing SQL-MR queries. The automation saved $6090 annually for the company. Implemented BAR (Backup Archive Recovery) Tasks, Worked on Physical, Incremental Backups to Aster Backup manager and Data copy between Teradata to Aster and Aster to Aster and Aster and Hadoop.",
        }
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

    let moreOnResume = document.getElementById("more-on-resume");

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

    // more
    moreOnResume.setAttribute("href", indexPage.links.resume);
}

const content = () => {
    let hubSpotExp = document.getElementById("hubspot-exp");
    let constantContactExp = document.getElementById("constant-contact-exp");
    let mastersStudent = document.getElementById("masters-student");
    let newYorkLife = document.getElementById("newyork-life");
    let wellsFargo = document.getElementById("wells-fargo");
    let hobbies = document.getElementById("hobbies");

    setContent(hubSpotExp, indexPage.aboutMe.hubSpot)
    setContent(constantContactExp, indexPage.aboutMe.constantContact);
    setContent(mastersStudent, indexPage.aboutMe.masters);
    setContent(newYorkLife, indexPage.aboutMe.newYorkLife);
    setContent(wellsFargo, indexPage.aboutMe.wellsFargo);
    setContent(hobbies, indexPage.aboutMe.hobbies);
}

const createWorkElement = (work) => {
   return `<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                      <div class='resume-item'>
                          <div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 box-resume-left'>
                              <div class='resume-left-item'>
                                  <h2>${work.name}</h2>
                                  <p><span class='color-me'>from</span> ${work.fromDate} <span class='color-me'>to</span> ${work.toDate}</p>
                              </div>
                          </div>
                          <div class='col-xs-8 col-sm-8 col-md-8 col-lg-8 box-resume-right'>
                              <div class='resume-right-item'>
                                  <h2 class='job-title'>${work.title}</h2>
                                  <p class='job-description'>${work.description} </p>
                              </div>
                          </div>
                      </div>
                  </div>`
}

const createWorkExperiences = () => {
    const workExperienceContainer = document.getElementById("work-experience-container");
    workExperienceContainer.innerHTML = createWorkElement(indexPage.workExperience.hubSpot);
    workExperienceContainer.innerHTML += createWorkElement(indexPage.workExperience.constantContactII);
    workExperienceContainer.innerHTML += createWorkElement(indexPage.workExperience.constantContact);
    workExperienceContainer.innerHTML += createWorkElement(indexPage.workExperience.northeastern);
    workExperienceContainer.innerHTML += createWorkElement(indexPage.workExperience.nyl);
    workExperienceContainer.innerHTML += createWorkElement(indexPage.workExperience.wellsFargo);
}
////////////////////////////////////////// vv SKILLS  START vv /////////////////////////////////////////////////////////
const getTechSkill = (id, name, src, href) => { return {id: id, name: name, src: src, href: href};}
const generateSkillsInDiv = (div, skills) => {
    for (let skill of skills) {
        div.innerHTML +=
            `<div class='col-xs-4 col-sm-2 col-md-2 col-lg-2 box-service'> 
                <div class='service-item'> 
                    <a href=${skill.href} > <img alt=${skill.name} src=${skill.src} style='{height: 10px;}'> </a>
                 </div>
             </div>`
    }
}
const generateRowOneTechSkills = () => {
    // ROW 1 - 1. React 2. JavaScript 3.HTML 4.CSS 5. Angular 6.Jquery
    const techSkillsDiv1 = document.getElementById("technical-skills-1");
    let techSkills1 = [
        getTechSkill(0, "react", "images/logos/reactLogo.jpeg", "https://reactjs.org/"),
        getTechSkill(1, "javascript", "images/logos/javascript.png", "https://www.javascript.com/"),
        getTechSkill(2, "html", "images/logos/html_5.png", "https://www.w3.org/html/"),
        getTechSkill(3, "css", "images/logos/css.jpg", "https://developer.mozilla.org/en-US/docs/Web/CSS"),
        getTechSkill(4, "angular", "images/logos/angular.png", "https://developer.mozilla.org/en-US/docs/Web/CSS"),
        getTechSkill(5, "jQuery", "images/logos/jquery.png", "https://jquery.com/"),
    ];
    generateSkillsInDiv(techSkillsDiv1, techSkills1);
};

const generateRowTwoTechSkills = () => {
    // ROW 2 - 1. Java, 2. Spring Boot, 3. Spring MVC, 4. mySQL, 5. mongoDB 6. Teradata
    const techSkillsDiv2 = document.getElementById("technical-skills-2");
    let techSkills2 = [
        getTechSkill(0, "java", "images/logos/java_image.jpg", "https://www.java.com/en/"),
        getTechSkill(1, "springBoot", "images/logos/springBoot.png", "https://spring.io/projects/spring-boot"),
        getTechSkill(2, "springMvc", "images/logos/springMvc.png", "https://docs.spring.io/spring-framework/docs/current/reference/html/"),
        getTechSkill(3, "mySQL", "images/logos/mysql.jpg", "https://www.mysql.com/"),
        getTechSkill(4, "mongoDB", "images/logos/mongodb.png", "https://www.mongodb.com/"),
        getTechSkill(5, "teradata", "images/logos/Teradata.jpg", "http://teradata.com/")
    ];
    generateSkillsInDiv(techSkillsDiv2, techSkills2);
}
const generateRowThreeTechSkills = () => {
    // ROW 3 - 1. AWS 2. Serverless 3. AWS Lambda 3. DynamoDB 4. Github 5. Jira 6. Adobe
    // FUTURE - adobe premiere pro, photoshop, after effect
    const techSkillsDiv3 = document.getElementById("technical-skills-3");
    let techSkills3 = [
        getTechSkill(0, "aws", "images/logos/aws.png", "https://aws.amazon.com/"),
        getTechSkill(1, "awsLambda", "images/logos/aws-lambda.jpg", "https://aws.amazon.com/lambda/"),
        getTechSkill(2, "awsdynamoDB", "images/logos/dynamoDB.jpg", "https://aws.amazon.com/dynamodb/"),
        getTechSkill(3, "github", "images/logos/git.png", "https://github.com/seshasaisrivatsav/"),
        getTechSkill(4, "jira", "images/logos/jira.png", "https://www.atlassian.com/software/jira"),
        getTechSkill(5, "photoshop", "images/logos/photoshop.png", "https://www.adobe.com/products/photoshop.html")
    ];
    generateSkillsInDiv(techSkillsDiv3, techSkills3);
};
////////////////////////////////////////// ^^ SKILLS  END ^^ ///////////////////////////////////////////////////////////


window.addEventListener('DOMContentLoaded', () => {
    // setImages(); TODO: fix such that we dynamically update images
    navBarAndLinks();
    content();
    generateRowOneTechSkills();
    generateRowTwoTechSkills();
    generateRowThreeTechSkills();
    createWorkExperiences();
});
