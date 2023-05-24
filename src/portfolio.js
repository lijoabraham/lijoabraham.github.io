/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lijo's Portfolio",
  description:
    "As a passionate software engineer dedicated to crafting elegant and efficient solutions that empower users and drive positive change in the digital world.",
  og: {
    title: "Lijo Abraham Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Lijo Abraham",
  logo_name: "Lijo Abraham",
  nickname: "",
  subTitle:
    "As a passionate software engineer dedicated to crafting elegant and efficient solutions that empower users and drive positive change in the digital world.",
  resumeLink:
    "https://drive.google.com/file/d/1KlZ0_GsSskNxUothqJFFze_iTBOCREMV/view?usp=share_link",
  portfolio_repository: "https://github.com/lijoabraham/my-portfolio",
  githubProfile: "https://github.com/lijoabraham",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/lijoabraham",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lijo-abraham-72401b6a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://medium.com/@lijoabraham1234",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lijoabraham1234@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Data Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Collaborate closely with cross-functional stakeholders to design, develop, and implement diverse initiatives within the data platform.",
        "⚡ Experience in designing and implementing data processing pipelines for handling large volumes of data.",
        "⚡ Experienced in effectively managing a team of like-minded engineers.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "devicon:apachespark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos:airflow-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "ph:file-sql-bold",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "logos:snowflake-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-dark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Backend Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing and developing scalable and efficient backend systems and APIs.",
        "⚡ Implementing robust and secure data storage solutions, such as databases and data warehouses.",
        "⚡ Optimizing backend performance through efficient coding practices and system architecture",
        "⚡ Integrating third-party services and APIs to enhance backend functionality and improve system capabilities.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "devicon:php",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing a JavaScript-powered responsive website.",
        "⚡ Designing individual script widgets utilizing JavaScript",
        "⚡ Creating diverse frontend functionalities for websites.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#339933",
          },
        }
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Creating data pipelines using various cloud services",
        "⚡ Establishing data migration tasks from one database to another on Amazon Web Services (AWS).",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },   
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: {
            color: "#4285F4",
          },
        },      
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/lijoabraham1234/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/lijoabraham1234",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Mar Baselios College of Engineering and Technology, Trivandrum, Kerala, India",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "mbt.png",
      alt_name: "MBT Nalanchira",
      duration: "2008 - 2012",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Andrioid development and Web Development.",
        "⚡ During the time frame of 2011-2012, I was elected as the general secretary of the college committee.",
      ],
      website_link: "https://mbcet.ac.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "DVA-C02",
      logo_path: "aws_dva.png",
      certificate_link:
        "https://www.credly.com/badges/f8e1dede-fbf2-41b9-bdce-54cabef1fab6/public_url",
      alt_name: "AWS Developer Associate",
      color_code: "#8C151599",
    },
    {
      title: "Analyzing Big Data with SQL",
      subtitle: "- Cloudera",
      logo_path: "cloudera.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/YGM8STP68R7W",
      alt_name: "cloudera",
      color_code: "#00000099",
    },
    {
      title: "Modern Big Data Analysis with SQL",
      subtitle: "- Cloudera",
      logo_path: "cloudera.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/DQXXX5AUQXMC",
      alt_name: "cloudera",
      color_code: "#0C9D5899",
    },
    {
      title: "Foundations for Big Data Analysis with SQL (with Honors)",
      subtitle: "- Cloudera",
      logo_path: "cloudera.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ME5XDDJMREX6",
      alt_name: "cloudera",
      color_code: "#1F70C199",
    },
    {
      title: "Pyspark essentials for Data Scientists",
      subtitle: "- Pyspark",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ad58e9d8-a3a3-4cd1-891a-88eb852bebe5/",
      alt_name: "Udemy",
      color_code: "#2A73CC",
    },
    {
      title: "Big Data with Apache Spark and Python",
      subtitle: "- Pyspark",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-1a377d30-32d9-4c28-bc96-ded0a4ad90f3/",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
    {
      title: "Oracle Certified Professional, Java SE 6 Programmer",
      subtitle: "- Oracle",
      logo_path: "oracle.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Oracle",
      color_code: "#1F70C199",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have actively engaged with a diverse range of startups throughout my career, fulfilling roles as a Full Stack Developer, Backend Engineer, and Software Architect. Furthermore, I have gained valuable experience by collaborating with prominent and established organizations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Lead Engineer",
          company: "Imaginea - Acquired by Accenture",
          company_url: "https://www.accenture.com/in-en/services/software-engineering/product-platform-engineering",
          logo_path: "imaginea.jpg",
          duration: "July 2021 - Present",
          location: "Hyderabad, Telangana, India",
          description:
            "Working as a Lead engineer for a US based Healthcare Analytics company. Collaborated closely with cross-functional stakeholders to design, develop, and implement diverse initiatives within the data platform. Responsible for a team of data engineers in the design and development of a healthcare data platform, utilizing AWS services, Databases, and Python. Designed, Built and managed flexible data pipelines for healthcare data ingestion, curation, transformation, and de-identification from diverse sources. Assisted in successfully onboarding more than 8 clients , resulting in a revenue increase of approximately 10%.",
          color: "#0879bf",
        },
        {
          title: "Principal Engineer",
          company: "Pramati Technologies",
          company_url: "https://pramati.com/about/",
          logo_path: "pramati.png",
          duration: "Jan 2019 - July 2021",
          location: "Hyderabad, Telangana, India",
          description:
            "Developed a tool for the pre-sales team for getting insights about the various assets and people using Scrapy , Neo4j and Airflow which helped to fulfil sourcing a much better pace than before.Implemented a Intelligent Interview Scheduling System with an automatic meeting scheduling feature based on calendar events for a US based people management company.Designed and developed 5 highly efficient insurance web portals , empowering agents to seamlessly perform a diverse array of tasks.",
          color: "#9b1578",
        },
        {
          title: "Module Lead",
          company: "Gadgets360 - An NDTV Venture",
          company_url: "https://www.gadgets360.com/about-us",
          logo_path: "ndtv.png",
          duration: "Nov 2015 - Jan 2019",
          location: "New Delhi, India",
          description:
            "Responsible for the data migration of search data from AWS cloudsearch to Elasticsearch .Handled data size is about 26 million docs.Developed price aggregator recommendation system which helps users to purchase online products in an easy manner.Build a tracking system to know how well the affiliate is performing by knowing the CTR and CPC rates.Built Chatbots for getting news and product information using Dialogflow and Elasticsearch.",
          color: "#fc1f20",
        },
        {
          title: "Software Engineer",
          company: "Shopclues.com",
          company_url: "https://www.shopclues.com/aboutus.html",
          logo_path: "shopclues.svg",
          duration: "Jan 2013 - Nov 2015",
          location: "Gurugram, Haryana, India",
          description:
            "Worked as part of the Search Team which mainly helps in improving/optimizing product indexing to SOLR .Developed features such as product rank search , auto-suggestion and filters.Developed features for the internal sites search using SOLR, MongoDB, Memcached , Rabbitmq.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "The majority of my projects are driven by my personal interests, serving as opportunities for me to explore and acquire proficiency in emerging technologies, as well as enhance my skill set.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "If you need assistance with Data Engineering, Backend development, or Cloud Development, I'm here to help. Don't hesitate to reach out to me for any questions or support you may require in these areas.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I enjoy writing powerful lessons that have a profound impact on each individual reader, inspiring them to make positive changes at their core.",
    link: "https://medium.com/@lijoabraham1234",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Plot no-103, P and T colony, Tirumalgiri, Secunderabad, Hyderabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
