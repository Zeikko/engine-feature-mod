var engineFeatureModArtificialIntelligence = {};
(function () {

	engineFeatureModArtificialIntelligence.addFeatures = function() {

		Research.graphicItems = [];

		/* === Start Engine Parts === */

	    Research.graphicItems.push({
	        id: "Text Based",
	        name: "Text Based".localize(),
	        v: 1,
			techLevel: 0,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 1
	        },
	        group: "graphic-type",
	        genreAdjustments: {
	        	Action: -1,
	        	Adventure: 0.5,
	        	RPG: 1,
	        	Casual: -0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0,
	        showXPGain: !0,
	        experience: 0
	    });
	    Research.graphicItems.push({
	        id: "2D Graphics",
	        name: "2D Graphics".localize(),
	        v: 1,
			techLevel: 0,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 1
	        },
	        group: "graphic-type",
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0,
	        showXPGain: !0
	    });

		Research.StartEngineParts = Research.StartEngineParts.concat(Research.graphicItems);

		/* === Tier 2 === */ 



	    /* === Tier 3 === */ 



	    /* === Tier 4 === */ 



	    /* === Tier 5 === */ 



	    /* === Tier 6 === */ 



	    /* === Tier 7 === */ 



	    /* === Tier 8 === */ 



	    /* === Tier 9 === */ 


	}
})();