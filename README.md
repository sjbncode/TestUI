# bnesp-client
vue2
element-UI http://element.eleme.io/#/zh-CN/component/tabs

#add node_modules in the .dockerignore file!!!!!!
docker build -t bnesp-client .
docker run -d -p 8010:8010 -it --rm --name bnesp bnesp-client