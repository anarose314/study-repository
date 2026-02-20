// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  bio: string;
  location: string;
};

function func() {
  type User = {}; // 중복 이름의 타입 별칭 사용 가능
}

let user: User = {
  id: 1,
  name: "김예지",
  nickname: "Anarose",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "이유마",
  nickname: "Yuma",
  bio: "반가워요",
  location: "양주시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};
