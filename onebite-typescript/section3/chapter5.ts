/**
 * 타입 추론
 * @description
 * - 값을 넣어주기만 해도 알아서 타입을 추론을 해줌
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any 타입의 진화
let d;

d = 10;
d.toFixed();
// d.toUpperCase(); ⚠️ 오류

d = "hello";
d.toUpperCase();
// d.toFixed(); ⚠️ 오류

// const 상수 추론
const num = 10;
const str = "hello";

// 최적 공통 타입
let arr = [1, "string"];
