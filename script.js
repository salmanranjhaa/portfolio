const viewTriggers = Array.from(document.querySelectorAll('[data-view-target]'));
const navLinks = Array.from(document.querySelectorAll('.workspace-link'));
const viewPanels = Array.from(document.querySelectorAll('.view-panel'));
const viewTitle = document.getElementById('viewTitle');
const sidebar = document.querySelector('.sidebar');
const workspace = document.querySelector('.workspace');

const experiencePanel = workspace?.querySelector('.view-panel[data-view="experience"]');
const projectsPanel = workspace?.querySelector('.view-panel[data-view="projects"]');
if (workspace && experiencePanel && projectsPanel) {
    workspace.insertBefore(experiencePanel, projectsPanel);
}

const viewNames = {
    overview: 'Overview',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
};

const animatedPanels = new Set();
let countersStarted = false;

function applyEnterDelays(scope) {
    const items = Array.from(scope.querySelectorAll('.animate-item'));
    items.forEach((item, index) => {
        item.style.setProperty('--enter-delay', `${index * 55}ms`);
    });
}

function markPanelReady(panel) {
    const viewId = panel.dataset.view;
    if (!animatedPanels.has(viewId)) {
        applyEnterDelays(panel);
        panel.classList.add('panel-ready');
        animatedPanels.add(viewId);
    }
}

function getActiveViewId() {
    return document.querySelector('.view-panel.active')?.dataset.view || 'overview';
}

function setActiveView(viewId, options = {}) {
    const { updateHash = true } = options;
    const targetPanel = viewPanels.find((panel) => panel.dataset.view === viewId);
    if (!targetPanel) {
        return;
    }

    viewPanels.forEach((panel) => panel.classList.remove('active'));
    targetPanel.classList.add('active');

    navLinks.forEach((button) => {
        const isActive = button.dataset.viewTarget === viewId;
        button.classList.toggle('active', isActive);
    });

    viewTitle.textContent = viewNames[viewId] || 'Overview';
    markPanelReady(targetPanel);

    if (viewId === 'overview') {
        animateCounters();
    }

    if (updateHash) {
        window.history.replaceState(null, '', `#${viewId}`);
    }
}

function animateCounters() {
    if (countersStarted) {
        return;
    }
    countersStarted = true;

    const counters = Array.from(document.querySelectorAll('[data-count]'));
    counters.forEach((counter, index) => {
        const target = Number(counter.dataset.count || 0);
        const duration = 1300 + (index * 180);
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);

            if (target >= 1000) {
                counter.textContent = `${current.toLocaleString()}+`;
            } else {
                counter.textContent = String(current);
            }

            if (progress < 1) {
                window.requestAnimationFrame(tick);
            }
        }

        window.requestAnimationFrame(tick);
    });
}

if (sidebar) {
    applyEnterDelays(sidebar);
    sidebar.classList.add('panel-ready');
}

viewTriggers.forEach((button) => {
    button.addEventListener('click', () => {
        if (drawer?.classList.contains('active')) {
            closeProjectDrawer({ updateHash: false });
        }
        setActiveView(button.dataset.viewTarget);
    });
});

const projectData = {
    'loadout': {
        title: 'Loadout - Personal Routine and Nutrition Assistant',
        date: 'Mar 2026 - Present',
        subtitle: 'AI wellness product delivered as both a web app and native Android app.',
        overview: 'Loadout is a production-grade assistant for meal logging, workout tracking, schedule planning, and budget accountability through natural-language workflows.',
        architecture: [
            'FastAPI backend with shared contract across web and Android clients.',
            'Gemini-powered meal parsing and macro estimation with fallback handling.',
            'MCP server with 24 tools for inventory, schedules, meals, workouts, and expenses.'
        ],
        impact: [
            'Shipped one architecture to two front-end surfaces without branching logic.',
            'Reduced user input friction through natural-language meal entry.',
            'Enabled assistant interoperability through a dedicated MCP interface.'
        ],
        stack: ['FastAPI', 'React', 'Capacitor', 'PostgreSQL', 'MongoDB', 'Vertex AI', 'MCP', 'Docker'],
        links: [
            { label: 'GitHub', href: 'https://github.com/salmanranjhaa/loadout' },
            { label: 'Live', href: 'https://loadedout.online' }
        ],
        previewClass: 'preview-loadout',
        previewIcon: '🥗',
        previewFlow: 'meals • workouts • goals'
    },
    'erp-rag': {
        title: 'ERP-RAG and STRATA - Enterprise Multi-Agent Intelligence',
        date: 'Mar 2026 - Present',
        subtitle: 'Enterprise assistant that combines SQL, vector, and graph retrieval for complex ERP queries.',
        overview: 'ERP-RAG routes business queries through the right retrieval mode, then escalates to multi-step reasoning for requests requiring decomposition and synthesis.',
        architecture: [
            'Dual-agent flow: direct route for fast answers and ReAct flow for chained reasoning.',
            'Unified retrieval across PostgreSQL, ChromaDB, and Neo4j via tool routing.',
            'Voice input support and model fallback path to improve runtime reliability.'
        ],
        impact: [
            'Improved answer quality for cross-functional ERP questions.',
            'Maintained low latency for straightforward operational queries.',
            'Reduced single-model dependency through explicit fallback logic.'
        ],
        stack: ['FastAPI', 'LlamaIndex', 'Groq', 'PostgreSQL', 'ChromaDB', 'Neo4j', 'Docker Compose'],
        links: [
            { label: 'GitHub', href: 'https://github.com/salmanranjhaa/ERP-RAG' }
        ],
        previewClass: 'preview-erp',
        previewIcon: '🧠',
        previewFlow: 'sql • vector • graph'
    },
    'hf-mmf': {
        title: 'HuggingFace Model Metadata Framework',
        date: 'Sep 2025 - Dec 2025',
        subtitle: 'Million-scale model analysis pipeline for curation and downstream training set construction.',
        overview: 'HF-MMF processes and ranks model metadata to produce high-quality curation sets under strict storage budgets for weight-space learning workflows.',
        architecture: [
            'Eight-stage ETL process for JSON normalization, enrichment, and quality filtering.',
            'Scoring model based on popularity, influence, originality, and documentation quality.',
            'Distributed worker coordination with atomic claiming and retry management.'
        ],
        impact: [
            'Processed over one million models for selection.',
            'Supported budgets from 50TB to 1.6PB while preserving diversity.',
            'Enabled reproducible curation through deterministic scoring stages.'
        ],
        stack: ['Python', 'Pandas', 'Dask', 'SQLite', 'HuggingFace Hub API', 'Plotly'],
        links: [
            { label: 'GitHub', href: 'https://github.com/HSG-AIML/IMP_HuggingFace-Model-Collection' }
        ],
        previewClass: 'preview-hf',
        previewIcon: '🤗',
        previewFlow: 'scrape • score • curate'
    },
    'pitas': {
        title: 'PITAS - Distributed Task Execution Platform',
        date: 'Sep 2025 - Dec 2025',
        subtitle: 'Federated microservice platform for distributed task execution and auction-based routing.',
        overview: 'PITAS coordinates distributed workloads across microservices using event-driven messaging and interoperable APIs.',
        architecture: [
            'Service decomposition across job registry, scheduler, worker pools, and auctions.',
            'Real-time communication through MQTT and WebSub integration.',
            'Containerized delivery pipeline with CI/CD and team-level integration contracts.'
        ],
        impact: [
            'Delivered an interoperable architecture with clear service ownership.',
            'Improved responsiveness for distributed scheduling decisions.',
            'Shipped production-ready integration flows with external teams.'
        ],
        stack: ['Java', 'Spring Boot', 'MQTT', 'WebSub', 'MCP', 'Docker', 'GitHub Actions'],
        links: [
            { label: 'GitHub', href: 'https://github.com/unisg-scs-asse/pitas-hs25-group11' }
        ],
        previewClass: 'preview-pitas',
        previewIcon: '⚙️',
        previewFlow: 'events • auctions • workers'
    },
    'doc-ie': {
        title: 'Document Information Extraction System',
        date: 'Feb 2025 - May 2025',
        subtitle: 'Low-resource extraction benchmark comparing fine-tuned transformers against prompting baselines.',
        overview: 'This project assessed extraction strategies under low-resource settings with a focus on practical trade-offs between performance, latency, and inference cost.',
        architecture: [
            'Evaluation framework across model families and prompting strategies.',
            'Build-vs-buy analysis for custom model training versus few-shot prompting.',
            'Augmentation experiments for data quality in low-resource NER tasks.'
        ],
        impact: [
            'Generated clear guidance for model choice under constrained budgets.',
            'Quantified latency and cost trade-offs for deployment planning.',
            'Improved data robustness through targeted augmentation patterns.'
        ],
        stack: ['PyTorch', 'Transformers', 'GPT-4', 'Gemini', 'NLP Evaluation'],
        links: [],
        previewClass: 'preview-doc',
        previewIcon: '📄',
        previewFlow: 'ocr • classify • extract'
    }
};

const drawer = document.getElementById('projectDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerPreview = document.getElementById('drawerPreview');
const drawerDate = document.getElementById('drawerDate');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSubtitle = document.getElementById('drawerSubtitle');
const drawerOverview = document.getElementById('drawerOverview');
const drawerArchitecture = document.getElementById('drawerArchitecture');
const drawerImpact = document.getElementById('drawerImpact');
const drawerStack = document.getElementById('drawerStack');
const drawerLinks = document.getElementById('drawerLinks');

function listToMarkup(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function tagsToMarkup(items) {
    return items.map((item) => `<span>${item}</span>`).join('');
}

function linksToMarkup(items) {
    if (!items.length) {
        return '';
    }
    return items
        .map((item) => `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`)
        .join('');
}

function openProjectDrawer(projectId, options = {}) {
    const { updateHash = true } = options;
    const project = projectData[projectId];
    if (!project || !drawer) {
        return;
    }

    setActiveView('projects', { updateHash: false });

    drawerDate.textContent = project.date;
    drawerTitle.textContent = project.title;
    drawerSubtitle.textContent = project.subtitle;
    drawerOverview.textContent = project.overview;

    drawerArchitecture.innerHTML = listToMarkup(project.architecture);
    drawerImpact.innerHTML = listToMarkup(project.impact);
    drawerStack.innerHTML = tagsToMarkup(project.stack);
    drawerLinks.innerHTML = linksToMarkup(project.links);

    drawerPreview.className = `drawer-preview project-preview ${project.previewClass}`;
    drawerPreview.dataset.icon = project.previewIcon || '';
    drawerPreview.dataset.flow = project.previewFlow || '';

    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');

    if (updateHash) {
        window.history.replaceState(null, '', `#project-${projectId}`);
    }
}

function closeProjectDrawer(options = {}) {
    const { updateHash = true } = options;
    if (!drawer) {
        return;
    }

    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');

    if (updateHash) {
        window.history.replaceState(null, '', `#${getActiveViewId()}`);
    }
}

Array.from(document.querySelectorAll('[data-project-open]')).forEach((trigger) => {
    const projectId = trigger.dataset.projectOpen;

    trigger.addEventListener('click', () => {
        openProjectDrawer(projectId);
    });

    if (trigger.classList.contains('project-card')) {
        trigger.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openProjectDrawer(projectId);
            }
        });
    }
});

Array.from(document.querySelectorAll('[data-close-drawer]')).forEach((closer) => {
    closer.addEventListener('click', () => closeProjectDrawer());
});

if (drawerClose) {
    drawerClose.addEventListener('click', () => closeProjectDrawer());
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer?.classList.contains('active')) {
        closeProjectDrawer();
    }
});

function routeFromHash() {
    const hash = window.location.hash.replace('#', '').trim();

    if (!hash) {
        setActiveView('overview', { updateHash: false });
        return;
    }

    if (hash.startsWith('project-')) {
        const projectId = hash.slice('project-'.length);
        if (projectData[projectId]) {
            openProjectDrawer(projectId, { updateHash: false });
            return;
        }
    }

    if (viewNames[hash]) {
        closeProjectDrawer({ updateHash: false });
        setActiveView(hash, { updateHash: false });
        return;
    }

    setActiveView('overview', { updateHash: false });
}

window.addEventListener('hashchange', routeFromHash);
routeFromHash();

