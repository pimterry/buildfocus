import Direction = require('city/direction');
import BuildingType = require('city/buildings/building-type');

import PositionedImageConfig = require("positioned-image-config");

export = <{ [buildingType: string]: { [direction: string]: PositionedImageConfig } }> {
  [BuildingType.BasicHouse]: {
    [Direction.North]: {
      xOffset: 190,
      yOffset: 20,
      imagePath: "/images/city/basic-house/north.png"
    },
    [Direction.South]: {
      xOffset: 136,
      yOffset: 6,
      imagePath: "/images/city/basic-house/south.png",
    },
    [Direction.East]: {
      xOffset: 157,
      yOffset: 11,
      imagePath: "/images/city/basic-house/east.png",
    },
    [Direction.West]: {
      xOffset: 120,
      yOffset: 9,
      imagePath: "/images/city/basic-house/west.png"
    }
  },

  [BuildingType.NiceHouse]: {
    [Direction.North]: {
      xOffset: -2,
      yOffset: -60,
      imagePath: "/images/city/nice-house/north.png",
    },
    [Direction.South]: {
      xOffset: -2,
      yOffset: -92,
      imagePath: "/images/city/nice-house/south.png",
    },
    [Direction.East]: {
      xOffset: -2,
      yOffset: -94,
      imagePath: "/images/city/nice-house/east.png",
    },
    [Direction.West]: {
      xOffset: -2,
      yOffset: -68,
      imagePath: "/images/city/nice-house/west.png",
    }
  },

  [BuildingType.FancyHouse]: {
    [Direction.North]: {
      xOffset: -280,
      yOffset: -224,
      imagePath: "images/city/fancy-house/south.png",
    },
    [Direction.South]: {
      xOffset: -280,
      yOffset: -224,
      imagePath: "images/city/fancy-house/south.png",
    },
    [Direction.East]: {
      xOffset: 4,
      yOffset: -201,
      imagePath: "images/city/fancy-house/east.png",
    },
    [Direction.West]: {
      xOffset: 4,
      yOffset: -201,
      imagePath: "images/city/fancy-house/east.png",
    }
  }
};