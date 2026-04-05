// ===========================
// Skill Modal Data - ACCURATE ONLY
// ===========================
const skillDetails = {
    programming: {
        title: "Programming Languages",
        skills: [
            "Python",
            "Java",
            "SQL",
            "JavaScript",
            "HTML/CSS",
            "TypeScript"
        ]
    },
    webdev: {
        title: "Web Development",
        skills: [
            "React",
            "Vite",
            "TailwindCSS",
            "FastAPI",
            "REST API Design",
            "Capacitor"
        ]
    },
    mlai: {
        title: "Machine Learning & AI",
        skills: [
            "PyTorch",
            "Transformers (BERT, BART)",
            "LLM Integration (OpenAI, Gemini, Groq, DeepSeek)",
            "RAG System Design",
            "Prompt Engineering",
            "NLP & Text Analysis"
        ]
    },
    dataeng: {
        title: "Data Engineering",
        skills: [
            "ETL Pipelines",
            "Dask Parallel Processing",
            "API Integration",
            "Data Cleaning",
            "Feature Engineering",
            "Pipeline Reliability and Monitoring",
            "HuggingFace Hub API"
        ]
    },
    databases: {
        title: "Databases",
        skills: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "SQLite",
            "Neo4j",
            "Oracle Database"
        ]
    },
    visualization: {
        title: "Data Visualization",
        skills: [
            "Tableau",
            "PowerBI",
            "Plotly",
            "Seaborn",
            "Matplotlib",
            "Data Storytelling"
        ]
    },
    tools: {
        title: "Tools & Platforms",
        skills: [
            "Git & GitHub",
            "Docker",
            "GitHub Actions (CI/CD)",
            "Google Cloud Platform",
            "Microsoft Azure",
            "Microservices Architecture"
        ]
    },
    languages: {
        title: "Languages",
        skills: [
            "English - Fluent",
            "Urdu/Hindi - Native",
            "Italian - Professional",
            "Turkish - Conversational",
            "German - Beginner"
        ]
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

    // Build simple modal content - just title and skills list
    const content = `
        <div class="modal-header">
            <h2 class="modal-title">${skill.title}</h2>
        </div>

        <div class="modal-section">
            <div class="skill-list">
                ${skill.skills.map(s => `<div class="skill-list-item">${s}</div>`).join('')}
            </div>
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
