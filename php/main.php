<?php
	$fname = $_POST["fname"];
	$lname = $_POST["lname"];
	$email = $_POST["email"];
	$comment = $_POST["comment"];

	$to = "maksach@gmail.com";
	$subject = "Comment from " . $fname;
	$text = $comment . "\n\n" . $email;
	$headers = "From: " . $email . "\r\n" . 
				"CC: maksach@gmail.com";
	// . = concatenation \n = new line filezilla: uploading to web hosting service
	 //UW student server = vergil
	mail ($to, $subject, $text, $headers);

	header("Location: main.html");
	die();

?>