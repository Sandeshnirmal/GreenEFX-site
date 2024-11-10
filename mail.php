 <?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
// require 'phpmailer/composer.json';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     error_log("Received form data: cname=$cname, email=$email, phone=$cphone, subject=$subject, message=$message");

    
        $cname = $_POST["cname"];
        $email = $_POST["cemail"];
        $cphone = $_POST["cmobile"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->SMTPDebug = 0; // or 3 for more detailed output
            $mail->Debugoutput = 'html'; // or 'echo' for plain text output
            $mail->Host = 'greenefxmedia.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'recruit@greenefxmedia.com'; // Update with your Gmail username
            $mail->Password = 'UH3m{4yoR5O,'; // Update with your Gmail password
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;

            $mail->setFrom('recruit@greenefxmedia.com'); // Update with your email address
            $mail->addAddress('contact@greenefxmedia.com'); // Update with recipient's email address
            
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "Name: $cname<br>Phone: $cphone<br>Email: $email<br>Message: $message";

            if ($mail->send()) {
                echo "OK";
            } else {
                echo "Failed. Error: ". $mail->ErrorInfo;;
            }
        }
    



?>