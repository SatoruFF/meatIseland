// ##
// # You should look at the following URL's in order to grasp a solid understanding
// # of Nginx configuration files in order to fully unleash the power of Nginx.
// # https://www.nginx.com/resources/wiki/start/
// # https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/
// # https://wiki.debian.org/Nginx/DirectoryStructure
// #
// # In most cases, administrators will remove this file from sites-enabled/ and
// # leave it as reference inside of sites-available where it will continue to be
// # updated by the nginx packaging team.
// #
// # This file will automatically load configuration files provided by other
// # applications, such as Drupal or Wordpress. These applications will be made
// # available underneath a path with that package name, such as /drupal8.
// #
// # Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
// ##

// upstream strapi {
//     server 127.0.0.1:1337;
// }

// # Default server configuration
// #
// server {
//     listen 443 ssl;
//     server_name meatisland.ru www.meatisland.ru;

//     # SSL сертификаты
//     ssl_certificate /etc/letsencrypt/live/meatisland.ru/fullchain.pem;
//     ssl_certificate_key /etc/letsencrypt/live/meatisland.ru/privkey.pem;
//     ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
//     ssl_ciphers HIGH:!aNULL:!MD5;

//     # Статика для фронтенда (React)
//     location / {
//         root /var/www/dist; # путь к скомпилированному приложению React
//         try_files $uri $uri/ /index.html; # маршрутизация через index.html для SPA
//     }

//     # Strapi API and Admin
//     location /core/ {
//         rewrite ^/core/?(.*)$ /$1 break;
//         proxy_pass http://strapi;
//         proxy_http_version 1.1;
//         proxy_set_header X-Forwarded-Host $host;
//         proxy_set_header X-Forwarded-Server $host;
//         proxy_set_header X-Real-IP $remote_addr;
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_set_header X-Forwarded-Proto $scheme;
//         proxy_set_header Host $http_host;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection "Upgrade";
//         proxy_pass_request_headers on;
//     }

//     # Прокси для вебсокетов
//     location /socket.io/ {
//         proxy_pass http://127.0.0.1:1337; # прокси на Strapi вебсокеты
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection "Upgrade";
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }

// # Редирект HTTP на HTTPS
// server {
//     if ($host = meatisland.ru) {
//         return 301 https://$host$request_uri;
//     }

//     listen 80;
//     server_name meatisland.ru www.meatisland.ru;
//     return 301 https://$host$request_uri;
// }



// # Virtual Host configuration for example.com
// #
// # You can move that to a different file under sites-available/ and symlink that
// # to sites-enabled/ to enable it.
// #
// #server {
// #	listen 80;
// #	listen [::]:80;
// #
// #	server_name example.com;
// #
// #	root /var/www/example.com;
// #	index index.html;
// #
// #	location / {
// #		try_files $uri $uri/ =404;
// #	}
// #}
