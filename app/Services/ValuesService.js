import { ProxyState } from "../AppState.js";
import { Arcticfox } from "../Models/arcticfox.js";
import { Bengaltiger } from "../Models/bengaltiger.js";
import { Cheetah } from "../Models/cheetah.js";
import { Dolphin } from "../Models/dolphin.js";
import { Emu } from "../Models/emu.js";
import { Ferret } from "../Models/ferret.js";
import { Goose } from "../Models/goose.js";
import { Highlandcow } from "../Models/highlandcow.js";
import { Iguana } from "../Models/iguana.js";
import { Jellyfish } from "../Models/jellyfish.js";
import { Koala } from "../Models/koala.js";
import { Liger } from "../Models/liger.js";
import { Muskox } from "../Models/muskox.js";
import { Newt } from "../Models/newt.js";
import { Ostrich } from "../Models/ostrich.js";
import { Penguin } from "../Models/penguin.js";
import { Quokka } from "../Models/quokka.js";
import { Skunk } from "../Models/skunk.js";
import { Turkey } from "../Models/turkey.js";
import { Umbrellabird } from "../Models/umbrellabird.js";
import { Value } from "../Models/Value.js";
import { Vulture } from "../Models/vulture.js";
import { Wallaby } from "../Models/wallaby.js";
import { Xerus } from "../Models/xerus.js";
import { Yak } from "../Models/yak.js";
import { Zorse } from "../Models/zorse.js";



let animal1 = new Arcticfox("Angelo", "Red", "M", 23)
let animal2 = new Bengaltiger("Barry", "Orange & Black", "M", 47)
let animal3 = new Cheetah("Chester", "tan", "M", 38)
let animal4 = new Dolphin("Dorothy", "Gray", "F", 48)
let animal5 = new Emu("Ezra", "brown & gray", "M", 2)
let animal6 = new Emu("Eleanor", "black", "F", 4)
let animal7 = new Ferret("Fez", "Black & Gray", "M", 32)
let animal8 = new Goose("Geraldine", "White", "F", 0)
let animal9 = new Highlandcow("Hagrid", "Red", "M", 25)
let animal10 = new Iguana("Irene", "Green", "F", 15)
let animal11 = new Jellyfish("Jasper", "Pink", "M", 0)
let animal12 = new Koala("Karen", "Gray", "F", 12)
let animal13 = new Liger("Lawrence", "Tan", "M", 47)
let animal14 = new Muskox("Margaret", "Brown", "M", 27)
let animal15 = new Newt("Norman", "Green", "M", 0)
let animal16 = new Ostrich("Oliver", "Brown", "M", 2)
let animal17 = new Penguin("Pengu", "Black & White", "M", 0)
let animal18 = new Quokka("Quilber", "brown", "M", 14)
let animal19 = new Skunk("Sheridan", "Black & White", "M", 10)
animal20 = new Turkey("Titus", "Brown", "M", 0)
animal21 = new Umbrellabird("Ursula", "black", "F", 0)
let animal22 = new Vulture("Viola", "Black", "F", 12)
let animal23 = new Wallaby("Wronny", "Brown", "M", 25)
let animal24 = new Xerus("Xavier", "brown", "M", 20)
let animal25 = new Yak("Yodenheim", "Brown", "M", 42)
let animal26 = new Zorse("Zeus", "Black and Brown", "M", 35)

let animals = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, animal17, animal18, animal19, animal20, animal21, animal22, animal23, animal24, animal25, animal26]




class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }

  listAnimals() {
    animals.forEach(a => a.sayName())
  }

}

export const valuesService = new ValuesService();

