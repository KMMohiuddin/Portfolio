// Centralized portfolio content data
const assetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

export const portfolioData = {
  personal: {
    name: "K.M. Mohiuddin",
    title: "Data Analyst",
    subtitle: "Business Intelligence & Financial Analytics",
    email: "kmmohiuddin.1@gmail.com",
    phone: "+880 1818336022",
    location: "Motijheel, Dhaka, Bangladesh",
    profileImage: assetPath("/new_img/bg_4_2.png"),
    heroImage: assetPath("/new_img/1000035718.png"),
    aboutImage: assetPath("/new_img/About me.png"),
    cvLink: "https://drive.google.com/file/d/13UJj6Vq9OuA93qszOguAdJDnODtOVHmn/view?usp=sharing",
    profileLinks: {
      github: "https://github.com/KMMohiuddin",
      linkedin: "https://www.linkedin.com/in/kmmohiuddin/",
      facebook: "https://www.facebook.com/kmmohiuddin.4",
    },
  },

  hero: {
    mainHeading: "Data Analyst & Business Intelligence Expert",
    subheading: "Transforming data into actionable intelligence to drive business success",
    description: "Leveraging Python, SQL, and BI tools to unlock valuable insights from complex datasets",
    ctaText: "Get in Touch",
    heroImages: [
      assetPath("/new_img/showcase.jpg"),
      assetPath("/new_img/bg_2.jpg"),
    ],
  },

  about: {
    heading: "About Me",
    intro: "Data Analyst - Miaki Media Ltd",
    bio: `I can design and optimize data systems that transform complex datasets into actionable intelligence. With hands-on experience in enterprise analytics and a background in Software Engineering and Data Science, I deliver high-performance data pipelines, and insightful visualizations that support business-critical decisions. 
    My expertise spans data analysis, machine learning, revenue assurance, and BI reporting, with a focus on financial analytics and fraud detection. I am passionate about continuous learning and building efficient, reliable data solutions that create measurable business value.`,
    
    longBio: `I am a results-oriented data and analytics professional with a strong commitment to continuous learning and operational excellence. I consistently demonstrate discipline in meeting deadlines and delivering high-quality outcomes, while actively seeking opportunities to expand my technical and domain expertise.

I hold a solid academic background in Software Engineering and Data Science, with comprehensive training in core areas including data structures, algorithms, database systems, operating systems, and artificial intelligence. My academic focus extended into data science disciplines such as statistical analysis, machine learning, and data management, equipping me with both theoretical depth and practical capability.

Professionally, I have developed significant experience in data analytics and revenue assurance through my roles at Nagad, where I progressed from intern to executive. In this capacity, I was responsible for validating and analyzing financial transactions, ensuring data integrity, and supporting client and product management processes. I played a key role in detecting revenue leakage, identifying fraudulent activities, and conducting real-time transaction analysis to uncover actionable insights.

Currently, I serve as an Enterprise Data Warehouse & Analytics Developer (EDWAD) at Grameenphone. My responsibilities include developing and maintaining BI reports, integrating data sources, designing and optimizing ETL pipelines, and enhancing SQL query performance to support enterprise analytics initiatives.

My technical expertise includes working with relational database systems such as MS SQL Server and Oracle. I also have experience applying advanced predictive modeling techniques—including LSTM, ARIMA, and XGBoost—for time series forecasting. Additionally, I am proficient in data visualization and workflow orchestration tools such as QlikView, Power BI, and Apache Airflow, enabling efficient data pipeline management and insightful reporting.

I bring a balanced combination of technical proficiency, analytical thinking, and business awareness, allowing me to contribute effectively to data-driven decision-making in complex organizational environments.`,

    hobbies: ["Music", "Travel", "Movies", "Sports"],
  },

  experience: [
        {
      company: "Miaki Media Ltd",
      companyLogo: assetPath("/new_img/Miaki_logo.png"),
      companyUrl: "https://miaki.co",
      role: "Data Analyst ",
      period: "October 2024 - Running",
      duration: "Current",
      clientLogo: assetPath("/new_img/GP_logo.jpg"),
      clientName: "Grameenphone Ltd",
      description: "Augmented Resource: Grameenphone Ltd. Enterprise Data Warehouse & Analytics Developer (EDWAD), Data Analytics & IT Team",
      responsibilities: [
        "Design, develop, and optimize end-to-end ETL pipelines integrating data from multiple enterprise sources into a centralized data warehouse, ensuring seamless data flow, enhanced data quality, and scalable reporting capabilities.",
        "Develop and maintain performance-optimized stored procedures, views, and complex SQL queries, significantly reducing data processing times for large-scale datasets",
        "Develop and deliver analytics solutions and BI reports in Qlikview, translating evolving business requirements into robust analytical dashboards for cross-departmental stakeholders.",
        "Translate technical specifications into data warehouse and BI solutions, independently owning projects from inception through testing and delivery with minimal supervision.",
        "Implement data modeling and architecture standards to support scalable and maintainable data structures aligned with business reporting needs.",
        "Utilize Confluent Kafka for real-time data integration, contributing to high-volume streaming data pipelines across organizational systems.",
        "Conduct code reviews, maintain documentation, and track issues throughout development and UAT phases, ensuring quality assurance and stakeholder alignment."
      ],
    },
    {
      company: "NAGAD",
      companyLogo: assetPath("/new_img/nagad_logo.jpg"),
      companyUrl: "http://www.nagad.com.bd",
      role: "Executive - Revenue Assurance & Business Assurance",
      period: "September 2023 - October 2024",
      duration: "1 year 1 month",
      description: "Worked on data analysis, revenue assurance, and Data Model Development",
      responsibilities: [
        "Conducting thorough data analysis and validation processes for various financial transactions such as BI reports, merchant settlement, product commission, reconciliation and reimbursement procedures.",
        "Overseeing the execution of automated campaigns and settlement processes, ensuring accuracy and efficiency.",
        "Finding revenue leakage, fraudulent activity, and transaction trends by analyzing real-time data.",
        "Onboarding, monitoring, and managing controls, escalation, and channeling them effectively to ensure swift resolution.",
        "Collaborating with cross-functional teams and clients to resolve day-to-day issues, reconcile reports, validate invoices, and ensure regulatory compliance.",
      ],
    },
    {
      company: "NAGAD",
      companyLogo: assetPath("/new_img/nagad_logo.jpg"),
      companyUrl: "http://www.nagad.com.bd",
      role: "Intern - Revenue Assurance & Business Assurance",
      period: "April 2023 - September 2023",
      duration: "6 months",
      description: "Gained hands-on experience in data analysis, visualization, and predictive modeling",
      responsibilities: [
        "Tasks include data analysis, finding insights, campaign configuration, web scraping, and real-time data forecasting.",
        "Working with MS SQL Server and Oracle Database for data collection, analysis, and migration.",
        "Using data visualization tools like QlikView, Power BI, Apache Airflow, and Adobe Spark for task automation and monitoring.",
        "Predictive analytics using LSTM, ARIMA, and XGBoost for time series forecasting.",
        "Implementing various machine learning algorithms.",
      ],
    },
  ],

  extracurricular: [
    {
      organization: "Software Engineering Club (SEC), DIU",
      logo: assetPath("/new_img/sec.jpg"),
      role: "Vice President",
      duration: "1 year",
      url: "https://facebook.com/secdiu",
    },
    {
      organization: "GaoTech",
      logo: assetPath("/new_img/gao_tek_inc__logo.jpg"),
      role: "Tech Support Intern",
      duration: "3 months",
      url: "https://gaotek.com",
    },
    {
      organization: "Data Science Club, DIU",
      logo: assetPath("/new_img/ds.jpg"),
      role: "Executive Member",
      duration: "Active",
      url: "https://web.facebook.com/dsc.diu",
    },
    {
      organization: "Aachol Foundation",
      logo: assetPath("/new_img/aachol.png"),
      role: "Research Project Contributor",
      duration: "4 months",
    },
    {
      organization: "DIU Voluntary Service Club",
      logo: assetPath("/new_img/vsc.jpg"),
      role: "Member",
      url: "https://web.facebook.com/diuvsc",
    },
    {
      organization: "Rotaract Club of DIU",
      logo: assetPath("/new_img/rc.png"),
      role: "Member",
      url: "https://web.facebook.com/racdiu",
    },
  ],

  skills: [
    {
      category: "Data Analysis",
      rating: 5,
      icon: "📊",
      description: "Business process analysis, transaction validation, data quality assurance",
    },
    {
      category: "Data Science",
      rating: 5,
      icon: "🤖",
      description: "Machine learning, predictive modeling, statistical analysis",
    },
    {
      category: "Revenue & Risk Analysis",
      rating: 5,
      icon: "💰",
      description: "Financial analytics, fraud detection, revenue reconciliation",
    },
    {
      category: "Business Intelligence",
      rating: 4,
      icon: "📈",
      description: "BI reporting, dashboard development, data visualization",
    },
    {
      category: "Programming",
      rating: 4,
      icon: "💻",
      description: "Python, SQL, C++, Java, JavaScript",
    },
    {
      category: "Data Visualization",
      rating: 4,
      icon: "🎨",
      description: "QlikView, Power BI, Tableau, Highcharts",
    },
  ],

  tools: [
    {
      category: "Programming & Data Analysis",
      items: ["Python", "SQL", "R", "JavaScript"],
    },
    {
      category: "Databases",
      items: ["MS SQL Server", "Oracle Database", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Data Visualization & BI",
      items: ["QlikView", "Power BI", "Tableau", "Highcharts", "Apache Airflow"],
    },
    {
      category: "Machine Learning",
      items: ["TensorFlow", "Scikit-learn", "LSTM", "ARIMA", "XGBoost"],
    },
    {
      category: "Platforms & Cloud",
      items: ["AWS", "Google Cloud", "Microsoft Azure", "GitHub"],
    },
    {
      category: "Development Tools",
      items: ["VS Code", "Jupyter Notebook", "Git", "Docker"],
    },
  ],

  education: [
    {
      degree: "Masters of Science in Computer Science & Engineering",
      major: "",
      institution: "North South University",
      institutionLogo: assetPath("/new_img/NSU MSC logo.png"),
      institutionUrl: "https://ece.northsouth.edu/graduate/graduate-admission/mscse/",
      location: "Dhaka, Bangladesh",
      cgpa: "",
      year: "2026 - Running",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      major: "Major in Data Science",
      institution: "Daffodil International University",
      institutionLogo: assetPath("/new_img/DIU BSC logo.jpg"),
      institutionUrl: "https://daffodilvarsity.edu.bd",
      location: "Dhaka, Bangladesh",
      cgpa: "3.91 / 4.00",
      year: "2019 - 2023",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      institution: "National Ideal College",
      location: "Dhaka, Bangladesh",
      gpa: "4.83 / 5.00",
      year: "2016 - 2018",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "Science",
      institution: "Motijheel Model School & College",
      location: "Dhaka, Bangladesh",
      gpa: "5.00 / 5.00",
      year: "2014 - 2016",
    },
  ],

  achievements: [
    {
      title: "Skill Development Training - Mobile Game & Application Project",
      image: assetPath("/new_img/game.jpg"),
      category: "Training",
    },
    {
      title: "Tech Support Internship - GAOTek Inc.",
      image: assetPath("/new_img/gaointern.png"),
      category: "Internship",
    },
    {
      title: "Workshop on Artificial Neural Networks",
      image: assetPath("/new_img/dsann.jpg"),
      category: "Workshop",
    },
    {
      title: "Session on ANN in Business & Management Research",
      image: assetPath("/new_img/dsml.jpg"),
      category: "Workshop",
    },
    {
      title: "DIU Smart City Idea Contest",
      image: assetPath("/new_img/dsidea.jpg"),
      category: "Competition",
    },
    {
      title: "DIU TAKE OFF Programming Contest",
      image: assetPath("/new_img/takeoff.jpg"),
      category: "Competition",
    },
    {
      title: "National Hackathon",
      image: assetPath("/new_img/hack.jpg"),
      category: "Competition",
    },
    {
      title: "3rd Data Science Summit 2022 - Organizer & Participant",
      image: assetPath("/new_img/dsorg.jpg"),
      category: "Event",
    },
    {
      title: "DIU Software Engineering Club - Vice President",
      image: assetPath("/new_img/SECvp.jpg"),
      category: "Leadership",
    },
    {
      title: "SEC Event Organization",
      image: assetPath("/new_img/sec12.jpg"),
      category: "Leadership",
    },
    {
      title: "Leadership Training",
      image: assetPath("/new_img/lead1.jpg"),
      category: "Training",
    },
    {
      title: "Token of Excellence",
      image: assetPath("/new_img/seca.jpg"),
      category: "Award",
    },
    {
      title: "Youth Social Leadership Training Program",
      image: assetPath("/new_img/ysl.jpg"),
      category: "Training",
    },
  ],

  portfolio: [
    {
      title: "Time Series Forecasting Model",
      description: "Predictive analytics using LSTM and ARIMA for financial forecasting",
      technologies: ["Python", "TensorFlow", "LSTM", "ARIMA"],
      link: "#",
      image: assetPath("/new_img/P1.png"),
    },
  ],
};

export default portfolioData;
