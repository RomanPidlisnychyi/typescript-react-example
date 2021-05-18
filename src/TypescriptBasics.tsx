export const bob = "hey I'm bob";
console.log(`bob`, bob);

const a: number = 5.321;
// const obj: { x: number; y: number } = {
//   x: 5.32,
//   y: 7,
// };

interface MyObj {
  x: number;
  y: number;
  z?: number;
}

const obj: MyObj = {
  x: 5.32,
  y: 7,
};

const obj2: MyObj = {
  x: 12,
  y: 54,
};

let isDog = true;

obj.z = 123;

// functions

type AddFunc = (x: number, y: number) => number;

const add: AddFunc = (x: number, y: number) => x + y;

// const add2 = (nums: { a: number; b: number }) => nums.a + nums.b;

const add2 = ({ a, b }: { a: number; b: number }) => a + b;

// unions

let maybeNum: number | string | boolean | AddFunc = 5;
maybeNum = 'Hello!';
maybeNum = add;

interface Dog {
  bark: string;
}

interface Cat {
  purr: string;
}

type DogCat = (Dog & Cat) | number | string;

let dogCat: DogCat = {
  bark: 'bark!',
  purr: 'purr!',
};

dogCat = 5;

if (typeof dogCat === 'string') {
  console.log('you are string');
}

// casting

add(dogCat as number, dogCat as any);

// any

const doesAnything = (x: any) => {
  console.log(x);
};

doesAnything(false);

doesAnything(() => 5);
