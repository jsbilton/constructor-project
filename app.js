var opts = {
    name: "name",
    health: 2000
  }

  function Hero(options) {
    var options = options || {};
    this.name = options.name || "";
    this.health = options.health || 1000;
    this.weapon = new Weapon({name: "bitch-slap", damage: 90});
    this.equip = function (weapon) {
      this.weapon = weapon;
    };
    this.attack = function (enemy) {
      var randomInt = Math.floor(Math.random() * 10);
      if(randomInt < 4) {
        enemy.health = enemy.health - this.weapon.damage;
        console.log("Direct hit " + enemy.name + ", your life is now at " + enemy.health);
        if(enemy.health <= 0) {
          enemy.health = 0;
          console.log("That was an epic blow, you are now dead " + enemy.name);
        }

    } else {
      console.log("Fly like the wind, you've been lucky " + enemy.name);
    }
    };

  function CobraKai() {

    }



  }

  function Weapon(options) {
    this.name = options.name || "bitch-slap";
    this.damage = options.damage;

  }



//      Hero         //

var daniel = new Hero({health: 2000, name: "Daniel-Son"});
var mrMiyagi = new Hero({health: 3000 , name: "Mr. Miyagi"});


//      Weapon        //

var waxOnWaxOff = new Weapon({damage: 130, name: "wax-on wax-off"});
var paintTheFence = new Weapon({damage: 135, name: "paint the fence"});
var paintTheHouse = new Weapon({damage: 145, name: "paint the house"});
var crane = new Weapon({damage: 250, name: "crane technique"});
var facePunch = new Weapon({damage: 150, name: "face punch"});
var gutPunch = new Weapon({damage: 140, name: "gut punch"});
var faceKick = new Weapon({damage: 150, name: "face kick"});
var gutKick = new Weapon({damage: 145, name: "gut kick"});
var roundhouse = new Weapon({damage: 200, name: "roundhouse"});
var sweep = new Weapon({damage: 175, name: "sweep the leg"});


//     CobraKai      //

var johnny = new CobraKai({health: 2000, name: "Johnny"});
var kresse = new CobraKai({health: 2800, name: "John Kresse"});
var dutch = new CobraKai({health: 1750, name: "Dutch"});
var tommy = new CobraKai({health: 1500, name: "Tommy"});
var bobby = new CobraKai({health: 1300, name: "Bobby"});
var mike = new CobraKai({health: 1900, name: "Mike"});
var terry = new CobraKai({health: 3000, name: "Terry"});
var jerry = new CobraKai({health: 1200, name: "Jerry"});


//       Equip      //

daniel.equip(crane);
mrMiyagi.equip(roundhouse);
johnny.equip(sweep);
kresse.equip(facePunch);
dutch.equip(faceKick);
tommy.equip(waxOff);
bobby.equip(paintTheFence);
mike.equip(gutPunch);
terry.equip(waxOnWaxOff);
jerry.equip(paintTheHouse);
