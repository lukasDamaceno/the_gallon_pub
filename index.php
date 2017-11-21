<!DOCTYPE html>
<html>
<head>
	<title>The Gallon Pub</title>
</head>
<body>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/mdb.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	

	<header>
		<div class="container">
			<hr class="white">
			<h1 class="pub text-center">The Gallon Pub.</h1>
			<hr class="white">
			<h6 class="align-center font-italic text-center pub">Um pub com inteligência.</h5>
		</div>
	</header>

	<main class="d-flex justify-content-center align-items-center" style="background-image: url(img/pags-pub.jpg); background-position: top; background-attachment: fixed; background-size: cover;">
		<div class="container">
			<div class="jumbotron jumbotron-fluid">
				<div class="container black-text">
					<h1 class="text-center pub font-italic">Cuba Libre</h1>
					<p class="pub font-italic text-center">Componha seu drink e pague de acordo com sua intensidade.</p>
					<div class="row">
						<div class="col-md-6 mb-5 mt-5">
							<ul class="">
								<li>
									<h3>Cuba Fraca: R$15,00</h3>
								</li>
								<li>
									<h3>Cuba Suave: R$20,00</h3>
								</li>
								<li>
									<h3>Cuba Forte: R$25,00</h3>
								</li>
							</ul>

							<div id="result">
								<h4 class="d-none text-center"></h4>
								<h1 class="d-none text-center"></h1>
								
								<ul class="d-none">
									<li>Valores obtidos nas defuzzyficações</li>
									<li id="um">Ex. 2: <span></span></li>
									<li id="dois">Ex. 3: <span></span></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6">
							<div class="md-form f-ref">
								<h5>Refrigerante: </h5>
								<input type="radio" name="ref" id="ref" value="coca">
								<span>Coca-Cola</span>
								<br>
								<input type="radio" name="ref" id="ref" value="pepsi">
								<span>Pepsi</span>
								<br>
								<br>
								<span id="ref-qtd-lbl" class="d-none">Quantidade</span> <br>
								<input type="range" name="ref-qtd" id="ref-qtd" class="d-none"><span id="ref-qtd-val"></span>
							</div>
							<div class="md-form f-run">
								<h5>Run: </h5>
								<span id="run-qtd-lbl">Quantidade</span> <br>
								<input type="range" name="run-qtd" id="run-qtd" min="10" max="30"><span id="run-qtd-val">Escolha</span>
							</div>
							<div class="md-form">
								<input type="radio" value="20" name="gelo" id="gelo" disabled checked> <span>Gelo (20ml)</span>
							</div>

							<div class="md-form">
								<button type="button" id="compose">Compor</button>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</main>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h4 class="">Sobre o projeto </h4>
					<p>Demonstração simples de lógica fuzzy aplicada em função de uma Cuba Libre e seus ingredientes de um bar inteligente.</p>
				</div>
			</div>
		</div>
		<div class="footer-copyright elegant-color">
			<p class="text-center">Desenhado e programado por Jackson Pereira e Lukas Damaceno da Fatec Antônio Russo em São Caetano.</p>
		</div>
	</footer>


	 <!-- JQuery -->
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	
	  <!-- Bootstrap dropdown -->
    <script type="text/javascript" src="js/popper.min.js"></script>

    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>

    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
	

	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>