// задание 1 и 2
class weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
takeDamage(damage) {
    durability -= damage;
    if (durability < 0 ) {durability = 0};
}
getDamage() {
    if (durability >= startDurability * 0.3 || durability == 1/0) {
      return attack;
     } else if (durability == 0) {
      return 0;
     } else {  
      return (attack/2);
    }
  }
  isBroken() {
    if (durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}
class Sword extends Weapon {
    constructor (weapon){
      super({
        name: 'Меч',
        attack: 25,
        durability: 500,
        range: 1,  
      });
    }
  }
  const newSword = new Sword();
console.log(`sword ${newSword.attack}`);
class Bow extends Weapon {
    constructor (weapon){
      super({
        name: 'Лук',
        attack: 10,
        durability: 300,
        range: 3,
      });
    }
  }
  
  class Staff extends Weapon {
    constructor (weapon){
      super({
        name: 'Посох',
        attack: 8,
        durability: 300,
        range: 2,
      });
    }
  }
  
  class Knife extends Weapon {
    constructor (weapon){
       super({
        name: 'Нож',
        attack: 5,
        durability: 300,
        range: 1,
      });
    }  
  }
  
  class Arm extends Weapon {
    constructor (weapon){
      super({
        name: 'Рука',
        attack: 1,
        durability: 1/0,
        range: 1,
      });
    }
  }
  
  class LongBow extends Bow {
    constructor (){
      super();
      name = 'Длнный лук';
      attack = 15;
      range = 4;
    }
  }
  class Axe extends Sword {
    constructor (){
      super();
      name = 'Секира';
      attack = 27;
      durability = 800;
    }
  }
  class StormStaff extends Staff {
    constructor (){
      super();
      name = 'Посох бури';
      attack = 10;
      range = 3;
    }
  }
  const sword1 = new Sword({
    name:'Меч',
    attack: 25,
    durability: 500,
  });
  const sword = new Sword();
  const poleaxe = new Sword({
    name:'Секира',
    attack: 27,
    durability: 800,
  });
  
  const arm = new Arm();
  
  const bow = new Bow();
  
  const longBow = new LongBow();
  alert(longBow);
  
  const knife = new Knife();
  const staff = new Staff();
  
  const stormStaff =  new Staff({
    name:'Посох Бури',
    attack: 10,
    range:3,
  });

  
  a = longBow;
  a.takeDamage(8);
  console.log(`range = ${a.range}`);
  console.log(`прочность после удара ${a.durability}`);
  console.log(`урон после удара ${a.getDamage()}`);
  console.log(`Сломан ${a.isBroken()}`);
    