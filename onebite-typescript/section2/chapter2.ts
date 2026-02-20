/**
 * 배열
 */
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "Anarose"];

// 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 유니온 타입
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/**
 * 튜플
 */
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["김예지", 1],
  ["이유마", 2],
  ["조은솔", 3],
];
