/**
 * 대수 타입
 * @description
 * - 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * - 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

// ⭕ Dog
let union1: Union1 = {
  name: "",
  color: "",
};

// ⭕ Person
let union2: Union1 = {
  name: "",
  language: "",
};

// ⭕ Dog & Person
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// ⚠️ Dog 도 아니고 Person도 아니기 때문에 오류
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

// ⚠️ 오직 Dog 타입이기 때문에 오류
// let intersection1: Intersection = {
//   name: "",
//   color: "",
// };

// ⚠️ 오직 Person 타입이기 때문에 오류
// let intersection2: Intersection = {
//   name: "",
//   language: "",
// };

// ⭕ Dog & Person
let intersection3: Intersection = {
  name: "",
  color: "",
  language: "",
};
