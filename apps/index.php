
<?php $root = $_SERVER['DOCUMENT_ROOT']; ?>

<html>

<head>

	<title>My apps</title>
	<?php include $root.'/head.php';?>

<body background="../img/fondo.jpg">

	<header>
		<a href="/index.php">
			<img src="../img/logo.png">
		</a>
	</header>

	<center id="content">

		<h2 style="color: #00ffff">My apps</h2>

		<div id="app_container">
			<a href="https://github.com/pablopunk/Color-Do">
				<img src="../img/colordo.png"/>
				<h3>Color Do</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="https://github.com/pablopunk/SimpleCamera">
				<img src="../img/camera.png"/>
				<h3>Simple Camera (coming soon)</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="http://pablopunk.github.io/chronocube">
				<img src="../img/chronocube.png"/>
				<h3>Chronocube</h3>
			</a>
		</div>

		<footer>
			<?php include $root.'/footer.php';?>
		</footer>
	</center>

</body>
</html>
