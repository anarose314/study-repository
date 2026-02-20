// ------------------------------------------------ any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;

// 모든 값 할당 가능
anyVar = "";
anyVar = 1;
anyVar = () => {};

// 모든 메소드 사용 가능
anyVar.toUpperCase();
anyVar.toFixed();

// 모든 타입의 변수에 할당 가능
let num: number = 10;
num = anyVar;

// ------------------------------------------------ unknown
let unknownVar: unknown;

// 모든 값 할당 가능
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// ❌ 모든 메소드 사용 불가
// unknownVar.toUpperCase();
// unknownVar.toFixed();

// ❌ 모든 타입의 변수에 unknown 값을 넣을 수는 없음
// num = unknownVar;

// ❌ 사칙 연산 불가

// 타입 정제를 해야만 사용 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
