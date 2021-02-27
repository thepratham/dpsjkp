<?php

if (isset($_POST["submit"])){
	$name = $_POST["fd_name"];
	$email = $_POST["fd_email"];
	$phone = $_POST["fd_phone"];
	$msg = $_POST["feedback"];

	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);

	// send email
	mail("myprakhar96@gmail.com","Digital Library - Feedback",$msg, "From: prathamgarg2010@gmail.com");
}

?>