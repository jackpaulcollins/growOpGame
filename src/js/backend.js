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
    this.budget=1000;
    this.time = 1000;
  }

  addPlants(size){
  const plantPurchase = [];
    for (let i = 0; i<size; i++){
      let plant = new Plant(this.numOfPlants);
      this.plantArray.push(plant);
      plantPurchase.push(plant);
      this.numOfPlants++;
      this.budget -= 100;
    }
    return plantPurchase;

  }

  addWater(){
    const cost = 500 - this.waterTank
    this.waterTank=500;
    this.budget -= cost/10
  }

  day(){
    this.time -= 10;
  }

  harvest(){
    if (this.time > 0){
      this.plantArray.forEach((plant)=>{
      console.log(plant)
      this.budget+=plant.size*100;
      });
      this.plantArray=[];
    }
  }


}
