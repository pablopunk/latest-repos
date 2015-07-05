
<?php $root = $_SERVER['DOCUMENT_ROOT']; ?>

<html>

<head>

	<title>Social Networks</title>
	<?php include $root.'/head.php';?>

<body background="../img/fondo.jpg">

	<header>
		<a href="/index.php">
			<img src="../img/logo.png">
		</a>
	</header>

	<center id="content">

		<h2 style="color: #00ffff">Social Networks</h2>

		<div id="app_container">
			<a href="https://twitter.com/pablopunk">
				<img src="../img/twitter.png"/>
				<h3>Twitter</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="https://instagram.com/pablopunk">
				<img src="../img/instagram.png"/>
				<h3>Instagram</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="https://youtube.com/varelapol13">
				<img src="../img/youtube.png"/>
				<h3>YouTube</h3>
			</a>
		</div>

		<footer>
			<?php include $root.'/footer.php';?>
		</footer>
	</center>

</body>
</html>
