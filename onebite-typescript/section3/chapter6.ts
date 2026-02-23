/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김예지";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입
// let num3 = 10 as string; ⚠️ 오류 발생
let num3 = 10 as unknown as string; // 다중 단언 ( 비권장 )

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = '야옹'; ⚠️ 오류 발생

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김예지",
};

const len: number = post.author!.length;
