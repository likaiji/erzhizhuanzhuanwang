/**
 * Created by Administrator on 2017/1/10.
 */
 var express=require('express');
 var router=express.Router();

//发邮件部分
module.exports=router;//导出函数到index.js里
var credentials=require('../credentials.js');
var emailService=require('../lib/email.js')(credentials);
router.post('/sendMail',function(req,res){
    emailService.send(req.body.userEmail,'欢迎访问二师转转网！','已收到您的反馈信息，谢谢支持');
    console.log('Send Successful!!!');
    console.log(req.body.userText);   //打出输入框输入内容
    return res.redirect('/contact');    //表示重定向，重定向到contact页面
});


//设置一个默认界面，如果没有index.html，就会显示这个界面的内容
router.get('/',function(req,res){
    console.log('use in');
    res.type('text/html');
    res.send('<span style="color:green;">-welcome-</span>')
});

//用post方法提交订单，返回到首页
router.post('/',function(req,res){
    res.render('login');
});

//当地址栏中输入  localhost:2100/computer时，就会显示这个界面的内容
router.get('/computer',function(req,res){
    res.render('computer');////表示将computer.hbs的内容加入到main母版中
});

// mongoDb 获取数据
router.get('/getMongoDbData',function(req,res){
    res.render('getMongoDbData');
});

//当地址栏中输入  localhost:2100/clothes时，就会显示这个界面的内容
router.get('/clothes',function(req,res){
    res.render('clothes');////表示将clothes.hbs的内容加入到main母版中
});

//当地址栏中输入  localhost:2100/food时，就会显示这个界面的内容
router.get('/contact',function(req,res){
    res.render('contact');//表示将contact.hbs的内容加入到main母版中()
});

//当地址栏中输入  localhost:2100/login时，就会显示这个界面的内容
router.get('/login',function(req,res){
    res.render('login');////表示将login.hbs的内容加入到main母版中
});

//当地址栏中输入  localhost:2100/regist时，就会显示这个界面的内容
router.get('/register',function(req,res){
    res.render('register');////表示将register.hbs的内容加入到main母版中
});

//当地址栏中输入  localhost:2100/personIndex时，就会显示这个界面的内容
router.get('/personIndex',function(req,res){
    res.render('personIndex',{layout:'personMain.hbs'});//表示页面输入personIndex时，将personIndex模板加入到personMain母版里面
});

//当地址栏中输入  localhost:2100/personData时，就会显示这个界面的内容
router.get('/personData',function(req,res){
    res.render('personData',{layout:'personMain.hbs'});//表示页面输入personData时，将personData模板加入到personMain母版里面
});

//当地址栏中输入  localhost:2100/changePersonData时，就会显示这个界面的内容
router.get('/changePersonData',function(req,res){
    res.render('changePersonData',{layout:'personMain.hbs'});//表示页面输入changePersonData时，将changePersonData模板加入到personMain母版里面
});


//当地址栏中输入  localhost:2100/myOrder时，就会显示这个界面的内容
router.get('/personMyorder',function(req,res){
    res.render('personMyorder',{layout:'personMain.hbs'});//表示页面输入myOrder时，引用将myOrder模板加入到personMain母版里面
});

//当地址栏中输入  localhost:2100/productContent时，就会显示这个界面的内容
router.get('/productContent',function(req,res){
    if(req.query.sss==1){  //获取页面的地址参数sss
        res.render('productDetail/productContentone');////表示将productDetail文件夹下面的productContent.hbs的内容加入到main母版中
    }else if(req.query.sss==2){
        res.render('productDetail/productContenttwo');
    }
    else if(req.query.sss==3){
        res.render('productDetail/productContentthree');
    }
    else if(req.query.sss==4){
        res.render('productDetail/productContentfour');
    }
    else if(req.query.sss==5){
        res.render('productDetail/productContentfive');
    }
    else if(req.query.sss==6){
        res.render('productDetail/productContentsix');
    }
    else if(req.query.sss==7){
        res.render('productDetail/productContentseven');
    }
    else if(req.query.sss==8){
        res.render('productDetail/productContenteight');
    }
    else if(req.query.sss==9){
        res.render('productDetail/productContentnine');
    }
    else if(req.query.sss==10){
        res.render('productDetail/productContentten');
    }
});


//当登陆成功，调到个人主页
router.post('/personIndex',function(req,res){
    res.render('personIndex',{layout:'personMain.hbs'});//表示页面输入personIndex时，将personIndex模板加入到personMain母版里面
});

//当注册成功，调到登录界面
router.post('/login',function(req,res){
    res.render('login');
});


//当地址栏中输入  localhost:2100/backLogin，就会显示这个界面的内容
router.get('/backLogin',function(req,res){
    res.render('back/backLogin',{layout:''});//表示页面输入backLogin时不加任何模板
});
//当地址栏中输入  localhost:2100/backRegister，就会显示这个界面的内容
router.get('/backRegister',function(req,res){
    res.render('back/backRegister',{layout:''});//表示页面输入backRegister时不加任何模板
});
//当注册了管理员后，用post方法提交到backLogin就会显示这个界面的内容
router.post('/backLogin',function(req,res){
    res.render('back/backLogin',{layout:''});
});
//登陆成功,用post方法进入后台管理首页
router.post('/backIndex',function(req,res){
    res.render('back/backIndex',{layout:'backMain.hbs'});//backIndex，将backMain模板加入到backIndex母版
});

//后台管理首页,get
router.get('/backAdministrationIndex',function(req,res){
    res.render('back/backIndex',{layout:'backMain.hbs'});
});
//后台用户管理,get
router.get('/backAdministrationUser',function(req,res){
    res.render('back/backAdministrationUser',{layout:'backMain.hbs'});
});
//后台页面商品展示管理,get
router.get('/backAdministrationPageProduct',function(req,res){
    res.render('back/backAdministrationPageProduct',{layout:'backMain.hbs'});
});
//点击修改，调到修改后台页面商品展示管理界面，get
router.get('/changebackAdministrationPageProduct',function(req,res){
    res.render('back/changebackAdministrationPageProduct',{layout:'backMain.hbs'});
});
//点击修改商品详情，进入修改界面，get
router.get('/changebackAdministrationProductContent',function(req,res){
   res.render('back/changebackAdministrationProductContent',{layout:'backMain.hbs'});
});


//后台商品详情管理,get
router.get('/backAdministrationProductContent',function(req,res){
    res.render('back/backAdministrationProductContent',{layout:'backMain.hbs'});
});

//后台订单管理,get
router.get('/backAdministrationOrderProduct',function(req,res){
    res.render('back/backAdministrationOrderProduct',{layout:'backMain.hbs'})
})
//修改后台订单信息，get
router.get('/changebackAdministrationOrderProduct',function(req,res){
    res.render('back/changebackAdministrationOrderProduct',{layout:'backMain.hbs'})
});


module.exports=router;

