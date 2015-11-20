'use strict';

import ko = require('knockout');
import _ = require('lodash');

import weightUpgrades = require('city/weight-upgrades');
import synchronizedObservable = require('observables/synchronized-observable');

import Buildings = require('city/buildings/buildings');
import City = require('city/city');

import migrateCityData = require('city/serialization/migrate-city-data');

class Score {
  city = new City();
  private cityData = synchronizedObservable("city-data", this.city.toJSON(), "local");

  constructor() {
    this.cityData.subscribe((newCityData) => {
      var dataInCurrentFormat = migrateCityData(newCityData);
      this.city.updateFromJSON(dataInCurrentFormat);
    });
    this.city.onChanged(() => this.cityData(this.city.toJSON()));
  }

  addSuccess(): Buildings.Building {
    var possibleUpgrades = weightUpgrades(this.city.getPossibleUpgrades());
    var randomUpgrade = possibleUpgrades.get();
    this.city.construct(randomUpgrade);
    return randomUpgrade;
  }

  addFailure() {
    var buildingToRemove = _.sample(this.city.getBuildings());
    if (buildingToRemove) this.city.remove(buildingToRemove);
  }
}

export = Score;