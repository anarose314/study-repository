/**
 * @name Unknown 타입
 * @description
 * - 모든 타입의 슈퍼 타입이기 때문에, 모든 값을 넣을 수 있음
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar   ❌
  // let str: string = unknownVar   ❌
  // let bool: boolean = unknownVar ❌
}

/**
 * @name Never 타입
 * @description
 * - 모든 타입의 서브 타입 ( = 공집합, 아무것도 없는 타입 )
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let string: string = neverFunc();
  let boolean: boolean = neverFunc();

  // let never1: never = 10;         ❌
  // let never2: never = 'string';   ❌
  // let never3: never = true;       ❌
}

/**
 * @name void 타입
 * @description
 * - undefined의 슈퍼 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/**
 * @name any 타입
 * @description
 * - 치트키 타입, 타입 계층도를 무시
 * - 모든 타입의 슈퍼 타입이기도 하며, 서브 타입이기도 함
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = anyVar;   ❌
}
