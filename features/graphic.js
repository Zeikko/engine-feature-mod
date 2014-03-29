var FeatureModGraphic = {};
(function () {

	FeatureModGraphic.addFeatures = function() {

		console.log(Research.StartEngineParts);
		//Research.engineItems = [Research.saveGame];
		Research.graphicItems = [];
		console.log(GameManager);

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

	    Research.graphicItems.push({
	        id: "ASCII Graphics",
	        name: "ASCII Graphics".localize(),
	        v: 2,
	        techLevel: 1,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 2 && LevelCalculator.getFeatureLevel(Research.graphicItems[0], "Text Based") >= 2
	        },
	        group: "graphic-type",
	        genreAdjustments: {
	        	Action: -0.5,
	        	Adventure: 0.5,
	        	RPG: 1,
	        	Casual: -1
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
	    Research.graphicItems.push({
	        id: "Vector Wireframes",
	        name: "Vector Wireframes".localize(),
	        v: 2,
	        techLevel: 1,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 2
	        },
	        group: "graphic-type",
	        genreAdjustments: {
	        	Action: 1,
	        	RPG: -1,
	        	Simulation: 0.5,
	        	Strategy: -0.5
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

	    /* === Tier 3 === */ 




	    /* === Tier 4 === */ 

	    Research.graphicItems.push({
	        id: "Pseudo 3D Rendering",
	        name: "Pseudo 3D Rendering".localize(),
	        v: 6,
	        techLevel: 3,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 4
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

	    /* === Tier 5 === */ 

	    Research.graphicItems.push({
	        id: "High Resolution Sprites",
	        name: "High Resolution Sprites".localize(),
	        v: 6,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 5
	        },
	        canUse: function (a) {
	            if (!a || !a.features) return !1;
	            var b = "Pseudo 3D Rendering:2D Graphics".split(";");
	            return a.features.some(function (a) {
	                return -1 != b.indexOf(a.id)
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


	    /* === Tier 6 === */ 
	    var tier = 6;

	    Research.graphicItems.push({
	        id: "Rasterisation 3D",
	        name: "Rasterisation 3D".localize(),
	        v: 10,
	        techLevel: 5,
	        canResearch: function (company) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 6
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

	    /* === Tier 7 === */ 
	    var tier = 7;

	    Research.graphicItems.push({
	        id: "32-Bit Colors",
	        name: "32-Bit Colors".localize(),
	        v: 8,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 7
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

	    Research.graphicItems.push({
	        id: "Shaders",
	        name: "Shaders".localize(),
	        v: 8,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 6 && LevelCalculator.getMissionLevel('Engine') >= 6
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
	        group: 'shader',
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });

	    Research.graphicItems.push({
	        id: "Precomputed Lightmaps",
	        name: "Precomputed Lightmaps".localize(),
	        v: 4,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 7 && LevelCalculator.getMissionLevel('Engine') >= 7
	        },
	        canUse: requireGPUAnd3D,
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'lights',
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });

	    /* === Tier 8 === */ 
	    var tier = 8;

	    Research.graphicItems.push({
	        id: "Advanced Shaders",
	        name: "Advanced Shaders".localize(),
	        v: 10,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 7 && LevelCalculator.getMissionLevel('Engine') >= 7
	        },
	        canUse: requireGPUAnd3D,
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'shader',
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });

	    Research.graphicItems.push({
	        id: "Anti-Aliasing",
	        name: "Anti-Aliasing".localize(),
	        v: 10,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 7 && LevelCalculator.getMissionLevel('Engine') >= 7
	        },
	        canUse: requireGPUAnd3D,
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'shader',
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });

	    Research.graphicItems.push({
	        id: "Dynamic Lighting",
	        name: "Dynamic Lighting".localize(),
	        v: 6,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 8 && LevelCalculator.getMissionLevel('Engine') >= 8
	        },
	        canUse: requireGPUAnd3D,
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'lights',
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });

	    /* === Tier 9 === */ 
	    var tier = 9;

	    Research.graphicItems.push({
	        id: "Raytracing 3D",
	        name: "Raytracing 3D".localize(),
	        v: 14,
	        techLevel: 8,
	        canResearch: function (company) {
	            return !1
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

	    Research.graphicItems.push({
	        id: "Volumetric Lighting",
	        name: "Volumetric Lighting".localize(),
	        v: 8,
	        canResearch: function (a) {
	            return LevelCalculator.getMissionLevel('Graphic') >= 9 && LevelCalculator.getMissionLevel('Engine') >= 9
	        },
	        canUse: requireGPUAnd3D,
	        genreAdjustments: {

	        },
	        audienceAdjustments: {

	        },
	        platformAdjustments: {

	        },
	        group: 'lights',
	        category: "Graphic",
	        categoryDisplayName: "Graphic".localize(),
	        consolePart: !0
	    });


	    var requireGPUAnd3D = function (game) {
	            if (!game || !game.features) return !1;
	            var requirement = "Rasterisation 3D;Raytracing 3D".split(";");
	            var GPUSupport = "GPU Support";
	            var req1 = game.features.some(function (game) {
	                return -1 != requirement.indexOf(game.id)
	            })
	            var req2 = game.features.some(function (game) {
	                return -1 != GPUSupport.indexOf(game.id)
	            })
	            return req1 && req2;
	        };
	}
})();