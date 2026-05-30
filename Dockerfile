FROM nginx:alpine
COPY index.html style.css script.js skills-modal.js animated-icons.html /usr/share/nginx/html/
COPY image /usr/share/nginx/html/image
EXPOSE 80
