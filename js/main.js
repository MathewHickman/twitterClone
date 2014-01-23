$(function(){
	
	var input = $('textarea');

	$('textarea').click(function() {
		$(this).css('height', '300px');
		$('#tweet-controls').css('display' , 'block');
	});
	
	input.bind('keydown', function(e) {
		
		$('#char-count').text(140 - input.val().length);
		
		if (input.val().length >= 141) {	
			$('#tweet-submit').prop('disabled', 'true');
		}
		
		if (input.val().length <= 140) {
			$('#tweet-submit').removeAttr('disabled');
		}	
	});//end input keydown
	
		$('#tweet-submit').click(function() {
			var newdiv1 = $('.tweet').eq(0).clone();
			
			//.find()
			newdiv1.find('.avatar').prop('src', 'img/alagoon.jpg');
			newdiv1.find('.fullname').text($('.loggedusername').text());
			newdiv1.find('.username').text($('.loggeduserhandle').text());
			newdiv1.find(".tweet-text").text($('.tweet-compose').val());
			
				
			
			if (input.val().length === 0) {
				alert("You cannot send a blank tweet!");
			} else {
				$('#stream').prepend(newdiv1);
			};
			
		});//end tweet submit
		
		 $('body').on('mouseenter', '.tweet', function() {
				$('.tweet-actions').css('display', 'block')
 			});
		$('body').on('mouseleave', '.tweet', function() {
 			$('.tweet-actions').css('display', 'none')
 		});

});//end page load
