var engineFeatureModEngine = {};
(function () {

	engineFeatureModEngine.addFeatures = function() {

		//Research.engineItems = [];

		/* === Start Engine Parts === */

		//Research.StartEngineParts = Research.StartEngineParts.concat(Research.engineItems);

		/* === Tier 2 === */ 



	    /* === Tier 3 === */ 



	    /* === Tier 4 === */ 



	    /* === Tier 5 === */ 



	    /* === Tier 6 === */ 



	    /* === Tier 7 === */ 
	    Research.engineItems.push({
	        id: "GPU Support",
	        name: "GPU Support".localize(),
	        v: 10,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 7
	        },
	        canUse: function (game) {
	            if (!game || !game.features) return !1;
	            var requirement = "Rasterisation 3D;Raytracing 3D".split(";");
	            return game.features.some(function (game) {
	                return -1 != requirement.indexOf(game.id)
	            })
	        },
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });


	    /* === Tier 8 === */ 



	    /* === Tier 9 === */ 


	}
})();