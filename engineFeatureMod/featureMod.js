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
	};

	var error = function() {

	};

	GDT.loadJs([
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



	var originalDesignPoints, originalTechnologyPoints;

	GDT.on(GDT.eventKeys.gameplay.beforeGameReview, function(ev) {
		originalDesignPoints = ev.game.designPoints;
		originalTechnologyPoints = ev.game.technologyPoints;

		console.log(ev);

		$.each(ev.game.features, function(index, feature) {
			console.log(feature);
			console.log('Feature Name: ' + feature.id);
			var featureAdjustment = 0;
			featureAdjustment += getFeatureGenreAdjustment(feature, ev.game.genre.id);
			if(ev.game.secondGenre) {
				featureAdjustment *= 0.5;
				featureAdjustment += 0.5 * getFeatureGenreAdjustment(feature, ev.game.secondGenre.id);
			}
			//featureAdjustment += getFeatureAudienceAdjustment();
			//featureAdjustment += getFeaturePlatformAdjustment();
			featureAdjustment = featureAdjustment * feature.v;
			console.log('Feature Design Adjustment: ' + General.getMission(feature.category).designFactor * featureAdjustment * getGameSizeFactor(ev.game.gameSize));
			console.log('Feature Technology Adjustment: ' + General.getMission(feature.category).technologyFactor * featureAdjustment * getGameSizeFactor(ev.game.gameSize));
			ev.game.designPoints = ev.game.designPoints + General.getMission(feature.category).designFactor * featureAdjustment * getGameSizeFactor(ev.game.gameSize);
			ev.game.technologyPoints = ev.game.technologyPoints + General.getMission(feature.category).technologyFactor * featureAdjustment * getGameSizeFactor(ev.game.gameSize);
		});
		console.log('Total Design Adjustment: ' + (ev.game.designPoints - originalDesignPoints));
		console.log('Total Technology Adjustment: ' + (ev.game.technologyPoints - originalTechnologyPoints));
		console.log('Game Design Points: ' + ev.game.designPoints);
		console.log('Game Technology Points: ' + ev.game.technologyPoints);
		ev.game.flags.techLevel = 0;
	});

	GDT.on(GDT.eventKeys.gameplay.afterGameReview, function(ev) {
		ev.game.designPoints = originalDesignPoints;
		ev.game.technologyPoints = originalTechnologyPoints;
		console.log(ev);
	});

	GDT.on(GDT.eventKeys.gameplay.afterReleaseGame, function(ev) {
		console.log(ev);
	});

	var getGameSizeFactor = function(size) {
		if(size === 'small') {
			return 2;
		}
		if(size == 'medium') {
			return 3;
		}
	}

	var getFeatureGenreAdjustment = function(feature, genre) {
		if(typeof feature.genreAdjustments !== 'undefined') {
			if(typeof feature.genreAdjustments[genre] !== 'undefined') {
				return feature.genreAdjustments[genre];
			}
		}
		return 0;
	}

})();