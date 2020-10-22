const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d");
const width = canvas.width = 320; //We can change the dimetions here
const height = canvas.height = 480; //We can change the dimetions here

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px"; //this shoves it down to the center of the page




class HealthBar{
  constructor(x, y, w, h, maxHealth, color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;

  }

  show(context){
    // context.strokeStyle = "black";
    context.lineWidth= 2;
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }

  updateHealth(val){
    if (val >= 0){//This stops the over flow
    this.health = val;//this is the updated health
    this.w = (this.health/this.maxHealth) * this.maxWidth;}
  }
}
let health = 100;
const healthBarWidth =200;
const healthBarHeight =30;
const x = width /2 - healthBarWidth / 2; //The goal is centering
const y = height /2 - healthBarHeight / 2; //The goal is centering
const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");



const frame = function(){
  context.clearRect(0, 0, width, height);
  healthBar.show(context);
  requestAnimationFrame(frame);
}
frame();


//On click = death
canvas.onclick = function (){
  health -= 10;
  healthBar.updateHealth(health);
};



//We may want to rewrite it later to take in multiple things so we can make a full scene similar to the following 

// //Converted
// class JediSith{
//   constructor(obj){
// this.name = obj.name;
// this.forceAttack = Math.ceil(Math.random() * obj.forceAttack);
//   }
//       //Methods must be added to the class(anything you want to be inherited)
//   fight(foe){
//       console.log(`${this.name}'s attack: ${this.forceAttack} \n Multiplier: ${this.attackMult ? this.attackMult:"none"}\n ${foe.name}'s attack ${foe.forceAttack}!\n ${this.forceAttack >= foe.forceAttack ? this.name + " " + "wins!" : foe.name + " " + "wins!"}`)
//     }
//     speak(){
//       //Adding speak functions don't require anything extra, just add them in
//     }
// }

// let obi = new JediSith({name:'Aszalea Obi Wan', forceAttack: 10});
// let maul = new JediSith({name:'Anthony Maul', forceAttack: 9});
// let rey = new JediSith({name: "David Rey", forceAttack: 3});
// let kylo = new JediSith({name: 'Daisy Kylo', forceAttack: 3});

// obi.fight(maul);
// rey.fight(kylo);
// obi.fight(rey);
// maul.fight(kylo);
