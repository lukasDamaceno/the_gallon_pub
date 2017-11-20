$(document).ready(function() {
	function valida() {
		console.log('ALOOOO');
	}

	$('#ref-qtd').on('input', function() {
		var val = $(this).val();

		$('#ref-qtd-val').html(String(val) + 'ml.');
	});

	$('input[name=ref]').click(function() {
		var val = $(this).val();
		if (val == 0) {
			$('#ref-qtd').attr('min', 50).attr('max', 60);
		} else {
			$('#ref-qtd').attr('min', 60).attr('max', 70);
		}
		$('#ref-qtd, #ref-qtd-lbl').removeClass('d-none');
		$('#ref-qtd-val').html('Escolha');
	});

	$('#run-qtd').on('input', function() {
		var val = $(this).val();

		$('#run-qtd-val').html(String(val) + 'ml.');
	});

	$('#confirm').click(function() {
		valida();
	});
});