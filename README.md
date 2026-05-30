# Salman Ranjha - Portfolio Website

A modern, responsive portfolio website showcasing my work in Data Science, AI, and Machine Learning.

## 🌐 Live Website

[View Live Portfolio](https://www.salmanranjha.me)

> `salmanranjha.me` and `www.salmanranjha.me` both work — bare domain redirects to `www.`

## 🎯 About

This portfolio website highlights my experience as a:
- Research Assistant at the Institute of Responsible Innovation, University of St. Gallen
- Teaching Assistant for Fundamentals of Computer Science
- Technical Business Analyst with expertise in ML, NLP, and Data Engineering

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript** - Interactive elements and smooth animations
- **Google Fonts** - Inter & JetBrains Mono

## ✨ Features

- Responsive design for all devices
- Animated gradient backgrounds
- Typing animation effect
- Smooth scroll navigation
- Interactive skill visualizations
- Parallax scrolling effects
- Performance optimized with Intersection Observer

## 📞 Contact

- **Email:** salman.ranjha@outlook.com
- **Phone:** +41 (78) 338-5893
- **LinkedIn:** [linkedin.com/in/salman-ranjha-934019177](https://linkedin.com/in/salman-ranjha-934019177)
- **Location:** St Gallen, Switzerland

## 🚀 Hosting & Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for the full setup — this covers the Docker container, Caddy reverse proxy, GCP VM, and DNS configuration.

**Quick reference:**

| What | Detail |
|---|---|
| VM | GCP `e2-medium`, zone `europe-west4`, external IP `34.17.37.87` |
| Container | `portfolio-web` (nginx:alpine), port `8090` on host |
| Reverse proxy | Caddy (inside `loadedout-frontend-1`), handles TLS automatically |
| Domain | `salmanranjha.me` / `www.salmanranjha.me` (GoDaddy, A records → `34.17.37.87`) |

To deploy an update:

```bash
# On the VM, inside /home/pehlacloud/projects/portfolio
git pull
docker compose build
docker compose up -d
```

## 📄 License

© 2026 Salman Ranjha. All rights reserved.

---

*Built with passion for innovation and data-driven solutions.*
