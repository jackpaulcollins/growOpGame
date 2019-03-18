export class Plant {
  constructor(id){
    this.id = id;
    this.size = 1;
    this.water = 1;
    this.nutes = 0;
  }

  water(){
    this.water++;
  }

  grow(){
    if(this.water>this.size){
      this.water-=this.size;
      this.size++;
    }
  }
}

export class Environment{
  constructor(size){
    this.numOfPlants = 0;
    this.plantArray=[];
    this.waterTank=500;
  }

  addPlants(size){
  const plantPurchase = [];
    for (let i = 0; i<size; i++){
      let plant = new Plant(this.numOfPlants);
      this.plantArray.push(plant);
      plantPurchase.push(plant);
      this.numOfPlants++;
    }
    return plantPurchase;

  }

  lightsOn(){

  }

  lightsOff(){

  }
}
