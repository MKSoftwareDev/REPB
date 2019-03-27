var revapi;
	jQuery(document).ready(function() {		
		revapi = jQuery("#rev_slider").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			fullScreenOffsetContainer:".header",

			delay:7000,
			navigation: {
				arrows:{enable:true}				
			},			
			responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
           gridwidth: [1240, 1024, 778, 480],
           gridheight: [670, 620, 580, 480],
		});		
		
	});	/*ready*/
