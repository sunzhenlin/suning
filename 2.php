<?php
$a=$_GET["user"];
$b=$_GET["password"];
// $a "aaa" 用户名
// $b  "123" 密码
$arr=array("laiqian","longzhu","shuaiting");
$arr2=array("laiqian"=>"123","longzhu"=>"123","shuaiting"=>"123");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
  echo '{"code":0}'; 
}
// 有没有用户名  用户名和密码是否  
// 反馈的信息
// 没有用户名  '{"code":0}';
// 有用户名 但是密码不对   '{"code":1}'
// 登陆成功  '{"code":2}'
?>