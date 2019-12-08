<!DOCTYPE html>
<html>

<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="JairoG, RonmelL">


	<title>Simulador de Credito</title>

	<!-- Additional CSS Files -->
	<link rel="stylesheet" type="text/css" href="Frameworks/Bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="Frameworks/Semantic/semantic.min.css">
	<link rel="stylesheet" type="text/css" href="Recursos/Estilos/font-awesome.css">
	<link rel="stylesheet" href="Recursos/Estilos/style.css">

</head>

<body>



	<!-- ***** Header Area Start ***** -->
	<header class="header-area header-sticky">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="main-nav">
						<!-- ***** Logo Start ***** -->
						<a href="Index.php" class="logo">
							<img src="Recursos/Imagenes/logo.png" alt="PréstamosCrediticios" width="270px;" />
						</a>
						<!-- ***** Logo End ***** -->
						<!-- ***** Menu Start ***** -->
						<ul class="nav">
							<li><a href="#">Tipos De Intereses </a></li>
							<li><a href="#">Soporte </a></li>
						</ul>

						<!-- ***** Menu End ***** -->
					</nav>
				</div>
			</div>
		</div>
	</header>
	<!-- ***** Header Area End ***** -->

	<!-- ***** Welcome Area Start ***** -->
	<div class="welcome-area" id="welcome">

		<!-- ***** Header Text Start ***** -->
		<div class="header-text">
			<div class="container">
				<div class="row">
					<div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
						
						<p><strong>  ¿Que Desea Simular?</strong></p>
						
					</div>
				</div>
			</div>
		</div>
		<!-- ***** Header Text End ***** -->
	</div>
	

	<!-- ***** Features Small Start ***** -->
	<section class="section home-feature">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">

					<div class="row">
						
						<!-- *** Inicio forms *** -->
						<form>

						  <div class="form-group row">
						    <label for="vp" class="col-sm-6 col-form-label">Valor del préstamo:</label>
						    <div class="col-sm-6">
						      <input type="text" class="form-control" id="vp">
						    </div>
						  </div>

						  <div class="form-group row">
						    <label for="tae" class="col-sm-6 col-form-label">Tasa Anual Efectiva:</label>
						    <div class="col-sm-6">
						      <input type="text" class="form-control" id="tae">
						    </div>
						  </div>

						  <div class="form-group row">
						    <label for="nc" class="col-sm-6 col-form-label">Número de cuotas:</label>
						    <div class="col-sm-6">
						      <input type="text" class="form-control" id="nc">
						    </div>
						  </div>

						  <div class="form-group row">
						    <label for="p" class="col-sm-6 col-form-label">Períodos:</label>
						    <div class="col-sm-6">
						      <select class="form-control">
							    <option>Default select</option>
							  </select>
						    </div>
						  </div>

						  <div class="form-group row">
						    <label for="pg" class="col-sm-6 col-form-label">Períodos de Gracia:</label>
						    <div class="col-sm-6">
						      <input type="text" class="form-control" id="pg">
						    </div>
						  </div>

						  <div class="form-group row">
						    <label for="tc" class="col-sm-6 col-form-label">Tipo de Crédito:</label>
						    <div class="col-sm-6">
						      <select class="form-control">
							    <option>Default select</option>
							  </select>
						    </div>
						  </div>
						  <!-- *** boton1 *** -->
						  <div class="form-group row">
						    <div class="col-sm-10">
						      <button type="button" class="btn btn-outline-primary">Agregar Otro Préstamo</button>
						    </div>
						  </div>
						  <!-- *** boton2 *** -->
						  <div class="form-group row">
						    <div class="col-sm-10">
						      <button type="submit" class="btn btn-primary">Cálcular</button>
						    </div>
						  </div>

						</form>
						<!-- *** final forms *** -->

					</div>

				</div>
			</div>
		</div>
	</section>


	<!-- ***** Footer Start ***** -->
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<p class="copyright">&copy; 2019 SimuladorDeCredito</p>
				</div>
			</div>
		</div>
	</footer>
	<!-- ***** Footer End ***** -->

	<!-- jQuery -->
	<script src="Recursos/Scripts/js/jquery-2.1.0.min.js"></script>
	<!-- Bootstrap -->
	<script src="Recursos/Scripts/js/popper.js"></script>
	<script src="Recursos/Scripts/js/bootstrap.min.js"></script>
	<!-- Plugins -->
	<script src="Recursos/Scripts/js/scrollreveal.min.js"></script>
	<!-- Global Init -->
	<script src="Recursos/Scripts/js/custom.js"></script>

</body>
</html>