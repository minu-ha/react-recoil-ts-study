// @ts-ignore
const name = 'kim';
const age: number = 50;

let members: string[] = ['kim', 'park'];
let membersObj: { member1: string; member2: string } = { member1: 'kim', member2: 'park' };

let user: number | string = 'kim';
let obj: { a: string | number } = { a: '123' };

let a: any;

const f = (x: number | string) => {
  let array: number[] = [];
  if (typeof x === 'number') {
    array[0] = x;
  }
};

f(2);

//type alias
type AnimalType = string | number | undefined;
let animal: AnimalType = 'kim';

type BornType = {
  name: string;
};
const born: BornType = { name: 'kim' };

type Name = string;
type Age = number;

type person = Name | Age;
const human: person = 'kim';

type Position = { x: number };
type Pos = { y: number };

type NewPos = Position & Pos;

const po: NewPos = { x: 10, y: 20 };

type Basic = (a: string) => number;

let memberInfo = {
  name: 'kim',
  plusOne(a: number | undefined) {
    // @ts-ignore
    return a + 1;
  },
  changeName: () => {
    console.log('gello');
  },
};

class Person {
  name: string;

  constructor(a: string) {
    this.name = a;
  }

  a(a: string) {
    console.log('dfdf' + a);
  }
}

let person1 = new Person('kim');

interface Square {
  color: string;
  width: number;
}

let square: Square = {
  color: 'red',
  width: 100,
};

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let student: Student = {
  name: 'kim',
};

let teacher: Teacher = { name: 'kim', age: 20 };

const Basic = (...a: number[]) => {
  console.log(a);
};
type Fish = { swim: string };
type Bird = { fly: string };

const Basic2 = (animal: Fish | Bird) => {
  if ('swim' in animal) {
    animal.swim;
  }
};
