var engineFeatureModDialogues = {};
(function () {

	engineFeatureModDialogues.addFeatures = function() {

		Research.dialogueItems = [];

		/* === Start Engine Parts === */

		Research.StartEngineParts = Research.StartEngineParts.concat(Research.dialogueItems);

		/* === Tier 2 === */ 

	    Research.graphicItems.push({
	        id: "Situational Dialogue",
	        name: "Situational Dialogue".localize(),
	        v: 1,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 2
	        },
	        group: "dialogue-type",
	        genreAdjustments: {
	        	Action: -1,
	        	Adventure: 1,
	        	RPG: 0.5,
	        	Strategy: -0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    /* === Tier 3 === */ 

	    Research.graphicItems.push({
	        id: "Branching Dialogue",
	        name: "Branching Dialogue".localize(),
	        v: 2,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 3
	        },
	        group: "dialogue-type",
	        genreAdjustments: {
	        	Action: -1,
	        	Adventure: 0.5,
	        	RPG: 1,
	        	Strategy: -0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    /* === Tier 4 === */ 

	    Research.graphicItems.push({
	        id: "Voice Acting",
	        name: "Voice Acting".localize(),
	        v: 4,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 4
	        },
	        group: "voice-acting",
	        genreAdjustments: {
	        	RPG: 0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    /* === Tier 5 === */ 

	    Research.graphicItems.push({
	        id: "Animation Graphs",
	        name: "Animation Graphs".localize(),
	        v: 4,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 5 && LevelCalculator.getMissionLevel('Graphic') >= 5
	        },
	        canUse: engineFeatureModGraphic.require3D,
	        genreAdjustments: {
	        	Action: 1,
	        	Strategy: -1
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    /* === Tier 6 === */ 

	    Research.graphicItems.push({
	        id: "Background Dialogue",
	        name: "Background Dialogue".localize(),
	        v: 6,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 6
	        },
	        genreAdjustments: {
	        	Action: 0.5,
	        	Strategy: 0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    Research.graphicItems.push({
	        id: "Hub and Spokes Dialogue",
	        name: "Hub and Spokes Dialogue".localize(),
	        v: 6,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 6
	        },
	        group: "dialogue-type",
	        genreAdjustments: {
	        	Action: -1,
	        	Adventure: 0.5,
	        	RPG: 1,
	        	Strategy: -0.5
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    /* === Tier 7 === */ 

	    Research.graphicItems.push({
	        id: "Celebrity Voice Acting",
	        name: "Celebrity Voice Acting".localize(),
	        v: 8,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 7
	        },
	        group: "voice-acting",
	        genreAdjustments: {
	        	Action: 0.5,
	        	Simulation: -0.5,
	        	Strategy: -1,
	        	Casual: 1
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	    /* === Tier 8 === */ 

	    Research.graphicItems.push({
	        id: "Greenscreen Animations",
	        name: "Greenscreen Animations".localize(),
	        v: 10,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 8 && LevelCalculator.getMissionLevel('Graphic') >= 7
	        },
			canUse: engineFeatureModGraphic.require3D,
	        genreAdjustments: {
	        	Action: 0.5,
	        	Strategy: -0.5,
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });


	    /* === Tier 9 === */ 

	    Research.graphicItems.push({
	        id: "Procedural Animations",
	        name: "Procedural Animations".localize(),
	        v: 12,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Dialogs') >= 9 && LevelCalculator.getMissionLevel('Graphic') >= 8
	        },
			canUse: engineFeatureModGraphic.require3D,
	        genreAdjustments: {
	        	Action: 1,
	        	Strategy: -1,
	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        category: "Dialogue",
	        categoryDisplayName: "Dialogue".localize(),
	        experience: 0
	    });

	}
})();