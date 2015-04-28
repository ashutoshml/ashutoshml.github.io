/**$(document).ready(
	function(){
	$(".top_nav").click(
		function(){
		$(".top_nav").slideUp("slow");
		}
	)	
});**/

$(document).ready(
	function(){
		$('body').click(function(event){
			var k = 0;
			var event_idli = [];
			var event_id = [];

			while($("#navbar_top li").get(k)!=undefined){
				event_idli.push($("#navbar_top li").get(k));
				event_id.push($("#navbar_top li a").get(k));				
				k++;
			}
			 
			var i ;
			var flag = 0;

			for(i = 0;i<4;++i){
				if($(event.target).is(event_id[i])){
					flag = 1;
					break;
				}
			}

			if(flag == 1){
				for(i = 0;i<4;++i){
					if($(event.target).is(event_id[i]))
						$(event_idli[i]).attr('class','active');
					else{
						$(event_idli[i]).attr('class','');
					}
				}
			}
		})

		

	});