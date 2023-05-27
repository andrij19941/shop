<?php

// echo '<pre>';
// print_r($_POST);
// print_r($_FILES);
// echo '<pre>';




exit('success');






$to = "hukvadim@gmail.com";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>Привіт </td>
<td>Your file</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";

if(mail($to,$subject,$message,$headers)) {
    echo 'success';
} else {
    echo 'error';
}