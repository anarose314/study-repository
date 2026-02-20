// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  Korean = "ko",
  English = "en",
}

const user1 = {
  name: "김예지",
  role: Role.ADMIN, // 0 = 관리자
  language: Language.Korean,
};

const user2 = {
  name: "이유마",
  role: Role.USER, // 1 = 일반 유저
};

const user3 = {
  name: "조은솔",
  role: Role.GUEST, // 2 = 게스트
};

console.log(user1, user2, user3);
