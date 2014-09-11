$(document).ready(
	function() {
		$("input[type='button']").on({
			'click' : function() {
				var height = $("#height").value;
				$(".answer").html(height);
				console.log(height);
			}
		});
	}
)