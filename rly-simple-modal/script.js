jQuery(function() {

	var dgpPopupsQuantidade = jQuery(".rly-popups-item-box").length;
	if (dgpPopupsQuantidade > 0) {
		

		// Abrindo Modal
		jQuery(".rly-popups-item-box").each(function(){
			var dgpPopupsId = jQuery(this).attr("id");
			dgpPopupsIdValor = localStorage.getItem(dgpPopupsId);
			var dgpPopupsAuto = jQuery(this).attr("popupabrir");

			// Criando botão de fechar
			jQuery(this).find(".rly-popups-item").prepend('<a href="javascript:void(0)" class="rly-popups-close jsPopupsClose"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;" xml:space="preserve"> <g> <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85   c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563   c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85   l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554   L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z" fill="#FFFFFF"></path></g></svg></a>');

			jQuery(this).find(".rly-popups-item").find("a").addClass("jsPopupsClose");

			if (dgpPopupsIdValor == 1) {
			} else {

				if (dgpPopupsAuto == 'nope') {
					
				}
				else {
					jQuery(this).fadeIn("slow");
		
					jQuery(".rly-popups-item img").load(function() {
						dgpPopupsCentralizarTudo();
					});

					dgpPopupsCentralizarTudo();
				}

				

			}
			
		});

		// Fechando o Modal
		jQuery(".jsPopupsClose").click(function(){
			jQuery(this).parent().parent(".rly-popups-item-box").fadeOut("slow");
			var dgpPopupsSalvar = jQuery(this).parent().parent(".rly-popups-item-box").attr("popupsalvar");

			if ( dgpPopupsSalvar == "salvar" ) {
				var dgpPopupsId = jQuery(this).parent().parent(".rly-popups-item-box").attr("id");
				localStorage.setItem(dgpPopupsId, "1");
			}
		});

		// Clicando em algum link com #
		jQuery("a").click(function(){
			var dgpPopupsHref = jQuery(this).attr("href");

			jQuery(".rly-popups-item-box").each(function(){
				var dgpPopupsId = "#"+jQuery(this).attr("id");

				if (dgpPopupsHref == dgpPopupsId) {
					jQuery(dgpPopupsHref).fadeIn("slow");
					jQuery(".rly-popups-item img").load(function() {
						dgpPopupsCentralizarTudo();
					});
					dgpPopupsCentralizarTudo();
				}
			});
	        
		});
		// / Clicando em algum link com #
	}
});



// Centralizando Modal
function dgpPopupsCentralizarTudo() {
	var dgpTamanhoTela = jQuery(window).height();
	jQuery(".rly-popups-item").each(function(){
		var dgpTamanhoPopup = jQuery(this).height();
		var dgpMarginPopup = (dgpTamanhoTela - dgpTamanhoPopup)/2;

		if (dgpMarginPopup > 0) {
			jQuery(this).css('margin-top',dgpMarginPopup+'px');
		}
	});
}

