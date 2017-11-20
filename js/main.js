$(document).ready(function() {
	var flagref = 0;
	var flagrun = 0;

	$('#run-qtd').val($('#run-qtd').attr('min'));

	function valida() {
		var errflag = 0;

		var elem = $('#ref');
		var bgelem = $('.f-ref');
		if( (elem.val != "0" || elem.val != "1") && flagref != 1 ) {
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
		if (val == 0) {
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

	$('#confirm').click(function() {
		valida();
	});
});