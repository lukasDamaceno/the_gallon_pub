$(document).ready(function() {

	

	function pertCoca(x) {
		var forte, suave, fraco;

		if(x < 50)
			forte = 0;
		else if(x >= 50 && x < 52)
			forte = 1;
		else if(x >= 52 && x <= 54)
			forte = (54 - x)/(54 - 52);
		else if(x > 54)
			forte = 0;

		if(x < 52)
			suave = 0;
		else if(x >= 52 && x <= 54)
			suave = (x - 52)/(54 - 52);
		else if(x > 54 && x < 56)
			suave = 1;
		else if(x >= 56 && x <= 58)
			suave = (58 - x)/(58-56);
		else if(x > 58)
			suave = 0;

		if(x < 56)
			fraco = 0;
		else if(x >= 56 && x <= 58)
			fraco = (x - 56)/(58 - 56);
		else if(x > 58 && x <= 60)
			fraco = 1;
		else if(x > 60)
			fraco = 0;

		return ['coca', forte, suave, fraco];
	}

	function pertPepsi(x) {
		var forte, suave, fraco;

		if(x < 60)
			forte = 0;
		else if(x >= 60 && x < 62)
			forte = 1;
		else if(x >= 62 && x <= 64)
			forte = (64 - x)/(64 - 62);
		else if(x > 64)
			forte = 0;

		if(x < 62)
			suave = 0;
		else if(x >= 62 && x <= 64)
			suave = (x - 62)/(64 - 62);
		else if(x > 64 && x < 66)
			suave = 1;
		else if(x >= 66 && x <= 68)
			suave = (68 - x)/(68-66);
		else if(x > 68)
			suave = 0;

		if(x < 66)
			fraco = 0;
		else if(x >= 66 && x <= 68)
			fraco = (x - 66)/(68 - 66);
		else if(x > 68 && x <= 70)
			fraco = 1;
		else if(x > 70)
			fraco = 0;

		return ['pepsi', forte, suave, fraco];
	}

	function pertRum(x) {
		var forte, suave, fraco;

		if(x < 23)
			forte = 0;
		else if(x >= 23 && x <= 28)
			forte = (x - 23)/(28 - 23);
		else if(x > 28 && x <= 30)
			forte = 1;
		else if(x > 30)
			forte = 0;

		if(x < 15)
			suave = 0;
		else if(x >= 15 && x <= 20)
			suave = (x - 15)/(20 - 15);
		else if(x > 20 && x < 25)
			suave = 1;
		else if(x >= 25 && x <= 27)
			suave = (27 - x)/(27-25);
		else if(x > 27)
			suave = 0;

		if(x < 10)
			fraco = 0;
		else if(x >= 10 && x < 15)
			fraco = 1
		else if(x > 15 && x <= 20)
			fraco = (20 - x)/(20 - 15);
		else if(x > 20)
			fraco = 0;

		return [forte, suave, fraco];
	}


	function pertPaladares(ref, run, gelo) {
		var forte = Math.max(Math.min(ref.forte, run.suave, gelo), Math.min(ref.forte, run.forte, gelo), Math.min(ref.suave, run.forte, gelo));
		var suave = Math.max(Math.min(ref.forte, run.fraco, gelo), Math.min(ref.suave, run.suave, gelo), Math.min(ref.fraco, run.forte, gelo));
		var fraco = Math.max(Math.min(ref.fraco, run.fraco, gelo), Math.min(ref.fraco, run.suave, gelo), Math.min(ref.suave, run.fraco, gelo));

		return [forte, suave, fraco];
	}


	function paladar(pForte, pSuave, pFraco) {
		plMax = Math.max(pForte, pSuave, pFraco);

		if(plMax == pForte) return ["forte", plMax];
		else if(plMax == pSuave) return ["suave", plMax];
		else if(plMax == pFraco) return ["fraco", plMax];
		else throw new Error('QUE PORRA É ESSA CUZÃO?');
	}

	function printaPreco(p, ps) {
		var preco;
		if(p[0] == "forte") {
			preco = "R$25,00";
		}

		if(p[0] == 'suave') {
			preco = "R$20,00";
		}

		if(p[0] == 'fraco') {
			preco = "R$15,00";
		}
		$('#result h4').html('Seu drink possui um paladar '+p[0]+'. Você pagará: ').removeClass('d-none');
		$('#result h1').html(preco).removeClass('d-none');

		$('#result ul li#um span').html('Forte: '+ps[0]+', Suave: '+ps[1]+', Fraco: '+ps[2]);
		$('#result ul li#dois span').html(p[1]);
		$('#result ul').removeClass('d-none');
	}

	function cubaLibre(tipo, ref, run, gelo) {
		this.refTipo = tipo;
		this.refQtd = ref;
		this.runQtd = run;
		this.gelo = gelo;
	}

	function pertsRef(tipo, forte, suave, fraco) {
		this.tipo = tipo;
		this.forte = forte;
		this.suave = suave;
		this.fraco = fraco;
	}

	function pertsRum(forte, suave, fraco) {
		this.forte = forte;
		this.suave = suave;
		this.fraco = fraco;
	}

	var flagref = 0;
	var flagrun = 0;

	$('#run-qtd').val($('#run-qtd').attr('min'));

	function valida() {
		var errflag = 0;

		var elem = $('#ref');
		var bgelem = $('.f-ref');
		if( (elem.val != "coca" || elem.val != "pepsi") && flagref != 1 ) {
			pisca(bgelem);
			errflag = 1
		}
		bgelem = $('.f-run');
		if(flagrun == 0) {
			pisca(bgelem)
			errflag = 1;
		}

		if(errflag != 0) {
			throw new Error('Parada de script planejada.');
		}
	}

	function pisca(jelem) {
		jelem.addClass('pisca-in').css('backgroundColor', '#FF3333');
		setTimeout(function() {
			jelem.removeClass('pisca-in').addClass('pisca-out').css('backgroundColor', '#fff');
		}, 200);
		jelem.removeClass('pisca-out');
	}

	$('#ref-qtd').on('input', function() {
		var val = $(this).val();
		flagref = 1;

		$('#ref-qtd-val').html(String(val) + 'ml.');
	});

	$('input[name=ref]').click(function() {
		var val = $(this).val();
		flagref = 0;

		if (val == "coca") {
			$('#ref-qtd').attr('min', 50).attr('max', 60).val($('#ref-qtd').attr('min'));
		} else {
			$('#ref-qtd').attr('min', 60).attr('max', 70).val($('#ref-qtd').attr('min'));
		}
		$('#ref-qtd, #ref-qtd-lbl').removeClass('d-none');
		$('#ref-qtd-val').html('Escolha');
	});

	$('#run-qtd').on('input', function() {
		var val = $(this).val();
		flagrun = 1;

		$('#run-qtd-val').html(String(val) + 'ml.');
	});

	$('#compose').click(function() {
		valida();
		var refTipo = $('input[name=ref]:checked').val();
		var ref = parseInt($('#ref-qtd').val(), 10);
		var run = parseInt($('#run-qtd').val(), 10);
		var gelo = parseInt($('#gelo').val(), 10);

		var c1 = new cubaLibre(refTipo, ref, run, gelo);

		if(c1.refTipo == "coca") {
			psRef = pertCoca(c1.refQtd);
		} else {
			psRef = pertPepsi(c1.refQtd);
		}
		var prf = new pertsRef(psRef[0], psRef[1], psRef[2], psRef[3]);

		var pRum = pertRum(c1.runQtd);
		var prm = new pertsRum(pRum[0], pRum[1], pRum[2]);

		var pgl = 1;

		var paladares = pertPaladares(prf, prm, pgl);

		var paladarFinal = paladar(paladares[0], paladares[1], paladares[2]);


		printaPreco(paladarFinal, paladares);
	});
});