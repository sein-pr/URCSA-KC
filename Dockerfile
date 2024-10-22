# Use an official Nginx image as a base image
FROM nginx:alpine

# Copy the entire contents of the current directory (HTML, CSS, JS, and assets) to the Nginx HTML directory
COPY . /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
