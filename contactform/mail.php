<!-- <?php
//get data from form  

$name = $_POST['first name'];
$name = $_POST['last name'];
$email= $_POST['email'];
$phone= $_POST['phone no'];
$message= $_POST['message'];

$to = "yashsh202@gmail.com";
$subject = "Details of Students From website";
$txt ="Name = ".$name . "\r\n  Email = " . $email . "\r\n Message =" . $message ."\r\n Mobile number =" . $phone;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?> -->