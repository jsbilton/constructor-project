var opts = {
    name: "name",
    health: 2000
  }

  function Character(options) {
    var options = options || {};
    this.name = options.name || "YMCA";
    this.health = options.health || 1000;
    this.Karate = new Karate({name: "bitch-slap", damage: 90});
    this.equip = function (Karate) {
      this.Karate = Karate;
    }
    };
    this.attack = function (enemy) {
      var randomInt = Math.floor(Math.random() * 10);
      if(randomInt < 4) {
        enemy.health = enemy.health - this.Karate.damage;
        console.log("Direct hit " + enemy.name + ", your energy level is now at " + enemy.health);
        if(enemy.health <= 0) {
          enemy.health = 0;
          console.log("Looks like the new kid in town gotta piece of you huh " + enemy.name);
        }

    } else {
      console.log("I just wanna go home " + enemy.name + "I want my bike and I just wanna go home!");
    }
    };

  function CobraKai() {
    var options = options || {};
    this.name = options.name || "YMCA";
    this.health = options.health || 1000;
    this.Karate = new Karate({name: "bitch-slap", damage: 90});
    this.equip = function (Karate) {
      this.Karate = Karate;
    }
    };
    this.attack = function (enemy) {
      var randomInt = Math.floor(Math.random() * 10);
      if(randomInt < 4) {
        enemy.health = enemy.health - this.Karate.damage;
        console.log("Direct hit " + enemy.name + ", your energy level is now at " + enemy.health);
        if(enemy.health <= 0) {
          enemy.health = 1;
          console.log("Your karate is a joke! I own you! You are now deceased " + enemy.name);
        }

    } else {
      console.log("You're alright man, great match " + enemy.name);
    }
    };

  function Karate(options) {
    this.name = options.name || "bitch-slap";
    this.damage = options.damage;
  }



//      Character         //

var daniel = new Character({health: 2000, name: "Daniel-Son"});
var mrMiyagi = new Character({health: 3000 , name: "Mr. Miyagi"});


//      Karate        //

var waxOnWaxOff = new Karate({damage: 130, name: "wax-on wax-off"});
var paintTheFence = new Karate({damage: 135, name: "paint the fence"});
var paintTheHouse = new Karate({damage: 145, name: "paint the house"});
var crane = new Karate({damage: 250, name: "crane technique"});
var facePunch = new Karate({damage: 150, name: "face punch"});
var gutPunch = new Karate({damage: 140, name: "gut punch"});
var faceKick = new Karate({damage: 150, name: "face kick"});
var gutKick = new Karate({damage: 145, name: "gut kick"});
var roundhouse = new Karate({damage: 200, name: "roundhouse"});
var sweep = new Karate({damage: 175, name: "sweep the leg"});


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
tommy.equip(waxOnWaxOff);
bobby.equip(paintTheFence);
mike.equip(gutPunch);
terry.equip(gutKick);
jerry.equip(paintTheHouse);
