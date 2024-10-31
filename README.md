# [https://alemonjs.com/](https://alemonjs.com/)

## 编辑

这里是[AlemonJS框架](https://github.com/lemonade-lab/alemonjs)文档编辑源码

该仓库已开启自动化部署，提交并成功合并内容，将在1-2min内更新网站

> 如果文档中发现错误，或提交文档修改，或丰富本站文档，可点击编辑按钮

## 本地

- 克隆

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
    # http
    server {
        listen       80;
        server_name  alemonjs.com;
        location / {
             return 301 https://$host;
        }
    }
    # https
    server {
         listen       443 ssl;
         server_name  alemonjs.com;
         ssl_certificate /usr/local/nginx/alemonjs.com_nginx/alemonjs.com_bundle.crt;
         ssl_certificate_key /usr/local/nginx/alemonjs.com_nginx/alemonjs.com.key;
         location / {
            # 目录文件
            root   alemonjs-docs;
            # 入口
            index  index.html index.htm;
         }
     }
}
```

## 注意

请勿提交任何非法内容
