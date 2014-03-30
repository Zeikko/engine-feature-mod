var engineFeatureModAdjustment = {};
(function () {
	engineFeatureModAdjustment.register = function() {

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
				featureAdjustment *= feature.v;
				featureAdjustment *= getGameSizeFactor(ev.game.gameSize);
				console.log('Feature Design Adjustment: ' + General.getMission(feature.category).designFactor * featureAdjustment);
				console.log('Feature Technology Adjustment: ' + General.getMission(feature.category).technologyFactor * featureAdjustment);
				ev.game.designPoints = ev.game.designPoints + General.getMission(feature.category).designFactor * featureAdjustment;
				ev.game.technologyPoints = ev.game.technologyPoints + General.getMission(feature.category).technologyFactor * featureAdjustment;
			});
			console.log('Total Design Adjustment: ' + (ev.game.designPoints - originalDesignPoints));
			console.log('Total Technology Adjustment: ' + (ev.game.technologyPoints - originalTechnologyPoints));
			console.log('Game Design Points: ' + ev.game.designPoints);
			console.log('Game Technology Points: ' + ev.game.technologyPoints);
		});

		GDT.on(GDT.eventKeys.gameplay.afterGameReview, function(ev) {
			ev.game.designPoints = originalDesignPoints;
			ev.game.technologyPoints = originalTechnologyPoints;
			console.log(ev);
		});

		var getGameSizeFactor = function(size) {
			if(size === 'small') {
				return 2;
			}
			if(size == 'medium') {
				return 4;
			}
			if (size == 'large') {
				return 6;
			}
			if (size == 'aaa') {
				return 8;
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

	}
})();