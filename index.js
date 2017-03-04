var express=require("express");//需要一个express三方插件

var app=express();//实例化插件

app.use(require('body-parser')());//表示使用body-parser解析表单数据

//设置handlebars视图模板引擎以及视图目录和视图文件扩展名
var handlebars=require('express-handlebars')
    .create({
        defaultLayout:'main',//设置默认母版为main
        extname:'.hbs',//设置值模板引擎文件后缀名为 .hbs

        //创建一个handlebars辅助模板，让它给出一个到静态资源的链接
        helpers:{
            static:function(name){
                return require('./lib/static.js').map(name);
            },
            section:function(name,options){
                if(!this._sections)this._sections={};
                this._sections[name]=options.fn(this);
                return null;
            }
        }
    });
app.engine('hbs',handlebars.engine);
app.set('view engine','hbs');


//静态资源
app.use(express.static(__dirname+'/public')); //两个下划线

app.set('port',process.env.PORT||2100);//设置自动以端口号2100

//配置一个默认页面
//app.get('/',function(req,res){
//   console.log('use in');//后台请求
//   res.type('text/html');//请求类型
//   res.send('<span style="color:green;">-welcome-</span>')
//});

 //配置默认进入页面
var router=require('./routes/routes.js');
app.use('/',router);



//这文件表示以后新建的文件，可以直接套用到母版里面使用
//app.get('/test',function(req,res){
//    res.render('test');//进入test页面
//});

//400,配置404失败信息
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.render('errors/404',{layout:'error'});  //路径参数，表示404错误时，把error母版的内容用404.hbs替换
});

//500,配置500服务器错误信息
app.use(function(req,res,err,next){
    console.error(err,stack);
    res.type('text/plain');
    res.status(500);
    res.render('errors/500',{layout:'error'});  //路径参数，表示404错误时，把error母版的内容用404.hbs替换
});

app.listen(app.get('port'),function(){
    console.log('Express Started on http://localhost:'+app.get('port')+';press Ctrl + C to terminate');
});