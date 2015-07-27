
<?php $root = $_SERVER['DOCUMENT_ROOT']; ?>

<html>

<head>

	<title>Webs</title>
	<?php include $root.'/head.php';?>

<body background="../img/fondo.jpg">

	<header>
		<a href="/index.php">
			<img src="../img/logo.png">
		</a>
	</header>

	<center id="content">

		<h2 style="color: #00ffff">My Webs</h2>

		<div id="app_container">
			<a href="http://www.15visions.tk">
				<img src="../img/15visions.png"/>
				<h3>15 visions</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="http://www.github.com/pablopunk/chronocube">
				<img src="../img/chronocube.png"/>
				<h3>Chronocube App</h3>
			</a>
		</div>

		<footer>
			<?php include $root.'/footer.php';?>
		</footer>
	</center>

</body>
</html>
