/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Berk Tarzan",
  title: "Merhabalar, Ben Berk",
  subTitle: emoji(
    "Tutkulu bir web yazılım geliştiricisiyim. 🚀 Projelerinizi PHP, JavaScript, HTML5/CSS3 ve bir çok yeni teknoloji kütüphaneler/çatılar kullanarak tasarlayabilirim."
  ),
  resumeLink:
    "https://discord.com/invite/QHjgfq5WAV", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yberktarzan",
  linkedin: "https://www.linkedin.com/in/yberktarzan/",
  gmail: "y.berktarzan@gmail.com",
  medium: "https://medium.com/@yberktarzan",
  instagram: "https://instagram.com/berktarzan",
  twitter : "https://twitter.com/berk_tarzan",
  kaggle : "https://www.kaggle.com/yberktarzan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Neler Yaparım?",
  subTitle: "Çılgın bir öğrenme arzusu ve sıkı bir disiplin sayesinde zorlu projelerinizi geliştirebilirim.",
  skills: [
    emoji(
      "⚡ Her cihaza uyumlu yönetim panelli web siteleri geliştirebilirim. "
    ),
    emoji("⚡ Web uygulaması projelerinizin backend yazılımlarını geliştirebilirim. "),
    emoji(
      "⚡ 3. parti yazılımların projenize entegrasyonunu sağlayabilirim."
    ),
    emoji(
      "⚡ Sosyal medya hesaplarınızı ve reklamlarınızı yönetebilirim."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript - TS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mangodb",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },

    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },

    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ISTANBUL AYDIN ÜNİVERSİTESİ",
      logo: require("./assets/images/iaulogo.png"),
      subHeader: "Lisans - Yazılım Mühendisliği",
      descBullets: [
        "I have studied basic software engineering subjects like Algorithms, DBMS, OS, AI etc."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Programlama", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Sosyal Medya Yönetimi | Produksiyon - Çekim",
      progressPercentage: "80%"
    },
    {
      Stack: "Google İşletme ve Reklam",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Kurucu",
      company: "Titan Bilişim Hizmetleri",
      companylogo: require("./assets/images/x.png"),
      date: "Kolektif House, Maslak/Istanbul",
      desc: "Titan Bilişim Hizmetleri, günümüz teknolojilerini yakından takip ederek, sektöründeki lider şirketlere danışmanlık, tasarım, yazılım ve dijital pazarlama hizmetleri sunmaktadır.",
    },
    {
      role: "Stajyer",
      company: "Baykar Technologies",
      companylogo: require("./assets/images/baykar.png"),
      date: "Milli S/İHA Sistemleri Ar-Ge Üretim Tesisi, Istanbul",
      desc: "Computer Vision / ML",
    },
    {
      role: "Founder",
      company: "Kreatif Seven",
      companylogo: require("./assets/images/kreatif.jpg"),
      date: "Kolektif House, Maslak/Istanbul",
      desc: "Dijital çağda doğan yeni nesil iletişim ajansı."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portföy",
  subtitle: "Beraber çalışmaktan keyif aldığım müşterilerim:",
  projects: [
    {
      image: require("./assets/images/nurka.png"),
      projectName: "Nur Kağıt Rulo",
      projectDesc: "Web Tasarım - Yazılım",
      footerLink: [
        {
          name: "Siteye Git",
          url: "https://nurkagitrulo.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arkhe.png"),
      projectName: "Arkhe Eğitim ve Danışmanlık",
      projectDesc: "Web Tasarım - Yazılım",
      footerLink: [
        {
          name: "Siteye Git",
          url: "https://arkheegitim.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bgm.png"),
      projectName: "Bigmamma's",
      projectDesc: "QR Menü Yazılımı",
      footerLink: [
        {
          name: "Siteye Git",
          url: "http://qr.titanbilisim.net/bigmammas"
        }
        //  you can add extra buttons here.
      ]
    },  
    {
      image: require("./assets/images/sistem.png"),
      projectName: "By Sistem Mühendislik",
      projectDesc: "Web Yazılım ve IT Hizmetleri, Reklam Yönetimi",
      footerLink: [
        {
          name: "Siteye Git",
          url: "https://www.sistemyangin.com/",
        }
        //  you can add extra buttons here.
      ]
    }, 
    {
      image: require("./assets/images/nekretlogo.png"),
      projectName: "Nekretnine Istanbul",
      projectDesc: "Web Tasarım - Yazılım | Reklam Yönetimi",
      footerLink: [
        {
          name: "Siteye Git",
          url: "https://nekretnine.istanbul/"
        }
      ]
    },
    {
      image: require("./assets/images/zuraffa.png"),
      projectName: "Zuraffa Store - K&K Duran",
      projectDesc: "Web Tasarım - Yazılım",
      footerLink: [
        {
          name: "Siteye Git",
          url: "https://zuraffastore.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ipekde.png"),
      projectName: "İpekde",
      projectDesc: "Web Tasarım - Yazılım, Reklam Yönetimi",
      footerLink: [
        {
          name: "Siteye Git",
          url: "https://ipekde.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Test",
      subtitle: "Test",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "My favorite podcasts",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/show/6O7PH7tqLiERxXfxY9mIhB?utm_source=oembed", 
    "https://open.spotify.com/embed/show/6HCwhbKxFO9URWPrvf6vs0?utm_source=oembed",
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "berk_tarzan", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};