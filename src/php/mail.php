<?php


$message = $_POST['message'];
$email = $_POST['email'];
$name = $_POST['name'];

$message = htmlspecialchars($message);
$email = htmlspecialchars($email);
$name = htmlspecialchars($name);

$message = urldecode($message);
$email = urldecode($email);
$name  = urldecode($name);

$message = trim($message);
$email = trim($email);
$name = trim($name);

mail("Denis-mamlev@rambler.ru", "Письмо с сайта-портфолио", "Имя: ".$name . "\r\n". "---------------------------------------------------------------" . "\r\n". "E-mail: ".$email . "\r\n" . "---------------------------------------------------------------" . "\r\n" ."Сообщение: ".$message ,"From: info@weblandingsforyou.ru \r\n");


if (mail("Denis-mamlev@rambler.ru", "Письмо с сайта-портфолио", "Имя: ".$name . "\r\n". "---------------------------------------------------------------" . "\r\n". "E-mail: ".$email . "\r\n" . "---------------------------------------------------------------" . "\r\n" ."Сообщение: ".$message ,"From: info@weblandingsforyou.ru \r\n")) {
    header('location: ../thankyou.html');
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>
