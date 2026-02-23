/**
 * 기본 타입간의 호환성
 */

let num1: number = 10; // number 타입
let num2: 10 = 10; // number 리터럴 타입

num1 = num2; // number 리터럴 타입 -> number 타입 업 캐스팅

/**
 * 객체 타입간의 호환성
 * @description 어떤 객체 타입을 다른  객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

type Book = {
  // 슈퍼 타입
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브 타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO

/**
 * 초과 프로퍼티 검사
 * @description 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사
 */

// ( 변수 ) 초과 프로퍼티 검사 발동 ⭕
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

// ( 변수 ) 초과 프로퍼티 검사 발동 ❌
let book3: Book = programmingBook;

// ( 함수 ) 초과 프로퍼티 검사 발동 ⭕
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});

// ( 함수 ) 초과 프로퍼티 검사 발동 ❌
func(programmingBook);
