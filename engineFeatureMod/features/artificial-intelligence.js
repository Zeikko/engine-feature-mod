var engineFeatureModArtificialIntelligence = {};
(function () {

	engineFeatureModArtificialIntelligence.addFeatures = function() {

		Research.aiItems = [];

		/* === Start Engine Parts === */

		//Research.StartEngineParts = Research.StartEngineParts.concat(Research.graphicItems);

		/* === Tier 2 === */ 

	    Research.aiItems.push({
	        id: "Reactive AI",
	        name: "Reactive AI".localize(),
	        v: 2,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 2
	        },
	        genreAdjustments: {
	        	Action: 1,
	        	Adventure: 0.5,
	        	RPG: -0.5,
	        	Simulation: -0.5,
	        	Strategy: -1,
	        	Casual: 0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'AI-type',
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 3 === */ 

	    Research.aiItems.push({
	        id: "Finite State Machine AI",
	        name: "Finite State Machine AI".localize(),
	        v: 4,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 3
	        },
	        genreAdjustments: {
	        	Strategy: 1
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'AI-type',
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 4 === */ 

	    Research.aiItems.push({
	        id: "AI Personalities",
	        name: "AI Personalities".localize(),
	        v: 4,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 4
	        },
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
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 5 === */ 

	    Research.aiItems.push({
	        id: "Contextual Behaviour AI",
	        name: "Contextual Behaviour AI".localize(),
	        v: 6,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 5
	        },
	        genreAdjustments: {
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'AI-type',
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 6 === */ 

	    Research.aiItems.push({
	        id: "Neural Networks",
	        name: "Neural Networks".localize(),
	        v: 6,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 6
	        },
	        genreAdjustments: {
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 7 === */ 

	    Research.aiItems.push({
	        id: "Genetic Algorithms",
	        name: "Genetic Algorithms".localize(),
	        v: 6,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 7
	        },
	        genreAdjustments: {
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 8 === */ 

	    Research.aiItems.push({
	        id: "Machine Learning AI",
	        name: "Machine Learning AI".localize(),
	        v: 12,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('AI') >= 8
	        },
	        genreAdjustments: {
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'AI-type',
	        category: "AI",
	        categoryDisplayName: "A.I.".localize(),
	        experience: 0
	    });

	    /* === Tier 9 === */ 


	}
})();