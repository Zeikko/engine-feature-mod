(function () {

	Research.StartEngineParts = [];
    General.getAvailableEngineParts = function (a) {
        return a.canDevelopEngine() ? [].concat(Research.getAllItems().except(Research.StartEngineParts.concat(Research.BasicItems)).filter(function (b) {
            return 0 != Research.getEnginePoints(b) && 0 != Research.getEngineCost(b) && -1 != a.researchCompleted.indexOf(b)
        })) : []
    };

	var ready = function () {
		engineFeatureModGraphic.addFeatures();
		engineFeatureModEngine.addFeatures();
		engineFeatureModArtificialIntelligence.addFeatures();
		engineFeatureModAdjustment.register();
	};

	var error = function() {

	};

	GDT.loadJs([
		'mods/engineFeatureMod/adjustment.js',
		'mods/engineFeatureMod/features/engine.js',
		'mods/engineFeatureMod/features/gameplay.js',
		'mods/engineFeatureMod/features/story.js',
		'mods/engineFeatureMod/features/dialoques.js',
		'mods/engineFeatureMod/features/level-design.js',
		'mods/engineFeatureMod/features/artificial-intelligence.js',
		'mods/engineFeatureMod/features/graphic.js',
		'mods/engineFeatureMod/features/sound.js',
		'mods/engineFeatureMod/features/world-design.js',
	], ready, error);





})();