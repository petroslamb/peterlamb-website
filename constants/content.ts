import { Content } from '../types';

export const content: Record<'en' | 'gr', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      blog: "Blog",
    },
    home: {
      name: "Peter Lamb",
      title: "Software & AI Engineering Consultant",
      subtitle: "Helping businesses design, build, and scale reliable software and data solutions.",
      specialties: "Specialized in Python, AI/ML, SaaS, and big data.",
      cta: "Work with me",
      servicesTitle: "Services snapshot",
      services: [
        { title: "Software Engineering", description: "Scalable back-end systems, APIs, SaaS platforms.", slug: "software-engineering" },
        { title: "AI & Machine Learning", description: "NLP, model development, and MLOps practices.", slug: "ai-machine-learning" },
        { title: "Big Data & Analytics", description: "Data pipelines, Spark, cloud-based processing.", slug: "big-data-analytics" },
        { title: "Consulting & Support", description: "Technical strategy, feasibility studies, and audits.", slug: "consulting-technical-support" },
      ],
      credibility: "Trusted by companies in AI, SaaS, and cybersecurity, including Workable, NannyML, and Orfium.",
    },
    about: {
      title: "About Me",
      greeting: "Hi, I’m Peter Lamb (Petros Lambropoulos)",
      intro: "a senior software engineer based in Athens, Greece and Canada. I have over 10 years of experience working in AI, SaaS, and security analytics, with a strong background in:",
      experienceTitle: "Experience",
      experience: [
        "Python & backend systems",
        "Machine learning & natural language processing",
        "Big data engineering & distributed systems",
        "Software product development",
      ],
      skillsTitle: "Technical Skills",
      skills: [
        { title: "Languages", items: ["Python", "SQL", "JavaScript/TypeScript", "Bash"] },
        { title: "Frameworks & Libraries", items: ["Django", "Flask", "FastAPI", "React", "PySpark", "Scikit-learn", "Pandas", "LangChain"] },
        { title: "Tools & Platforms", items: ["Docker", "Kubernetes", "Elasticsearch", "PostgreSQL", "Git", "Jenkins", "Nginx"] },
        { title: "Cloud & MLOps", items: ["AWS (EC2, S3, RDS)", "Google Cloud", "Terraform", "MLflow", "Airflow"] },
      ],
      educationTitle: "Education",
      education: [
        "MSc in Computer Science (University of Edinburgh)",
        "MSc in Electronic Automation & Information Systems (University of Athens)",
      ],
      languagesTitle: "Languages",
      languages: "English (professional), Greek (native), German (limited working).",
      resumeButton: "Download Resume",
    },
    services: {
      title: "Services",
      intro: "I offer flexible consulting and development services, tailored to your needs:",
      readCaseStudies: "Read Case Studies",
      backToServices: "Back to Services",
      categories: [
        { 
          title: "Software Engineering", 
          slug: "software-engineering",
          intro: "Building robust, scalable, and maintainable software is at the core of my expertise. My experience spans from building high-performance APIs to architecting entire SaaS platforms. Below are examples of how I've solved key engineering challenges for various companies.",
          businessProse: `I don't just write code; I build digital assets that drive business growth. My focus is on creating scalable, secure, and maintainable backend systems that form the backbone of modern applications. Whether you're a startup launching an MVP or an established company scaling your platform, I provide the engineering excellence needed to succeed.

### Precise Service Offerings:
*   **API Development & Integration:** Designing and building high-performance REST APIs to power your applications and connect with third-party services.
*   **SaaS Platform Architecture:** Architecting multi-tenant, scalable SaaS products from the ground up, ensuring long-term viability.
*   **Backend System Modernization:** Refactoring legacy codebases to modern frameworks and microservices architectures to improve performance and maintainability.
*   **Database Design & Optimization:** Structuring and fine-tuning PostgreSQL databases for speed, reliability, and scale.

### Future-Ready Expertise:
*   **Cloud Infrastructure & DevOps:** I can establish CI/CD pipelines and deploy applications on AWS or Google Cloud using Docker and Kubernetes, automating your path to production.
*   **Technical Performance Audits:** I can analyze your existing systems to identify and eliminate bottlenecks, enhancing user experience and reducing operational costs.`,
          items: ["Python development (Flask, Django, FastAPI).", "SaaS platforms and APIs.", "System architecture & integration."],
          caseStudies: [
            {
              company: "Orfium",
              challenge: "Develop and scale the backend system for a high-traffic platform managing music rights and royalties, ensuring reliability and maintainability.",
              solution: ["Architected and built robust backend services using Django and Postgres.", "Adhered to twelve-factor app principles to create a scalable and portable application, deployed successfully on Heroku."],
              technologies: ["Python", "Django", "PostgreSQL", "Heroku"]
            },
            {
              company: "ENCODE (Security Analytics)",
              challenge: "Design and build a near-realtime analytics engine and a high-performance API to serve security threat data from multiple sources like Splunk, Redis, and MySQL.",
              solution: ["Developed the core backend analytics engine in Python to detect threats from company web traffic logs.", "Built a REST API using Flask and SQLAlchemy to serve analytics results efficiently to user-facing dashboards."],
              technologies: ["Python", "Flask", "SQLAlchemy", "Splunk", "Redis", "MySQL"]
            },
            {
              company: "NeuroPublic S.A.",
              challenge: "Create the backend infrastructure for a new web application aimed at precision agriculture, requiring efficient data processing for fertilizer management.",
              solution: ["Led the Python backend development for services supporting the new application.", "Successfully worked in an interdisciplinary team to complete the rapid development and deployment of the platform."],
              technologies: ["Python", "Backend Development", "Web Applications"]
            }
          ]
        },
        { 
          title: "AI & Machine Learning", 
          slug: "ai-machine-learning",
          intro: "I specialize in the practical application of AI and ML, from traditional NLP to the latest in Generative AI. My focus is on building and deploying models that deliver real business value. Here are some highlights of my work in the AI/ML space.",
          businessProse: `I help businesses harness the power of AI not as a buzzword, but as a tool to create tangible value. From automating internal processes to building intelligent product features that delight users, I bridge the gap between AI potential and real-world business application. My expertise covers the full lifecycle, from prototyping and model selection to deploying and maintaining models in production.

### Precise Service Offerings:
*   **Generative AI & LLM Integration:** Building applications with OpenAI/GPT and LangChain for tasks like advanced search, content generation, and summarization.
*   **Custom NLP Solutions:** Developing models for text classification, entity recognition, and sentiment analysis tailored to your specific domain.
*   **MLOps & Productionalization:** Creating robust pipelines for deploying, monitoring, and retraining models to ensure they perform reliably at scale.

### Future-Ready Expertise:
*   **AI-Powered Chatbot Development:** I can create intelligent, context-aware chatbots for customer support or internal use cases, improving efficiency and user engagement.
*   **AI Product Strategy:** I provide consulting on how to best leverage AI within your product, identifying high-impact use cases and defining a clear roadmap for implementation.`,
          items: ["Natural language processing (text classification, search, embeddings).", "Generative AI exploration (OpenAI, LangChain, Pinecone).", "MLOps & production model deployment."],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Enhance the company's core NLP products with Generative AI capabilities and streamline the machine learning model lifecycle from development to production.",
              solution: ["Developed and maintained ML model serving microservices, ensuring high availability and performance.", "Applied MLOps best practices to automate deployment, monitoring, and retraining pipelines.", "Led Proof-of-Concept projects on Generative AI using OpenAI, LangChain, and Pinecone to explore new product features."],
              technologies: ["Python", "Generative AI", "OpenAI", "LangChain", "Pinecone", "MLOps"]
            },
            {
              company: "NannyML",
              challenge: "Prototype and build a new SaaS product for monitoring machine learning models in production, a critical component of MLOps.",
              solution: ["Led product prototyping and development in Python for the ML model monitoring platform.", "Managed the deployment and orchestration of the application on Amazon Elastic Kubernetes Service (EKS) using Helm charts."],
              technologies: ["Python", "SaaS", "MLOps", "AWS EKS", "Kubernetes", "Helm"]
            }
          ]
        },
        { 
          title: "Big Data & Analytics", 
          slug: "big-data-analytics",
          intro: "I have a demonstrated history of designing and building systems that can process and analyze massive datasets. My experience covers data pipeline architecture, distributed computing, and performance optimization for large-scale analytics.",
          businessProse: `Data is one of your most valuable assets, but only if you can process and understand it. I build the systems that turn massive, complex datasets into clear, actionable insights. My experience in distributed computing and large-scale analytics platforms ensures your business can make data-driven decisions, no matter the volume or velocity of your data.

### Precise Service Offerings:
*   **Scalable Data Pipelines (ETL/ELT):** Designing and building robust pipelines using tools like Apache Spark and Airflow on cloud platforms (AWS, GCP).
*   **Log Analytics & Cybersecurity Platforms:** Creating systems to process and analyze terabytes of log data for security threat detection and operational intelligence.
*   **Time-Series Forecasting:** Developing predictive models to forecast future trends, such as user demand, sales, or resource needs.

### Future-Ready Expertise:
*   **Real-time Analytics Dashboards:** I can build systems that feed into live dashboards (e.g., using Elasticsearch/Kibana or custom solutions) for immediate operational insights.
*   **Data Warehouse Implementation:** I can guide you in choosing and implementing a modern data warehouse (like BigQuery or Snowflake) for centralized business intelligence.`,
          items: ["Data pipeline design (Spark, Elasticsearch, AWS).", "Large-scale log parsing and analytics.", "Forecasting & time-series modeling."],
          caseStudies: [
            {
              company: "ENCODE (Cybersecurity)",
              challenge: "Build a new analytics platform from the ground up to process terabytes of network logs for a large-scale intrusion detection system, replacing and outperforming a legacy system.",
              solution: ["Architected and developed a data processing platform using Apache Spark on AWS for distributed analytics.", "Utilized Elasticsearch as the core analytics engine to enable security analysts to run complex queries on massive datasets with low latency.", "Successfully executed performance and memory optimizations on the legacy platform to handle larger data volumes during the transition period."],
              technologies: ["Python", "Apache Spark", "Elasticsearch", "AWS", "Cybersecurity"]
            },
            {
              company: "Skyscanner",
              challenge: "Develop and maintain data acquisition systems to gather fare prices from numerous airlines and third-party sources reliably.",
              solution: ["Took ownership of core team responsibilities involving the development and maintenance of API scrapers in Python.", "Successfully managed communication with third parties for specification settling and integration."],
              technologies: ["Python", "API Integration", "Web Scraping", "Data Acquisition"]
            }
          ]
        },
        { 
          title: "Consulting & Technical Support", 
          slug: "consulting-technical-support",
          intro: "Drawing on over a decade of experience, I provide strategic guidance and technical leadership to help businesses navigate complex software and data challenges. My consulting services cover the entire project lifecycle.",
          businessProse: `Beyond hands-on development, I offer strategic technical guidance to de-risk your projects and accelerate your roadmap. As a technical partner, I help you make the right architectural decisions, evaluate new technologies, and ensure your engineering efforts are aligned with your business goals from day one.

### Precise Service Offerings:
*   **Technical Feasibility & Prototyping:** Conducting rapid Proof-of-Concepts (PoCs) to validate ideas and technology choices before committing significant resources.
*   **System Architecture Design:** Planning the technical blueprint for new products, focusing on scalability, security, and cost-effectiveness.
*   **Root Cause Analysis & Post-mortems:** Investigating critical system failures or security incidents to provide clear analysis and actionable prevention strategies.

### Future-Ready Expertise:
*   **Fractional CTO / Tech Lead:** I provide senior technical leadership and team mentorship on a part-time basis for startups and growing teams that need expert guidance without a full-time commitment.
*   **Technical Due Diligence:** I assist investors or acquirers in evaluating the technical health, scalability, and risks of a software company or potential acquisition.`,
          items: ["Feasibility analysis and PoCs.", "Requirements gathering & architecture design.", "Ongoing support for specialized applications."],
          caseStudies: [
            {
              company: "Various Freelance Clients",
              challenge: "Clients across different industries required expert guidance on data, machine learning, and backend engineering projects, often from conception to launch.",
              solution: ["Provided end-to-end consulting services covering requirements analysis, project management, and feasibility analysis.", "Designed system architectures for ML and backend services.", "Conducted post-mortems on system failures and security incidents (e.g., DDoS attacks) to identify root causes and implement preventative measures."],
              technologies: ["Project Management", "System Architecture", "Feasibility Analysis", "Requirements Gathering"]
            }
          ]
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      intro: "Selected work and case studies:",
      projects: [
        { 
          slug: "dance-school-saas",
          title: "Dance School Management SaaS",
          description: "Full-stack development of a scheduling and billing tool for performing arts schools.",
          technologies: ["Django", "React", "PostgreSQL", "Stripe API", "AWS"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Project Overview
This project is a comprehensive SaaS platform built to serve the specific needs of dance and performing arts schools. The primary goal was to create a centralized system for managing class schedules, student registrations, automated billing, and parent communications.

### Challenges
The primary challenges were designing a flexible database schema to accommodate complex scheduling rules (e.g., bi-weekly classes, term-based schedules), implementing a secure and reliable recurring payment system with Stripe, and ensuring the user interface was intuitive for non-technical studio owners.

### Solutions Implemented
*   **Database:** I designed a relational database schema using Django's ORM that elegantly handled students, classes, schedules, and enrollments, allowing for complex queries without sacrificing performance.
*   **Billing:** I integrated the Stripe API, building robust webhooks to handle subscription statuses, failed payments, and automated invoicing. This decoupled the billing logic from the main application, increasing reliability.
*   **Frontend:** A responsive UI was built with React, featuring an interactive calendar for scheduling and a clear registration portal for parents, which significantly reduced administrative workload for the schools.

### My Role & Technical Contributions
As the sole full-stack developer, I was responsible for the entire project from conception to deployment. My key contributions included:
*   Developing the backend REST API with Django Rest Framework.
*   Designing and implementing the PostgreSQL database schema.
*   Building the recurring billing and subscription management system with Stripe.
*   Developing the frontend application using React.
*   Deploying and managing the application on AWS EC2 with Gunicorn and Nginx.
`
        },
        { 
          slug: "alzheimers-text-classification",
          title: "Alzheimer’s Text Classification",
          description: "NLP prototype for early diagnosis support using linguistic markers.",
          technologies: ["Python", "Scikit-learn", "Pandas", "NLTK", "Flask"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Project Overview & Goals
This research prototype aimed to explore the potential of Natural Language Processing (NLP) for the early detection of Alzheimer's disease. The goal was to train a machine learning model to analyze transcripts of patient interviews and identify subtle linguistic patterns that correlate with cognitive decline.

### Challenges
The main challenges were dealing with the inherent noise in transcribed speech, engineering features that could capture subtle linguistic decay (beyond simple word counts), and selecting a model that was both accurate and interpretable to understand which features were most predictive.

### Solutions Implemented & Methodology
*   **Preprocessing Pipeline:** I built a robust text preprocessing pipeline using NLTK and SpaCy to clean the data, perform part-of-speech tagging, and syntactic parsing.
*   **Feature Engineering:** Over 50 linguistic features were extracted, including lexical richness (e.g., type-token ratio), syntactic complexity (e.g., average sentence length, clause density), and hesitation markers.
*   **Modeling:** I trained and evaluated various classifiers (SVM, Logistic Regression, Random Forest) using Scikit-learn. A Logistic Regression model was chosen for its strong performance and interpretability. Feature importance analysis confirmed that syntactic complexity was a key differentiator.

### My Role & Technical Contributions
I was the sole developer and researcher on this project. My contributions included:
*   Conducting the literature review to identify relevant linguistic markers.
*   Developing the entire NLP and feature extraction pipeline in Python.
*   Training, tuning, and evaluating the machine learning models.
*   Wrapping the final model in a simple Flask API to serve predictions and demonstrate its capabilities.
`
        },
        { 
          slug: "taxi-demand-forecasting",
          title: "Taxi Demand Forecasting",
          description: "Predictive model using time-series analysis to forecast taxi demand in urban areas.",
          technologies: ["Python", "PySpark", "Prophet", "MLflow", "AWS S3"],
          content: `
### Project Overview
The goal of this project was to build a model that could accurately forecast taxi demand in New York City on a hyperlocal level (by neighborhood) for the upcoming week. This information helps taxi companies optimize fleet allocation and reduce passenger wait times.

### Challenges
The key challenges were the massive scale of the historical trip data (billions of records), the need to generate hundreds of independent forecasts (one for each neighborhood) efficiently, and accurately capturing complex seasonal patterns and holiday effects.

### Solutions Implemented
*   **Data Processing:** I built a data pipeline using PySpark on AWS to process and aggregate the raw trip data from S3 into time-series format suitable for modeling. This distributed approach was essential for handling the data volume.
*   **Modeling at Scale:** Instead of one monolithic model, I designed a system to train hundreds of individual time-series models in parallel using Facebook's Prophet library, which excels at capturing multiple seasonalities.
*   **Reproducibility:** I used MLflow to meticulously track all experiments, including model parameters, performance metrics, and model artifacts. This ensured reproducibility and facilitated easy comparison between different modeling approaches.

### My Role & Technical Contributions
As the lead data engineer on this project, my responsibilities were:
*   Designing and implementing the scalable data processing pipeline with PySpark.
*   Developing the parallelized model training and forecasting framework.
*   Integrating MLflow for experiment tracking and model management.
*   Analyzing model performance and identifying key drivers of demand.
`
        },
        { 
          slug: "flask-ml-server",
          title: "Flask ML Server",
          description: "A lightweight, production-ready server for deploying TensorFlow/Keras models.",
          technologies: ["Flask", "TensorFlow", "Docker", "Gunicorn", "Nginx"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Project Overview & Goal
This project provides a boilerplate template for deploying machine learning models as a production-ready REST API. The goal was to create a lightweight, performant, and easily containerizable starting point to bridge the gap between a trained model and a live, scalable service.

### The Problem (Challenge)
Many data scientists are excellent at building models in notebooks but struggle with the software engineering practices required for production deployment. Setting up a robust web server, managing dependencies, and containerizing the application can be a significant hurdle.

### The Solution & Architecture
This template provides a clean and minimal solution using a proven stack:
*   **Flask:** A lightweight web framework to create API endpoints for prediction and health checks.
*   **Gunicorn:** A production-grade WSGI server to run the Flask application concurrently.
*   **Nginx:** Used as a reverse proxy for performance and security.
*   **Docker:** The entire application is containerized with a multi-stage Dockerfile for a small, secure final image.

### Key Technical Contributions
I created this template from scratch, focusing on best practices. My contributions include:
*   Writing a clean, well-documented Flask application structure.
*   Creating an optimized, multi-stage Dockerfile.
*   Providing clear configuration files for Gunicorn and Nginx.
*   Writing a comprehensive README to guide users through setup and deployment.
`
        },
        { 
          slug: "cybersecurity-platforms",
          title: "Cybersecurity Platforms",
          description: "Data analytics for large-scale intrusion detection for enterprise clients.",
          technologies: ["Python", "Elasticsearch", "Spark", "Kafka", "Django"],
          content: `
### Project Overview
This represents my work with several enterprise clients (under NDA) in the cybersecurity sector. The primary focus was on building high-throughput data analytics platforms for Network Intrusion Detection Systems (NIDS) and Security Information and Event Management (SIEM).

### Core Challenges
The platforms had to process terabytes of network log and event data daily in near real-time. The core challenges included designing a system with extremely high data ingestion rates, providing low-latency query capabilities for security analysts, and implementing complex, stateful detection logic at scale.

### Solutions & Architecture
*   **Data Ingestion:** We built a real-time data pipeline using Kafka as a distributed message bus to handle massive data streams without data loss.
*   **Real-time Processing:** Spark Streaming was used to process and enrich the data from Kafka, applying initial filtering and transformation rules.
*   **Analytics & Storage:** Elasticsearch was the core of the analytics engine. Its powerful indexing and aggregation capabilities allowed analysts to perform complex queries over vast datasets with response times in seconds.

### My Role & Technical Contributions
As a Senior Backend Engineer, I was a key contributor to the data pipeline and analytics engine. My specific contributions included:
*   Developing custom Spark Streaming jobs in Python for data enrichment and threat detection.
*   Designing Elasticsearch mappings and indexing strategies to optimize query performance.
*   Building REST APIs using Django and FastAPI to expose analytics results to dashboards and to allow analysts to manage detection rules.
*   Optimizing critical data processing jobs to reduce latency and resource consumption.
`
        },
      ],
      githubCta: "See more on GitHub",
      readCaseStudy: "Read Case Study",
      backToPortfolio: "Back to Portfolio",
      technologiesUsed: "Technologies Used",
      liveDemo: "Live Demo",
      viewOnGithub: "View on GitHub",
    },
    contact: {
      title: "Contact",
      intro: "Let’s talk about your project.",
      detailsTitle: "Contact Details",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      formIntro: "Or send a message directly through the form below.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formSubmit: "Send Message",
    },
    blog: {
      title: "Blog",
      intro: "Thoughts on software, AI, and consulting.",
      readMore: "Read More",
      backToBlog: "Back to Blog",
      postedOn: "Posted on",
      prevPage: "Previous",
      nextPage: "Next",
      searchPlaceholder: "Search posts...",
      noResults: "No posts found matching your search.",
    },
    footer: {
      copyright: "© 2025 Peter Lamb. All rights reserved.",
      availability: "Available for international consulting & freelance projects.",
    },
    announcements: {
      languageChanged: "Language set to English",
    },
    ariaLabels: {
      mainNav: "Main navigation",
      socialNav: "Social media links",
      switchToEnglish: "Switch to English",
      switchToGreek: "Switch to Greek",
    }
  },
  gr: {
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      services: "Υπηρεσίες",
      portfolio: "Portfolio",
      contact: "Επικοινωνία",
      blog: "Blog",
    },
    home: {
      name: "Peter Lamb",
      title: "Σύμβουλος Λογισμικού & Τεχνητής Νοημοσύνης",
      subtitle: "Βοηθώ επιχειρήσεις να σχεδιάσουν, να αναπτύξουν και να επεκτείνουν αξιόπιστες λύσεις λογισμικού και δεδομένων.",
      specialties: "Εξειδίκευση σε Python, AI/ML, SaaS και Big Data.",
      cta: "Συνεργαστείτε μαζί μου",
      servicesTitle: "Υπηρεσίες με μια ματιά",
      services: [
        { title: "Μηχανική Λογισμικού", description: "Κλιμακούμενα back-end συστήματα, APIs, SaaS πλατφόρμες.", slug: "software-engineering" },
        { title: "Τεχνητή Νοημοσύνη & Μηχανική Μάθηση", description: "NLP, ανάπτυξη μοντέλων, MLOps πρακτικές.", slug: "ai-machine-learning" },
        { title: "Big Data & Αναλύσεις", description: "Pipelines δεδομένων, Spark, cloud-based επεξεργασία.", slug: "big-data-analytics" },
        { title: "Συμβουλευτική & Υποστήριξη", description: "Στρατηγική τεχνολογίας, μελέτες σκοπιμότητας, audits.", slug: "consulting-technical-support" },
      ],
      credibility: "Εμπιστεύτηκαν τις υπηρεσίες μου εταιρείες AI, SaaS και κυβερνοασφάλειας, όπως οι Workable, NannyML και Orfium.",
    },
    about: {
      title: "Σχετικά με εμένα",
      greeting: "Γεια σας, είμαι ο Peter Lamb (Πέτρος Λαμπρόπουλος)",
      intro: "senior software engineer με έδρα την Αθήνα και τον Καναδά. Διαθέτω πάνω από 10 χρόνια εμπειρίας στην AI, SaaS και στην ανάλυση ασφάλειας, με ισχυρό υπόβαθρο σε:",
      experienceTitle: "Εμπειρία",
      experience: [
        "Python & back-end συστήματα",
        "Machine learning & επεξεργασία φυσικής γλώσσας (NLP)",
        "Big Data & κατανεμημένα συστήματα",
        "Ανάπτυξη προϊόντων λογισμικού",
      ],
      skillsTitle: "Τεχνικές Δεξιότητες",
      skills: [
        { title: "Γλώσσες Προγραμματισμού", items: ["Python", "SQL", "JavaScript/TypeScript", "Bash"] },
        { title: "Frameworks & Βιβλιοθήκες", items: ["Django", "Flask", "FastAPI", "React", "PySpark", "Scikit-learn", "Pandas", "LangChain"] },
        { title: "Εργαλεία & Πλατφόρμες", items: ["Docker", "Kubernetes", "Elasticsearch", "PostgreSQL", "Git", "Jenkins", "Nginx"] },
        { title: "Cloud & MLOps", items: ["AWS (EC2, S3, RDS)", "Google Cloud", "Terraform", "MLflow", "Airflow"] },
      ],
      educationTitle: "Σπουδές",
      education: [
        "MSc Computer Science (University of Edinburgh)",
        "MSc Ηλεκτρονικός Αυτοματισμός & Πληροφοριακά Συστήματα (ΕΚΠΑ)",
      ],
      languagesTitle: "Γλώσσες",
      languages: "Αγγλικά (επαγγελματικά), Ελληνικά (μητρική), Γερμανικά (βασικά επαγγελματικά).",
      resumeButton: "Λήψη Βιογραφικού",
    },
    services: {
      title: "Υπηρεσίες",
      intro: "Προσφέρω ευέλικτες συμβουλευτικές και αναπτυξιακές υπηρεσίες, προσαρμοσμένες στις ανάγκες σας:",
      readCaseStudies: "Δείτε τα Case Studies",
      backToServices: "Επιστροφή στις Υπηρεσίες",
      categories: [
        { 
          title: "Μηχανική Λογισμικού", 
          slug: "software-engineering",
          intro: "Η δημιουργία στιβαρού, κλιμακούμενου και συντηρήσιμου λογισμικού αποτελεί τον πυρήνα της εξειδίκευσής μου. Η εμπειρία μου εκτείνεται από τη δημιουργία APIs υψηλής απόδοσης έως την αρχιτεκτονική ολόκληρων πλατφορμών SaaS. Παρακάτω είναι παραδείγματα του πώς έχω λύσει βασικές μηχανικές προκλήσεις για διάφορες εταιρείες.",
          businessProse: `Δεν γράφω απλώς κώδικα, δημιουργώ ψηφιακά περιουσιακά στοιχεία που οδηγούν την επιχειρηματική ανάπτυξη. Επικεντρώνομαι στη δημιουργία κλιμακούμενων, ασφαλών και συντηρήσιμων backend συστημάτων που αποτελούν τη ραχοκοκαλιά των σύγχρονων εφαρμογών. Είτε είστε μια startup που λανσάρει ένα MVP είτε μια καθιερωμένη εταιρεία που κλιμακώνει την πλατφόρμα της, παρέχω την τεχνική αριστεία που απαιτείται για την επιτυχία.

### Συγκεκριμένες Υπηρεσίες:
*   **Ανάπτυξη & Ενσωμάτωση API:** Σχεδιασμός και κατασκευή REST APIs υψηλής απόδοσης για την τροφοδοσία των εφαρμογών σας και τη σύνδεση με υπηρεσίες τρίτων.
*   **Αρχιτεκτονική Πλατφόρμας SaaS:** Σχεδιασμός multi-tenant, κλιμακούμενων προϊόντων SaaS από την αρχή, εξασφαλίζοντας μακροπρόθεσμη βιωσιμότητα.
*   **Εκσυγχρονισμός Backend Συστημάτων:** Αναδιάρθρωση παλαιών συστημάτων (legacy codebases) σε σύγχρονα frameworks και αρχιτεκτονικές microservices για βελτίωση της απόδοσης και της συντηρησιμότητας.
*   **Σχεδιασμός & Βελτιστοποίηση Βάσεων Δεδομένων:** Δόμηση και βελτιστοποίηση βάσεων δεδομένων PostgreSQL για ταχύτητα, αξιοπιστία και κλίμακα.

### Τεχνογνωσία για το Μέλλον:
*   **Υποδομές Cloud & DevOps:** Μπορώ να δημιουργήσω CI/CD pipelines και να αναπτύξω εφαρμογές σε AWS ή Google Cloud χρησιμοποιώντας Docker και Kubernetes, αυτοματοποιώντας την πορεία σας προς την παραγωγή.
*   **Τεχνικοί Έλεγχοι Απόδοσης:** Μπορώ να αναλύσω τα υπάρχοντα συστήματά σας για τον εντοπισμό και την εξάλειψη σημείων συμφόρησης, βελτιώνοντας την εμπειρία του χρήστη και μειώνοντας το λειτουργικό κόστος.`,
          items: ["Python development (Flask, Django, FastAPI).", "SaaS πλατφόρμες και APIs.", "Σχεδιασμός & ενοποίηση συστημάτων."],
          caseStudies: [
            {
              company: "Orfium",
              challenge: "Ανάπτυξη και κλιμάκωση του backend συστήματος για μια πλατφόρμα υψηλής επισκεψιμότητας που διαχειρίζεται μουσικά δικαιώματα και δικαιώματα πνευματικής ιδιοκτησίας, εξασφαλίζοντας αξιοπιστία και συντηρησιμότητα.",
              solution: ["Σχεδίασα και κατασκεύασα στιβαρές backend υπηρεσίες χρησιμοποιώντας Django και Postgres.", "Ακολούθησα τις αρχές twelve-factor app για να δημιουργήσω μια κλιμακούμενη και φορητή εφαρμογή, η οποία αναπτύχθηκε με επιτυχία στο Heroku."],
              technologies: ["Python", "Django", "PostgreSQL", "Heroku"]
            },
            {
              company: "ENCODE (Ανάλυση Ασφάλειας)",
              challenge: "Σχεδιασμός και κατασκευή μιας μηχανής ανάλυσης σχεδόν πραγματικού χρόνου και ενός API υψηλής απόδοσης για την παροχή δεδομένων απειλών ασφαλείας από πολλαπλές πηγές όπως Splunk, Redis και MySQL.",
              solution: ["Ανέπτυξα τον κεντρικό πυρήνα της μηχανής ανάλυσης σε Python για τον εντοπισμό απειλών από τα αρχεία καταγραφής κίνησης του εταιρικού ιστού.", "Δημιούργησα ένα REST API χρησιμοποιώντας Flask και SQLAlchemy για την αποτελεσματική παροχή των αποτελεσμάτων της ανάλυσης σε dashboards για τους χρήστες."],
              technologies: ["Python", "Flask", "SQLAlchemy", "Splunk", "Redis", "MySQL"]
            },
            {
              company: "NeuroPublic S.A.",
              challenge: "Δημιουργία της υποδομής backend για μια νέα διαδικτυακή εφαρμογή με στόχο τη γεωργία ακριβείας, απαιτώντας αποτελεσματική επεξεργασία δεδομένων για τη διαχείριση λιπασμάτων.",
              solution: ["Ηγήθηκα της ανάπτυξης του backend σε Python για τις υπηρεσίες που υποστήριζαν τη νέα εφαρμογή.", "Εργάστηκα με επιτυχία σε μια διεπιστημονική ομάδα για την ολοκλήρωση της ταχείας ανάπτυξης και διάθεσης της πλατφόρμας."],
              technologies: ["Python", "Backend Development", "Web Applications"]
            }
          ]
        },
        { 
          title: "Τεχνητή Νοημοσύνη & Μηχανική Μάθηση", 
          slug: "ai-machine-learning",
          intro: "Εξειδικεύομαι στην πρακτική εφαρμογή της Τεχνητής Νοημοσύνης και της Μηχανικής Μάθησης, από την παραδοσιακή Επεξεργασία Φυσικής Γλώσσας (NLP) έως τις τελευταίες εξελίξεις στο Generative AI. Η εστίασή μου είναι στην κατασκευή και ανάπτυξη μοντέλων που προσφέρουν πραγματική επιχειρηματική αξία. Εδώ είναι μερικά από τα κυριότερα σημεία της δουλειάς μου στον τομέα AI/ML.",
          businessProse: `Βοηθώ τις επιχειρήσεις να αξιοποιήσουν τη δύναμη της AI όχι ως ένα buzzword, αλλά ως ένα εργαλείο για τη δημιουργία απτής αξίας. Από την αυτοματοποίηση εσωτερικών διαδικασιών έως τη δημιουργία ευφυών χαρακτηριστικών προϊόντων που ενθουσιάζουν τους χρήστες, γεφυρώνω το χάσμα μεταξύ του δυναμικού της AI και της πραγματικής επιχειρηματικής εφαρμογής. Η τεχνογνωσία μου καλύπτει ολόκληρο τον κύκλο ζωής, από τη δημιουργία πρωτοτύπων και την επιλογή μοντέλων έως την ανάπτυξη και συντήρηση μοντέλων σε παραγωγή.

### Συγκεκριμένες Υπηρεσίες:
*   **Ενσωμάτωση Generative AI & LLM:** Δημιουργία εφαρμογών με OpenAI/GPT και LangChain για εργασίες όπως προηγμένη αναζήτηση, δημιουργία περιεχομένου και περίληψη κειμένων.
*   **Εξειδικευμένες Λύσεις NLP:** Ανάπτυξη μοντέλων για ταξινόμηση κειμένου, αναγνώριση οντοτήτων και ανάλυση συναισθήματος, προσαρμοσμένα στον δικό σας τομέα.
*   **MLOps & Productionalization:** Δημιουργία ισχυρών pipelines για την ανάπτυξη, παρακολούθηση και επανεκπαίδευση μοντέλων ώστε να διασφαλίζεται η αξιόπιστη απόδοσή τους σε κλίμακα.

### Τεχνογνωσία για το Μέλλον:
*   **Ανάπτυξη Ευφυών Chatbots:** Μπορώ να δημιουργήσω έξυπνα, context-aware chatbots για την υποστήριξη πελατών ή για εσωτερικές χρήσεις, βελτιώνοντας την αποδοτικότητα και την αλληλεπίδραση με τους χρήστες.
*   **Στρατηγική Προϊόντων AI:** Παρέχω συμβουλευτικές υπηρεσίες για την καλύτερη αξιοποίηση της AI στο προϊόν σας, εντοπίζοντας περιπτώσεις χρήσης υψηλού αντίκτυπου και ορίζοντας έναν σαφή οδικό χάρτη υλοποίησης.`,
          items: ["Επεξεργασία φυσικής γλώσσας (ταξινόμηση κειμένων, αναζήτηση, embeddings).", "Generative AI (OpenAI, LangChain, Pinecone).", "MLOps & παραγωγική διάθεση μοντέλων."],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Βελτίωση των βασικών προϊόντων NLP της εταιρείας με δυνατότητες Generative AI και εξορθολογισμός του κύκλου ζωής των μοντέλων μηχανικής μάθησης από την ανάπτυξη έως την παραγωγή.",
              solution: ["Ανέπτυξα και συντήρησα microservices για την εξυπηρέτηση μοντέλων ML, εξασφαλίζοντας υψηλή διαθεσιμότητα και απόδοση.", "Εφάρμοσα βέλτιστες πρακτικές MLOps για την αυτοματοποίηση των διαδικασιών ανάπτυξης, παρακολούθησης και επανεκπαίδευσης.", "Ηγήθηκα έργων Proof-of-Concept για Generative AI χρησιμοποιώντας OpenAI, LangChain και Pinecone για τη διερεύνηση νέων δυνατοτήτων προϊόντων."],
              technologies: ["Python", "Generative AI", "OpenAI", "LangChain", "Pinecone", "MLOps"]
            },
            {
              company: "NannyML",
              challenge: "Δημιουργία πρωτοτύπου και κατασκευή ενός νέου προϊόντος SaaS για την παρακολούθηση μοντέλων μηχανικής μάθησης σε παραγωγή, ένα κρίσιμο στοιχείο του MLOps.",
              solution: ["Ηγήθηκα της δημιουργίας πρωτοτύπου και της ανάπτυξης του προϊόντος σε Python για την πλατφόρμα παρακολούθησης μοντέλων ML.", "Διαχειρίστηκα την ανάπτυξη και την ενορχήστρωση της εφαρμογής στο Amazon Elastic Kubernetes Service (EKS) χρησιμοποιώντας Helm charts."],
              technologies: ["Python", "SaaS", "MLOps", "AWS EKS", "Kubernetes", "Helm"]
            }
          ]
        },
        { 
          title: "Big Data & Αναλύσεις", 
          slug: "big-data-analytics",
          intro: "Έχω αποδεδειγμένη ιστορία στο σχεδιασμό και την κατασκευή συστημάτων που μπορούν να επεξεργάζονται και να αναλύουν τεράστιους όγκους δεδομένων. Η εμπειρία μου καλύπτει την αρχιτεκτονική data pipeline, τους κατανεμημένους υπολογισμούς και τη βελτιστοποίηση απόδοσης για αναλύσεις μεγάλης κλίμακας.",
          businessProse: `Τα δεδομένα είναι ένα από τα πιο πολύτιμα περιουσιακά σας στοιχεία, αλλά μόνο αν μπορείτε να τα επεξεργαστείτε και να τα κατανοήσετε. Κατασκευάζω τα συστήματα που μετατρέπουν τεράστια, πολύπλοκα σύνολα δεδομένων σε σαφείς, αξιοποιήσιμες πληροφορίες. Η εμπειρία μου σε κατανεμημένους υπολογισμούς και πλατφόρμες ανάλυσης μεγάλης κλίμακας διασφαλίζει ότι η επιχείρησή σας μπορεί να λαμβάνει αποφάσεις βασισμένες σε δεδομένα, ανεξάρτητα από τον όγκο ή την ταχύτητα των δεδομένων σας.

### Συγκεκριμένες Υπηρεσίες:
*   **Κλιμακούμενα Data Pipelines (ETL/ELT):** Σχεδιασμός και κατασκευή ανθεκτικών pipelines με εργαλεία όπως το Apache Spark και το Airflow σε πλατφόρμες cloud (AWS, GCP).
*   **Ανάλυση Logs & Πλατφόρμες Κυβερνοασφάλειας:** Δημιουργία συστημάτων για την επεξεργασία και ανάλυση terabytes δεδομένων log για την ανίχνευση απειλών ασφαλείας και την επιχειρησιακή ευφυΐα.
*   **Πρόβλεψη Χρονοσειρών:** Ανάπτυξη προγνωστικών μοντέλων για την πρόβλεψη μελλοντικών τάσεων, όπως η ζήτηση από τους χρήστες, οι πωλήσεις ή οι ανάγκες σε πόρους.

### Τεχνογνωσία για το Μέλλον:
*   **Dashboards Ανάλυσης σε Πραγματικό Χρόνο:** Μπορώ να κατασκευάσω συστήματα που τροφοδοτούν ζωντανά dashboards (π.χ. με Elasticsearch/Kibana ή custom λύσεις) για άμεσες επιχειρησιακές πληροφορίες.
*   **Υλοποίηση Data Warehouse:** Μπορώ να σας καθοδηγήσω στην επιλογή και υλοποίηση μιας σύγχρονης λύσης data warehouse (όπως BigQuery ή Snowflake) για κεντρική επιχειρηματική ευφυΐα.`,
          items: ["Σχεδιασμός pipelines δεδομένων (Spark, Elasticsearch, AWS).", "Ανάλυση και επεξεργασία μεγάλων logs.", "Πρόβλεψη & μοντέλα χρονοσειρών."],
          caseStudies: [
            {
              company: "ENCODE (Κυβερνοασφάλεια)",
              challenge: "Κατασκευή μιας νέας πλατφόρμας ανάλυσης από την αρχή για την επεξεργασία terabytes δεδομένων από logs δικτύου για ένα σύστημα ανίχνευσης εισβολών μεγάλης κλίμακας, αντικαθιστώντας και ξεπερνώντας σε απόδοση ένα παλαιότερο σύστημα.",
              solution: ["Σχεδίασα και ανέπτυξα μια πλατφόρμα επεξεργασίας δεδομένων χρησιμοποιώντας Apache Spark σε AWS για κατανεμημένη ανάλυση.", "Χρησιμοποίησα το Elasticsearch ως τον πυρήνα της μηχανής ανάλυσης για να επιτρέψω στους αναλυτές ασφαλείας να εκτελούν πολύπλοκα ερωτήματα σε τεράστιους όγκους δεδομένων με χαμηλή καθυστέρηση.", "Πραγματοποίησα με επιτυχία βελτιστοποιήσεις απόδοσης και μνήμης στην παλαιότερη πλατφόρμα για να διαχειριστεί μεγαλύτερους όγκους δεδομένων κατά τη μεταβατική περίοδο."],
              technologies: ["Python", "Apache Spark", "Elasticsearch", "AWS", "Cybersecurity"]
            },
            {
              company: "Skyscanner",
              challenge: "Ανάπτυξη και συντήρηση συστημάτων συλλογής δεδομένων για την αξιόπιστη απόκτηση τιμών αεροπορικών εισιτηρίων από πολλές αεροπορικές εταιρείες και τρίτες πηγές.",
              solution: ["Ανέλαβα την ευθύνη για βασικές αρμοδιότητες της ομάδας που περιλάμβαναν την ανάπτυξη και συντήρηση API scrapers σε Python.", "Διαχειρίστηκα με επιτυχία την επικοινωνία με τρίτους για τον καθορισμό προδιαγραφών και την ενσωμάτωση."],
              technologies: ["Python", "API Integration", "Web Scraping", "Data Acquisition"]
            }
          ]
        },
        { 
          title: "Συμβουλευτική & Τεχνική Υποστήριξη", 
          slug: "consulting-technical-support",
          intro: "Αντλώντας από περισσότερο από μια δεκαετία εμπειρίας, παρέχω στρατηγική καθοδήγηση και τεχνική ηγεσία για να βοηθήσω τις επιχειρήσεις να αντιμετωπίσουν πολύπλοκες προκλήσεις λογισμικού και δεδομένων. Οι συμβουλευτικές μου υπηρεσίες καλύπτουν ολόκληρο τον κύκλο ζωής του έργου.",
          businessProse: `Πέρα από την πρακτική ανάπτυξη, προσφέρω στρατηγική τεχνική καθοδήγηση για να μειώσετε τον κίνδυνο στα έργα σας και να επιταχύνετε τον οδικό σας χάρτη. Ως τεχνικός συνεργάτης, σας βοηθώ να λάβετε τις σωστές αρχιτεκτονικές αποφάσεις, να αξιολογήσετε νέες τεχνολογίες και να διασφαλίσετε ότι οι τεχνικές σας προσπάθειες είναι ευθυγραμμισμένες με τους επιχειρηματικούς σας στόχους από την πρώτη μέρα.

### Συγκεκριμένες Υπηρεσίες:
*   **Τεχνική Σκοπιμότητα & Δημιουργία Πρωτοτύπων:** Διεξαγωγή γρήγορων Proof-of-Concepts (PoCs) για την επικύρωση ιδεών και τεχνολογικών επιλογών πριν από τη δέσμευση σημαντικών πόρων.
*   **Σχεδιασμός Αρχιτεκτονικής Συστημάτων:** Σχεδιασμός του τεχνικού σχεδίου για νέα προϊόντα, με έμφαση στην κλιμάκωση, την ασφάλεια και την αποδοτικότητα κόστους.
*   **Ανάλυση Αιτιών & Post-mortems:** Διερεύνηση κρίσιμων αστοχιών συστήματος ή περιστατικών ασφαλείας για την παροχή σαφούς ανάλυσης και εφαρμόσιμων στρατηγικών πρόληψης.

### Τεχνογνωσία για το Μέλλον:
*   **Fractional CTO / Tech Lead:** Παρέχω ανώτερη τεχνική ηγεσία και καθοδήγηση ομάδας σε μερική απασχόληση για startups και αναπτυσσόμενες ομάδες που χρειάζονται καθοδήγηση από ειδικούς χωρίς τη δέσμευση πλήρους απασχόλησης.
*   **Τεχνικός Έλεγχος (Due Diligence):** Βοηθώ επενδυτές ή αγοραστές στην αξιολόγηση της τεχνικής υγείας, της κλιμάκωσης και των κινδύνων μιας εταιρείας λογισμικού ή μιας πιθανής εξαγοράς.`,
          items: ["Μελέτες σκοπιμότητας & PoCs.", "Ανάλυση απαιτήσεων & αρχιτεκτονικός σχεδιασμός.", "Συνεχής υποστήριξη σε εξειδικευμένες εφαρμογές."],
          caseStudies: [
            {
              company: "Διάφοροι Πελάτες ως Freelancer",
              challenge: "Πελάτες από διάφορους κλάδους χρειάζονταν εξειδικευμένη καθοδήγηση σε έργα δεδομένων, μηχανικής μάθησης και backend engineering, συχνά από τη σύλληψη της ιδέας έως την υλοποίηση.",
              solution: ["Παρείχα ολοκληρωμένες συμβουλευτικές υπηρεσίες που κάλυπταν την ανάλυση απαιτήσεων, τη διαχείριση έργων και την ανάλυση σκοπιμότητας.", "Σχεδίασα αρχιτεκτονικές συστημάτων για υπηρεσίες ML και backend.", "Διεξήγαγα post-mortems σε αποτυχίες συστημάτων και περιστατικά ασφαλείας (π.χ. επιθέσεις DDoS) για τον εντοπισμό των βασικών αιτιών και την εφαρμογή προληπτικών μέτρων."],
              technologies: ["Project Management", "System Architecture", "Feasibility Analysis", "Requirements Gathering"]
            }
          ]
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      intro: "Επιλεγμένα έργα και case studies:",
      projects: [
        { 
          slug: "dance-school-saas",
          title: "SaaS Διαχείρισης Σχολής Χορού",
          description: "Full-stack ανάπτυξη εργαλείου προγραμματισμού και χρεώσεων για σχολές παραστατικών τεχνών.",
          technologies: ["Django", "React", "PostgreSQL", "Stripe API", "AWS"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Επισκόπηση Έργου
Αυτό το έργο είναι μια ολοκληρωμένη πλατφόρμα SaaS που δημιουργήθηκε για να εξυπηρετήσει τις ειδικές ανάγκες των σχολών χορού και παραστατικών τεχνών. Ο πρωταρχικός στόχος ήταν η δημιουργία ενός κεντρικού συστήματος για τη διαχείριση των ωρολογίων προγραμμάτων, των εγγραφών μαθητών, της αυτοματοποιημένης χρέωσης και της επικοινωνίας με τους γονείς.

### Προκλήσεις
Οι κύριες προκλήσεις ήταν ο σχεδιασμός ενός ευέλικτου σχήματος βάσης δεδομένων για την υποστήριξη πολύπλοκων κανόνων προγραμματισμού (π.χ. μαθήματα ανά δεκαπενθήμερο, τριμηνιαία προγράμματα), η υλοποίηση ενός ασφαλούς και αξιόπιστου συστήματος επαναλαμβανόμενων πληρωμών με το Stripe και η διασφάλιση ότι το περιβάλλον χρήστη ήταν διαισθητικό για ιδιοκτήτες σχολών χωρίς τεχνικές γνώσεις.

### Υλοποιηθείσες Λύσεις
*   **Βάση Δεδομένων:** Σχεδίασα ένα σχεσιακό σχήμα βάσης δεδομένων χρησιμοποιώντας το ORM του Django που διαχειριζόταν κομψά μαθητές, μαθήματα, προγράμματα και εγγραφές, επιτρέποντας πολύπλοκα ερωτήματα χωρίς να θυσιάζεται η απόδοση.
*   **Χρεώσεις:** Ενσωμάτωσα το Stripe API, δημιουργώντας ισχυρά webhooks για τη διαχείριση της κατάστασης των συνδρομών, των αποτυχημένων πληρωμών και της αυτοματοποιημένης τιμολόγησης. Αυτό αποσυνέδεσε τη λογική χρέωσης από την κύρια εφαρμογή, αυξάνοντας την αξιοπιστία.
*   **Frontend:** Δημιουργήθηκε ένα responsive UI με React, με ένα διαδραστικό ημερολόγιο για τον προγραμματισμό και μια σαφή πύλη εγγραφής για τους γονείς, το οποίο μείωσε σημαντικά τον διοικητικό φόρτο εργασίας για τις σχολές.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ως ο μοναδικός full-stack developer, ήμουν υπεύθυνος για ολόκληρο το έργο από τη σύλληψη της ιδέας έως την ανάπτυξη. Οι βασικές μου συνεισφορές περιλάμβαναν:
*   Ανάπτυξη του backend REST API με Django Rest Framework.
*   Σχεδιασμός και υλοποίηση του σχήματος της βάσης δεδομένων PostgreSQL.
*   Δημιουργία του συστήματος επαναλαμβανόμενων χρεώσεων και διαχείρισης συνδρομών με το Stripe.
*   Ανάπτυξη της frontend εφαρμογής με React.
*   Deployment και διαχείριση της εφαρμογής σε AWS EC2 με Gunicorn και Nginx.
`
        },
        { 
          slug: "alzheimers-text-classification",
          title: "Ταξινόμηση Κειμένου για Alzheimer",
          description: "NLP πρωτότυπο για υποστήριξη πρώιμης διάγνωσης με χρήση γλωσσικών δεικτών.",
          technologies: ["Python", "Scikit-learn", "Pandas", "NLTK", "Flask"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Επισκόπηση Έργου & Στόχοι
Αυτό το ερευνητικό πρωτότυπο είχε ως στόχο να διερευνήσει τις δυνατότητες της Επεξεργασίας Φυσικής Γλώσσας (NLP) για την έγκαιρη ανίχνευση της νόσου του Alzheimer. Ο στόχος ήταν η εκπαίδευση ενός μοντέλου μηχανικής μάθησης για την ανάλυση απομαγνητοφωνημένων συνεντεύξεων ασθενών και τον εντοπισμό ανεπαίσθητων γλωσσικών μοτίβων που σχετίζονται με τη γνωστική έκπτωση.

### Προκλήσεις
Οι κύριες προκλήσεις ήταν η διαχείριση του εγγενούς "θορύβου" στην απομαγνητοφωνημένη ομιλία, η δημιουργία χαρακτηριστικών που θα μπορούσαν να συλλάβουν τη λεπτή γλωσσική φθορά (πέρα από την απλή καταμέτρηση λέξεων) και η επιλογή ενός μοντέλου που ήταν ταυτόχρονα ακριβές και ερμηνεύσιμο για να κατανοήσουμε ποια χαρακτηριστικά ήταν τα πιο προγνωστικά.

### Υλοποιηθείσες Λύσεις & Μεθοδολογία
*   **Pipeline Προεπεξεργασίας:** Δημιούργησα ένα ισχυρό pipeline προεπεξεργασίας κειμένου χρησιμοποιώντας NLTK και SpaCy για τον καθαρισμό των δεδομένων, την επισήμανση των μερών του λόγου (part-of-speech tagging) και τη συντακτική ανάλυση.
*   **Feature Engineering:** Εξήχθησαν πάνω από 50 γλωσσικά χαρακτηριστικά, συμπεριλαμβανομένου του λεξιλογικού πλούτου (π.χ. type-token ratio), της συντακτικής πολυπλοκότητας (π.χ. μέσο μήκος πρότασης, πυκνότητα προτάσεων) και δεικτών δισταγμού.
*   **Μοντελοποίηση:** Εκπαίδευσα και αξιολόγησα διάφορους ταξινομητές (SVM, Logistic Regression, Random Forest) χρησιμοποιώντας το Scikit-learn. Επιλέχθηκε ένα μοντέλο Logistic Regression για την ισχυρή του απόδοση και την ερμηνευσιμότητά του. Η ανάλυση της σημασίας των χαρακτηριστικών επιβεβαίωσε ότι η συντακτική πολυπλοκότητα ήταν βασικός διαφοροποιητής.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ήμουν ο μοναδικός προγραμματιστής και ερευνητής σε αυτό το έργο. Οι συνεισφορές μου περιλάμβαναν:
*   Διεξαγωγή βιβλιογραφικής έρευνας για τον εντοπισμό σχετικών γλωσσικών δεικτών.
*   Ανάπτυξη ολόκληρου του pipeline NLP και εξαγωγής χαρακτηριστικών σε Python.
*   Εκπαίδευση, βελτιστοποίηση και αξιολόγηση των μοντέλων μηχανικής μάθησης.
*   Ενσωμάτωση του τελικού μοντέλου σε ένα απλό Flask API για την παροχή προβλέψεων και την επίδειξη των δυνατοτήτων του.
`
        },
        { 
          slug: "taxi-demand-forecasting",
          title: "Πρόβλεψη Ζήτησης Ταξί",
          description: "Προγνωστικό μοντέλο με χρήση ανάλυσης χρονοσειρών για την πρόβλεψη της ζήτησης ταξί.",
          technologies: ["Python", "PySpark", "Prophet", "MLflow", "AWS S3"],
          content: `
### Επισκόπηση Έργου
Ο στόχος αυτού του έργου ήταν η κατασκευή ενός μοντέλου που θα μπορούσε να προβλέψει με ακρίβεια τη ζήτηση ταξί στη Νέα Υόρκη σε υπερ-τοπικό επίπεδο (ανά γειτονιά) για την επόμενη εβδομάδα. Αυτή η πληροφορία βοηθά τις εταιρείες ταξί να βελτιστοποιήσουν την κατανομή του στόλου και να μειώσουν τους χρόνους αναμονής των επιβατών.

### Προκλήσεις
Οι βασικές προκλήσεις ήταν η τεράστια κλίμακα των ιστορικών δεδομένων διαδρομών (δισεκατομμύρια εγγραφές), η ανάγκη για αποδοτική δημιουργία εκατοντάδων ανεξάρτητων προβλέψεων (μία για κάθε γειτονιά) και η ακριβής αποτύπωση πολύπλοκων εποχιακών μοτίβων και επιδράσεων αργιών.

### Υλοποιηθείσες Λύσεις
*   **Επεξεργασία Δεδομένων:** Κατασκεύασα ένα data pipeline χρησιμοποιώντας PySpark σε AWS για την επεξεργασία και τη συγκέντρωση των ακατέργαστων δεδομένων διαδρομών από το S3 σε μορφή χρονοσειρών, κατάλληλη για μοντελοποίηση. Αυτή η κατανεμημένη προσέγγιση ήταν απαραίτητη για τη διαχείριση του όγκου των δεδομένων.
*   **Μοντελοποίηση σε Κλίμακα:** Αντί για ένα μονολιθικό μοντέλο, σχεδίασα ένα σύστημα για την παράλληλη εκπαίδευση εκατοντάδων μεμονωμένων μοντέλων χρονοσειρών χρησιμοποιώντας τη βιβλιοθήκη Prophet του Facebook, η οποία υπερέχει στην αποτύπωση πολλαπλών εποχικοτήτων.
*   **Αναπαραγωγιμότητα:** Χρησιμοποίησα το MLflow για την σχολαστική παρακολούθηung όλων των πειραμάτων, συμπεριλαμβανομένων των παραμέτρων του μοντέλου, των μετρικών απόδοσης και των artifacts. Αυτό εξασφάλισε την αναπαραγωγιμότητα και διευκόλυνε τη σύγκριση μεταξύ διαφορετικών προσεγγίσεων μοντελοποίησης.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ως ο επικεφαλής data engineer σε αυτό το έργο, οι αρμοδιότητές μου ήταν:
*   Σχεδιασμός και υλοποίηση του κλιμακούμενου pipeline επεξεργασίας δεδομένων με PySpark.
*   Ανάπτυξη του πλαισίου παράλληλης εκπαίδευσης και πρόβλεψης μοντέλων.
*   Ενσωμάτωση του MLflow για την παρακολούθηung πειραμάτων και τη διαχείριση μοντέλων.
*   Ανάλυση της απόδοσης του μοντέλου και εντοπισμός των βασικών παραγόντων της ζήτησης.
`
        },
        { 
          slug: "flask-ml-server",
          title: "Flask ML Server",
          description: "Ένας ελαφρύς, production-ready server για την ανάπτυξη μοντέλων TensorFlow/Keras.",
          technologies: ["Flask", "TensorFlow", "Docker", "Gunicorn", "Nginx"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Επισκόπηση Έργου & Στόχος
Αυτό το έργο παρέχει ένα boilerplate template για την ανάπτυξη μοντέλων μηχανικής μάθησης ως ένα production-ready REST API. Ο στόχος ήταν η δημιουργία ενός ελαφριού, αποδοτικού και εύκολα containerizable σημείου εκκίνησης για να γεφυρωθεί το χάσμα μεταξύ ενός εκπαιδευμένου μοντέλου και μιας ζωντανής, κλιμακούμενης υπηρεσίας.

### Το Πρόβλημα (Πρόκληση)
Πολλοί data scientists είναι εξαιρετικοί στη δημιουργία μοντέλων σε notebooks, αλλά δυσκολεύονται με τις πρακτικές μηχανικής λογισμικού που απαιτούνται για την ανάπτυξη σε περιβάλλον παραγωγής. Η δημιουργία ενός στιβαρού web server, η διαχείριση εξαρτήσεων και το containerization της εφαρμογής μπορεί να αποτελέσουν σημαντικό εμπόδιο.

### Η Λύση & Αρχιτεκτονική
Αυτό το template παρέχει μια καθαρή και μινιμαλιστική λύση χρησιμοποιώντας μια δοκιμασμένη στοίβα τεχνολογιών:
*   **Flask:** Ένα ελαφρύ web framework για τη δημιουργία API endpoints για πρόβλεψη και ελέγχους υγείας (health checks).
*   **Gunicorn:** Ένας production-grade WSGI server για την ταυτόχρονη εκτέλεση της εφαρμογής Flask.
*   **Nginx:** Χρησιμοποιείται ως reverse proxy για απόδοση και ασφάλεια.
*   **Docker:** Ολόκληρη η εφαρμογή είναι containerized με ένα multi-stage Dockerfile για μια μικρή και ασφαλή τελική εικόνα.

### Βασικές Τεχνικές Συνεισφορές
Δημιούργησα αυτό το template από το μηδέν, εστιάζοντας στις βέλτιστες πρακτικές. Οι συνεισφορές μου περιλαμβάνουν:
*   Συγγραφή μιας καθαρής, καλά τεκμηριωμένης δομής εφαρμογής Flask.
*   Δημιουργία ενός βελτιστοποιημένου, multi-stage Dockerfile.
*   Παροχή σαφών αρχείων διαμόρφωσης για Gunicorn και Nginx.
*   Συγγραφή ενός περιεκτικού README για να καθοδηγήσει τους χρήστες στην εγκατάσταση και την ανάπτυξη.
`
        },
        { 
          slug: "cybersecurity-platforms",
          title: "Πλατφόρμες Κυβερνοασφάλειας",
          description: "Ανάλυση δεδομένων για ανίχνευση εισβολών μεγάλης κλίμακας για enterprise πελάτες.",
          technologies: ["Python", "Elasticsearch", "Spark", "Kafka", "Django"],
          content: `
### Επισκόπηση Έργου
Αυτό αντιπροσωπεύει την εργασία μου με αρκετούς enterprise πελάτες (υπό NDA) στον τομέα της κυβερνοασφάλειας. Η κύρια εστίαση ήταν στην κατασκευή πλατφορμών ανάλυσης δεδομένων υψηλής απόδοσης για Συστήματα Ανίχνευσης Εισβολών Δικτύου (NIDS) και Διαχείρισης Πληροφοριών και Γεγονότων Ασφαλείας (SIEM).

### Βασικές Προκλήσεις
Οι πλατφόρμες έπρεπε να επεξεργάζονται terabytes δεδομένων log και συμβάντων δικτύου καθημερινά σχεδόν σε πραγματικό χρόνο. Οι βασικές προκλήσεις περιλάμβαναν το σχεδιασμό ενός συστήματος με εξαιρετικά υψηλούς ρυθμούς εισαγωγής δεδομένων, την παροχή δυνατοτήτων ερωτημάτων χαμηλής καθυστέρησης για τους αναλυτές ασφαλείας και την υλοποίηση πολύπλοκης, stateful λογικής ανίχνευσης σε κλίμακα.

### Λύσεις & Αρχιτεκτονική
*   **Εισαγωγή Δεδομένων:** Κατασκευάσαμε ένα real-time data pipeline χρησιμοποιώντας το Kafka ως κατανεμημένο δίαυλο μηνυμάτων για τη διαχείριση τεράστιων ροών δεδομένων χωρίς απώλειες.
*   **Επεξεργασία σε Πραγματικό Χρόνο:** Το Spark Streaming χρησιμοποιήθηκε για την επεξεργασία και τον εμπλουτισμό των δεδομένων από το Kafka, εφαρμόζοντας αρχικούς κανόνες φιλτραρίσματος και μετασχηματισμού.
*   **Ανάλυση & Αποθήκευση:** Το Elasticsearch αποτέλεσε τον πυρήνα της μηχανής ανάλυσης. Οι ισχυρές του δυνατότητες ευρετηρίασης και ομαδοποίησης επέτρεπαν στους αναλυτές να εκτελούν πολύπλοκα ερωτήματα σε τεράστια σύνολα δεδομένων με χρόνους απόκρισης δευτερολέπτων.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ως Senior Backend Engineer, ήμουν βασικός συντελεστής στο data pipeline και στη μηχανή ανάλυσης. Οι συγκεκριμένες μου συνεισφορές περιλάμβαναν:
*   Ανάπτυξη προσαρμοσμένων Spark Streaming jobs σε Python για εμπλουτισμό δεδομένων και ανίχνευung απειλών.
*   Σχεδιασμό Elasticsearch mappings και στρατηγικών ευρετηρίασης για τη βελτιστοποίηση της απόδοσης των ερωτημάτων.
*   Δημιουργία REST APIs με χρήση Django και FastAPI για την έκθεση των αποτελεσμάτων ανάλυσης σε dashboards και για να επιτρέπεται στους αναλυτές να διαχειρίζονται κανόνες ανίχνευσης.
*   Βελτιστοποίηση κρίσιμων jobs επεξεργασίας δεδομένων για τη μείωση της καθυστέρησης και της κατανάλωσης πόρων.
`
        },
      ],
      githubCta: "Δείτε περισσότερα στο GitHub",
      readCaseStudy: "Διαβάστε το Case Study",
      backToPortfolio: "Επιστροφή στο Portfolio",
      technologiesUsed: "Τεχνολογίες",
      liveDemo: "Live Demo",
      viewOnGithub: "Δείτε στο GitHub",
    },
    contact: {
      title: "Επικοινωνία",
      intro: "Ας συζητήσουμε για το έργο σας.",
      detailsTitle: "Στοιχεία Επικοινωνίας",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      formIntro: "Ή στείλτε μήνυμα μέσω της φόρμας επικοινωνίας.",
      formName: "Το Όνομά σας",
      formEmail: "Το Email σας",
      formMessage: "Το Μήνυμά σας",
      formSubmit: "Αποστολή Μηνύματος",
    },
    blog: {
      title: "Blog",
      intro: "Σκέψεις πάνω στο software, την τεχνητή νοημοσύνη και το consulting.",
      readMore: "Διαβάστε περισσότερα",
      backToBlog: "Επιστροφή στο Blog",
      postedOn: "Δημοσιεύτηκε στις",
      prevPage: "Προηγούμενη",
      nextPage: "Επόμενη",
      searchPlaceholder: "Αναζήτηση άρθρων...",
      noResults: "Δεν βρέθηκαν άρθρα που να ταιριάζουν με την αναζήτησή σας.",
    },
    footer: {
      copyright: "© 2025 Peter Lamb. Με την επιφύλαξη παντός δικαιώματος.",
      availability: "Διαθέσιμος για διεθνή projects και συμβουλευτικές συνεργασίες.",
    },
    announcements: {
      languageChanged: "Η γλώσσα άλλαξε σε Ελληνικά",
    },
    ariaLabels: {
      mainNav: "Κύρια πλοήγηση",
      socialNav: "Σύνδεσμοι κοινωνικών δικτύων",
      switchToEnglish: "Αλλαγή στα Αγγλικά",
      switchToGreek: "Αλλαγή στα Ελληνικά",
    },
  },
};