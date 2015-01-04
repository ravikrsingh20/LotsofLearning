<!DOCTYPE html>

<html lang='en'>
<head>
    <meta charset="UTF-8" /> 
    <title>
        LOL
    </title>
    <link rel="stylesheet" type="text/css" href="<c:url value = "/resources/css/style.css" />" />
     <style type="text/css">
     .login-form {
            background: none repeat scroll 0 0 #f3f3f3;
            border: 1px solid #fff;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
            margin: 0 auto;
            position: relative;
            width: 890px;
            min-height: 300px;
        }
    .login-form .content .select .opt{
        color:black;
    }
    .login-form .content textarea{
       width: 500px;
       height:250px;
        padding: 15px 25px;
        
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-shadow: 1px 1px 0 rgba(256,256,256,1.0);
        
        background: #fff;
        border: 1px solid #fff;
        border-radius: 5px;
        
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
        -moz-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
        -webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
    }

     
     </style>
</head>
<body>

<div id="wrapper">
    <form name="login-form" class="login-form" action="" method="post">

    <div class="header">
    <h1>Post Question</h1>
    <span>Upload a file or type your question</span>
    </div>

    <div class="content">
    <table>
        <tr>
            <td>Select Language</td>
            <td>
                <select class="select" name="language">
                <option>Select language</option>
                <option class="opt" value="English">English</option>
                <option class="opt" value="German">German</option>
                <option class="opt" value="French">French</option>
                <option class="opt" value="Italien">Italien</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Question</td>
            <td><textarea name="question"></textarea> </td>
        </tr>
        <tr>
            <td>Upload</td>
            <td><input name="upload_file" type="file" class=" upload" /></td>
        </tr>
        
        
    </table>

            
    </div>

    <div class="footer">
    <input type="submit" name="submit" value="Post" class="button" />
    </div>
    
    </form>
    

</div>
<div class="gradient"></div>


</body>
</html>
