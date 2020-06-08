//用于创建网络服务器的模块
const http=require('http');
//引入path模块
const path=require('path');
//引入静态资源访问模块
const serveStatic=require('serve-static');
//引入模板引擎
const template=require('art-template');
//实现静态资源访问服务
const serve= serveStatic(path.join(__dirname,'public'));
//处理时间
const dateformat=require('dateformat');
const router=require('./route/index');
//配置模板的根目录
template.defaults.root=path.join(__dirname,'views');
//处理日期格式的方法
template.defaults.imports.dateformat=dateformat;


require('./model/connect');
// app对象就是网站服务的对象
const app= http.createServer();
app.on('request',(req,res)=>{
    //启动路由功能
    router(req,res,()=>{ })
    //启动静态资源访问服务功能
    serve(req,res,()=>{})
});

app.listen(3000);
console.log('学生档案服务器启动成功');