export class Plant {
  constructor(id){
    this.id = id;
    this.size = 0;
    this.water = 1;
    this.nutes = 0;
  }

  grow(){
    this.size++;
    this.water -= 1;
    this.nutes -= 1;
  }
}

export class Environment{
  constructor(size){
    this.size = size;
  }

  buildGrid(size){
  const gridInput = [];
    for (let i = 0; i<size; i++){
      let plant = new Plant(i)
      gridInput.push(plant);
      console.log(gridInput)
    }
    return gridInput;
  }

  lightsOn(){

  }

  lightsOff(){

  }
}
