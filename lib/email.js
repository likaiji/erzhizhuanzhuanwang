/**
 * Created by Administrator on 2017/2/15.
 */
var nodemailer=require('nodemailer');

module.exports=function(credentials){
    var mailTransport=nodemailer.createTransport('SMTP',{
        //service QQ
        host:"smtp.qq.com",    //发邮件主机
        secureConnection:true,    //使用SSL安全连接
        port:465,     //SMTP端口号
        auth:{
            user:credentials.QQMail.user,
            pass:credentials.QQMail.password
        }
    });
        var from='"二师转转网欢迎您提出的宝贵意见"<1104310490@qq.com>';
        var errorRecipient='1104310490@qq.com';

    return {
        send:function(to,subj,body){
            mailTransport.sendMail({
                from:from,
                to:to,
                subject:subj,
                html:body,
                generateTextFromHtml:true
            },
                function(err){
                    if(err)console.error('Unable to send email:'+err);
                }
            )
        },
        emailError:function(message,filename,exception){
            var body='<h1>Meadowlark Travel Site Error</h1>' +'message:<br><pre>'+message+'</pre><br>';
            if(exception) body += 'exception:<br><pre>'+exception+'</pre></br>';
            if(filename) body+='filename:<br><pre>'+filename+'</pre></br>';

            mailTransport.sendMail({
                from:from,
                to:errorRecipient,
                subject:'Meadowlark Travel Site Error',
                html:'body',
                generateTextFromHtml:true
            },function(err){
                    if(err)console.error('Unable to send email:'+err);
                });
        }
    }
};