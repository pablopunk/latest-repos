
<?php $root = $_SERVER['DOCUMENT_ROOT']; ?>

<html>

<head>

	<title>My Pebble watchfaces</title>
	<?php include $root.'/head.php';?>

<body background="../img/fondo.jpg">

	<header>
		<a href="/index.php">
			<img src="../img/logo.png">
		</a>
	</header>

	<center id="content">

		<h2 style="color: #00ffff">My Pebble watchfaces</h2>

		<div id="Zebrahead watchface">
			<a href="https://github.com/pablopunk/pebble-watchfaces/tree/master/zebrahead_face/build">
				<img src="../img/zhface.png"/>
				<h3>Zebrahead face</h3>
			</a>
		</div>

		<footer>
			<?php include $root.'/footer.php';?>
		</footer>
	</center>

</body>
</html>
