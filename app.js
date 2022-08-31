(function($) {
	$(document).ready( function() {
		$('.review-form').on('submit', function(e) {
			e.preventDefault();
			$('#rating').text($('input[name="rating"]:checked').val());
			$('.review-card').addClass('hidden');
			$('.thank-you-card').removeClass('hidden');
		});

		$('.form-group label').on('click', function() {
			$('.form-group').removeClass('active');
			$(this).parent().addClass('active');
		});
	});
}(jQuery));