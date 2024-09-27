# AlemonJS

## 编辑

这里是[AlemonJS框架](https://github.com/lemonade-lab/alemonjs)内容编辑源码，

该文档编辑提交后会进入自动部署，并更新网页。

> 如果文档中发现错误，或提交文档修改，或丰富本站文档，可点击编辑按钮

[阅读文档 https://alemonjs.com/](https://alemonjs.com/)

- 本地部署

```sh
git clone --depth=1  -b docs  https://github.com/lemonade-lab/alemonjs-docs.git
```

- nginx

```conf
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  alemonjs.com;
        location / {
             return 301 https://$host;
        }
    }
     server {
         listen       443 ssl;
         server_name  localhost;
         ssl_certificate /usr/local/nginx/alemonjs.com_nginx/alemonjs.com_bundle.crt;
         ssl_certificate_key /usr/local/nginx/alemonjs.com_nginx/alemonjs.com.key;
         location / {
            root   alemonjs-docs;
            index  index.html index.htm;
         }
     }
}
```

## 注意

请勿提交任何非法内容
