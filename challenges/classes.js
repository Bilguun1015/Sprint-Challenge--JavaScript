// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(attributesCub){
//     this.length = attributesCub.length;
//     this.width = attributesCub.width;
//     this.height = attributesCub.height;
//   }
//   CuboidMaker.prototype.volume = function(){
//     let volumeOfCub = this.length * this.width * this.height;
//     return volumeOfCub;
//   }

//   CuboidMaker.prototype.surfaceArea = function(){
//     let areaOfCub =  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//     return areaOfCub;
//   }


  class CuboidMakerClass{
      constructor(attributesCuboid){
        this.length = attributesCuboid.length;
        this.width = attributesCuboid.width;
        this.height = attributesCuboid.height;
      }
      volume(){
        let volumeOfCuboid = this.length * this.width * this.height;
        return volumeOfCuboid;
      }
      surfaceArea(){
        let areaOfCuboid =  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return areaOfCuboid;
      }
  }

  class CubeMaker extends CuboidMakerClass{
      constructor(attributesCube){
          super(attributesCube);
      }
      areaOfCube(){
          let areaOfCube = this.width * this.width;
          return areaOfCube;
      }
  }

  const cuboid1 = new CuboidMakerClass({
    length: 4, 
    width: 5, 
    height: 5
  })

  const cube1 = new CubeMaker ({
      length : 4,
      width: 4,
      height: 4
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`cuboidclass volume: ${cuboid1.volume()}`); // 100
console.log(`cuboidclass area: ${cuboid1.surfaceArea()}`); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(`cube volume : ${cube1.volume()}`);
console.log(`cube area: ${cube1.areaOfCube()}`);