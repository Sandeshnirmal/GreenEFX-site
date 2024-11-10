<?php

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// sadjfnbd

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        $cname = $_POST["cna"];
        $email = $_POST["cemail"];
        $cphone = $_POST["cmobile"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->SMTPDebug = 0; // Disable debugging

            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'santhakumar098123@gmail.com'; // Update with your Gmail username
            $mail->Password = 'ehfffoxlyutyfmfo'; // Update with your Gmail password
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            $mail->setFrom('santhakumar098123@gmail.com'); // Update with your email address
            $mail->addAddress('sandeshnirmalme28@gmail.com'); // Update with recipient's email address

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "Name: $cname<br>Phone: $cphone<br>Email: $email<br>Message: $message";

            if ($mail->send()) {

                echo "OK";
            } else {
                echo "Failed to send email";
            }
        }
    

// jjdskfgdhkfjgdfg

?>