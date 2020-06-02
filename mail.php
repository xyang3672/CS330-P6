<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='xinyang2021@u.northwestern.edu'; // Receiver Email ID, Replace with your email ID
		$subject='Form Perosnal Website';
		$message="Name :".$name."\n"."Send the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", I will contact you shortly!</h1>";
		}
		else{
			echo "Error";
		}
	}
?>