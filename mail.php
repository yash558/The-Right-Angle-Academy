<?php
  if(isset( $_POST['first name']))
  $name = $_POST['first name'];
  if(isset( $_POST['last name']))
  $name = $_POST['last name'];
  if(isset( $_POST['email']))
  $email = $_POST['email'];
  if(isset( $_POST['phone no']))
  $message = $_POST['phone no'];
  if(isset( $_POST['message']))
  $message = $_POST['message'];


  $content="From: $name \n Email: $email \n Message: $message";
  $recipient = "yashsharma06033@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email sent!";
?>