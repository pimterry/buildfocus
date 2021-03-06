import Buildings = require('city/buildings/buildings');
import serialization = require('city/serialization/serialization-format');

import Direction = require('city/direction');
import Map = require('city/map');
import BuildingType = require('city/buildings/building-type');
import Coord = require('city/coord');
import NiceHouse = require('city/buildings/nice-house');

class FancyHouse extends Buildings.AbstractBuilding implements Buildings.Building {

  constructor(private coord1: Coord, private coord2: Coord, direction: Direction) {
    super(BuildingType.FancyHouse, [coord1, coord2], direction);
  }

  canBeBuiltOn(lookup: Buildings.BuildingLookup) {
    var twoNeighbouringCells = this.coord1.isDirectNeighbour(this.coord2);
    var existingBuildingsAreNiceHouses = _.all(this.coords, (coord) => {
      var existingBuilding = lookup.getBuildingAt(coord);
      return existingBuilding && existingBuilding.buildingType === BuildingType.NiceHouse;
    });
    return twoNeighbouringCells && existingBuildingsAreNiceHouses;
  }

  getPotentialUpgrades(): Buildings.Building[] {
    return [];
  }

  static deserialize(coords: Coord[], direction: Direction): Buildings.Building {
    if (coords.length !== 2) {
      throw new Error("Attempting to build FancyHouse with invalid coords: " + JSON.stringify(coords));
    }

    return new FancyHouse(coords[0], coords[1], direction);
  }
}

Buildings.registerBuildingType(BuildingType.FancyHouse, FancyHouse);

export = FancyHouse;