# Use an official Nginx image as a base image
FROM nginx:alpine

# Copy the HTML, CSS, JS, and assets files to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/
COPY about.html /usr/share/nginx/html/
COPY service.html /usr/share/nginx/html/
COPY style/ /usr/share/nginx/html/style/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY assets/ /usr/share/nginx/html/assets/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
