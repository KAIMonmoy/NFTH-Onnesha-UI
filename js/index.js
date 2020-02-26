$(document).ready(function() {
	var newsRepository = [
		'www.thexyznews.net/news=123',
		'www.thexyznews.net/news=456',
		'www.thexyznews.net/news=789',
		'www.abc.com/news-1',
		'www.abc.com/news-2',
		'www.abc.com/news-3'
	];

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	var input = $('#report-input');
	input.on('change keyup paste click', async function() {
		var loading_gif = `<div class="loading">
			<img src="/images/loading.gif" alt="loading">
		</div>`;

		if (input.val() == newsRepository[0] || input.val() == newsRepository[3]) {
			input.after(loading_gif);
			await sleep(1000);
			$('.loading').remove();
			$('.home-content').css('background-color', '#f4590f');
			$('.processing-tag').remove();
			input.after(`<div class="processing-tag">
			<img src="/images/processing.png" alt="processing">
			<p>Your submitted news article requires manual verification.</p>
			<p>Please leave your phone number/email address.</p> <p>We will inform you with further updates.</p>
			<input type="text" name="mobOrMail" id="mob-mail" placeholder="Drop the phone number / email">
			</div>`);
		} else if (input.val() == newsRepository[1] || input.val() == newsRepository[4]) {
			input.after(loading_gif);
			await sleep(1000);
			$('.loading').remove();
			$('.home-content').css('background-color', '#2ea454');
			$('.verified-tag').remove();
			input.after(`<div class="verified-tag">
			<img src="/images/verified.png" alt="verified">
			<p>This news article has been verified.</p>
		</div>`);
		} else if (input.val() == newsRepository[2] || input.val() == newsRepository[5]) {
			input.after(loading_gif);
			await sleep(1000);
			$('.loading').remove();
			$('.home-content').css('background-color', '#e83a35');
			$('.fake-tag').remove();
			input.after(`<div class="fake-tag">
			<img src="/images/flagged.png" alt="fake">
			<p>This news article has been marked as a fake news.</p>
		</div>`);
		} else {
			$('.home-content').css('background-color', '#f15a24');
			$('.verified-tag').remove();
			$('.fake-tag').remove();
			$('.processing-tag').remove();
		}
	});
});
