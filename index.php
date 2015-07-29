
<?php $root = $_SERVER['DOCUMENT_ROOT']; ?>

<html>

<head>

	<title>pablopunk</title>
	<?php include $root.'/head.php';?>

</head>

<body background="img/fondo.jpg">

	<header>
		<a href="/index.php">
			<img src="img/logo.png">
		</a>
	</header>

	<center id="content">

		<div id="app_container">
			<a href="apps/index.php">
				<img src="img/apps.png"/>
				<h3>Apps</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="pebble/index.php">
				<img src="img/pebble.png"/>
				<h3>Pebble Watchfaces</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="webs/index.php">
				<img src="img/webs.png"/>
				<h3>Webs</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="http://github.com/pablopunk">
				<img src="img/github.png"/>
				<h3>GitHub</h3>
			</a>
		</div>

		<div id="app_container">
			<a href="social/index.php">
				<img src="img/social.png"/>
				<h3>Social</h3>
			</a>
		</div>

		<!-- <div id="app_container">
			<a href="blog/index.php">
				<img src="img/wordpress.png"/>
				<h3>Blog</h3>
			</a>
		</div> -->


		<footer>
			<?php include $root.'/footer.php';?>
		</footer>
	</center>

</body>
</html>
