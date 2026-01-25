// ===========================
// Skill Modal Data
// ===========================
const skillDetails = {
    programming: {
        title: "Programming Languages",
        subtitle: "Core languages I use daily for data science, web development, and automation",
        skills: [
            "Python - 5+ years",
            "Java - 4+ years",
            "JavaScript/TypeScript - 3+ years",
            "SQL - 5+ years",
            "VBA - 3+ years",
            "R - 2+ years"
        ],
        projects: [
            {
                title: "150,000+ Profile Web Scraping Pipeline",
                description: "Built a comprehensive web scraping system in Python to collect multimodal data (video, audio, text) from Kickstarter, processing over 150,000 creator profiles for research at the Institute of Responsible Innovation."
            },
            {
                title: "Full-Stack Portfolio Website",
                description: "Designed and developed this interactive portfolio using HTML5, CSS3, and vanilla JavaScript with custom animations, modal systems, and responsive design."
            },
            {
                title: "Enterprise SaaS Platform Integration",
                description: "Developed VBA-based automation tools and Python scripts for ETL processes at FBK S.r.l., streamlining data workflows for enterprise clients including Johnson &Johnson."
            }
        ],
        experience: "5+ years of hands-on programming experience across academic research, teaching,  and industry positions."
    },
    webdev: {
        title: "Web Development",
        subtitle: "Modern web technologies for building responsive, interactive applications",
        skills: [
            "HTML5 & Semantic Markup",
            "CSS3 & Advanced Animations",
            "JavaScript ES6+",
            "React & Component Architecture",
            "Node.js & Express",
            "Next.js & SSR",
            "Responsive Design",
            "REST APIs"
        ],
        projects: [
            {
                title: "Interactive Data Visualization Dashboards",
                description: "Created responsive web dashboards using React and D3.js to visualize complex datasets, featuring real-time updates and interactive filtering."
            },
            {
                title: "Student Project Guidance - Streamlit Applications",
                description: "As a Teaching Assistant, coached teams in developing end-to-end data-driven web applications using Streamlit, focusing on clean code and best practices."
            },
            {
                title: "This Portfolio Website",
                description: "Built from scratch using vanilla HTML, CSS, and JavaScript with custom animations, modal systems, interactive skill cards, and fully responsive design - no frameworks needed!"
            }
        ],
        experience: "3+ years building web applications, from simple landing pages to complex data visualization platforms."
    },
    mlai: {
        title: "Machine Learning & AI",
        subtitle: "Deep learning, NLP, and advanced AI techniques for cutting-edge research",
        skills: [
            "PyTorch & Neural Networks",
            "Scikit-learn & Classical ML",
            "Transformers & BERT",
            "GPT Models & LLMs",
            "TensorFlow & Keras",
            "Computer Vision (CNNs)",
            "Natural Language Processing",
            "Topic Modeling (BERTopic)",
            "Zero-Shot Classification",
            "Transfer Learning"
        ],
        projects: [
            {
                title: "NLP Analysis with BERT & BART-Large-MNLI",
                description: "Applied state-of-the-art transformer models for zero-shot classification and semantic analysis, processing 167,000+ biographical texts for creator personality research."
            },
            {
                title: "BERTopic Topic Modeling Pipeline",
                description: "Developed unsupervised clustering pipelines using BERTopic for thematic analysis of large-scale text data, combining neural models with psycholinguistic lexicons (LIWC, Moral Foundations Dictionary)."
            },
            {
                title: "Deep Learning for Predictive Analytics",
                description: "Implemented neural network architectures using PyTorch for time-series prediction and classification tasks in academic research projects."
            }
        ],
        experience: "Advanced ML/AI expertise from MSc Computer Science (Data Science & AI specialization) and active research at University of St. Gallen."
    },
    dataeng: {
        title: "Data Engineering",
        subtitle: "Building robust data pipelines and ETL systems at scale",
        skills: [
            "Pandas & Data Wrangling",
            "NumPy & Numerical Computing",
            "Web Scraping (Beautiful Soup, Selenium)",
            "ETL Pipeline Design",
            "Apache Spark & Big Data",
            "Apache Airflow",
            "API Integration & REST",
            "Data Quality & Validation",
            "Multimodal Data Processing"
        ],
        projects: [
            {
                title: "Multimodal Data Collection Pipeline",
                description: "Engineered comprehensive web scraping pipelines collecting video, audio, and text data from multiple platforms, handling rate limiting, error recovery, and data validation."
            },
            {
                title: "ERP System Integration (SAP, JD Edwards)",
                description: "Designed and implemented API integrations between client ERP systems and SaaS platforms at FBK S.r.l., ensuring reliable data synchronization for enterprise clients."
            },
            {
                title: "Big Data Analytics with Spark",
                description: "Processed large-scale datasets using Apache Spark for distributed computing tasks, optimizing performance for multi-terabyte data analysis."
            }
        ],
        experience: "4+ years building and maintaining data pipelines for research and industry applications, handling datasets from thousands to millions of records."
    },
    databases: {
        title: "Databases",
        subtitle: "SQL, NoSQL, and graph databases for diverse data storage needs",
        skills: [
            "PostgreSQL & Advanced SQL",
            "MySQL & MariaDB",
            "MongoDB & Document Stores",
            "Neo4j & Graph Databases",
            "Oracle Database",
            "Redis & Caching",
            "Database Design & Normalization",
            "Query Optimization",
            "Index Strategies"
        ],
        projects: [
            {
                title: "Complex SQL Analytics for Enterprise Clients",
                description: "Wrote optimized SQL queries for Oracle and Exasol databases at FBK S.r.l., creating complex analytical reports and dashboards for strategic decision-making."
            },
            {
                title: "Graph Database for Network Analysis",
                description: "Implemented Neo4j graph database for analyzing relationships and connections in social network research projects."
            },
            {
                title: "Teaching Database Fundamentals",
                description: "As a Teaching Assistant, instructed students in database design, SQL querying, and best practices for data modeling and normalization."
            }
        ],
        experience: "5+ years working with relational and NoSQL databases across academic and industry settings."
    },
    visualization: {
        title: "Data Visualization",
        subtitle: "Transforming complex data into clear, compelling visual stories",
        skills: [
            "Tableau & Business Intelligence",
            "Power BI & Microsoft Stack",
            "Plotly & Interactive Dashboards",
            "Seaborn & Statistical Viz",
            "Matplotlib & Publication Graphics",
            "D3.js & Custom Web Viz",
            "Dashboard Design",
            "Storytelling with Data"
        ],
        projects: [
            {
                title: "Interactive Tableau Dashboards for Enterprise KPIs",
                description: "Developed comprehensive Tableau dashboards at FBK S.r.l. visualizing key performance indicators to support data-driven strategic decision-making for clients including Johnson & Johnson."
            },
            {
                title: "Research Visualization with Plotly & Seaborn",
                description: "Created publication-quality visualizations and interactive reports for academic research, presenting complex analytical findings through clear, compelling graphics."
            },
            {
                title: "Real-Time Data Visualization",
                description: "Built dynamic, real-time visualization systems using Plotly Dash for monitoring data pipeline performance and quality metrics."
            }
        ],
        experience: "4+ years creating visualizations for business intelligence, research publications, and stakeholder presentations."
    },
    tools: {
        title: "Tools & Platforms",
        subtitle: "Modern development tools and cloud platforms for efficient workflows",
        skills: [
            "Git & GitHub",
            "Docker & Containerization",
            "AWS Cloud Services",
            "Visual Studio Code",
            "Kubernetes & Orchestration",
            "Linux/Unix Systems",
            "CI/CD Pipelines",
            "Jupyter Notebooks",
            "Version Control Best Practices"
        ],
        projects: [
            {
                title: "Dockerized ML Model Deployment",
                description: "Containerized machine learning models using Docker for consistent deployment across development, staging, and production environments."
            },
            {
                title: "Cloud Infrastructure on AWS",
                description: "Deployed and managed data processing pipelines on AWS using EC2, S3, and Lambda for scalable research data collection and analysis."
            },
            {
                title: "Git Workflow Management",
                description: "Established Git best practices and branching strategies for collaborative projects, managing code reviews and pull requests for team development."
            }
        ],
        experience: "Daily use of modern development tools and cloud platforms for research, teaching, and industry projects."
    },
    languages: {
        title: "Languages",
        subtitle: "Multilingual communication for global collaboration",
        skills: [
            "English - Native/Fluent",
            "Urdu/Hindi - Native",
            "Italian - Intermediate (B2)",
            "Turkish - Conversational",
            "German - Beginner (A2)"
        ],
        projects: [
            {
                title: "International Research Collaboration",
                description: "Collaborating with international teams at University of St. Gallen, communicating research findings in English and presenting to diverse audiences."
            },
            {
                title: "Teaching in Multiple Languages",
                description: "Teaching assistant experience includes working with international students, adapting communication style for non-native English speakers."
            },
            {
                title: "Multicultural Client Communication",
                description: "At FBK S.r.l. in Milan, worked with Italian-speaking clients and international teams, leveraging language skills for effective stakeholder management."
            }
        ],
        experience: "Multilingual professional comfortable working in international, multicultural environments across Switzerland and Italy."
    }
};

// ===========================
// Modal Functionality
// ===========================
const modal = document.getElementById('skillModal');
const modalBody = document.getElementById('modalBody');
const modalOverlay = modal?.querySelector('.modal-overlay');
const modalClose = modal?.querySelector('.modal-close');

function openSkillModal(skillKey) {
    const skill = skillDetails[skillKey];
    if (!skill || !modal) return;

    // Build modal content
    const content = `
        <div class="modal-header">
            <h2 class="modal-title">${skill.title}</h2>
            <p class="modal-subtitle">${skill.subtitle}</p>
        </div>

        <div class="modal-section">
            <h3>Core Skills & Technologies</h3>
            <div class="skill-list">
                ${skill.skills.map(s => `<div class="skill-list-item">${s}</div>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Key Projects & Experience</h3>
            ${skill.projects.map(project => `
                <div class="project-highlight">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                </div>
            `).join('')}
        </div>

        <div class="modal-section">
            <h3>Experience Level</h3>
            <p style="color: var(--text-secondary); line-height: 1.7;">${skill.experience}</p>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSkillModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for modal
modalClose?.addEventListener('click', closeSkillModal);
modalOverlay?.addEventListener('click', closeSkillModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeSkillModal();
    }
});

// ===========================
// Skill Card Click Handlers
// ===========================
document.querySelectorAll('.interactive-card').forEach(card => {
    const skillKey = card.getAttribute('data-skill');
    const learnMoreBtn = card.querySelector('.skill-learn-more');

    // Click on Learn More button
    learnMoreBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        openSkillModal(skillKey);
    });

    // Click anywhere on card (except badges)
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on a badge
        if (!e.target.classList.contains('skill-badge')) {
            openSkillModal(skillKey);
        }
    });
});

// ===========================
// Make Hero Buttons Functional
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Add temporary highlight effect
            targetElement.style.transition = 'background-color 0.5s ease';
            const originalBg = window.getComputedStyle(targetElement).backgroundColor;
            targetElement.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';

            setTimeout(() => {
                targetElement.style.backgroundColor = originalBg;
            }, 1500);
        }
    });
});

console.log('✨ Interactive skill system loaded! Click any skill card to learn more.');
