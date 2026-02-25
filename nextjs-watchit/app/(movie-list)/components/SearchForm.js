export default function SearchForm() {
  return (
    <form action="/search">
      <input
        name="q"
        type="text"
        placeholder="영화를 검색해보세요."
        className="border-0 rounded-full bg-[#505050] py-3 px-7.5 text-[#f9f9f9] text-[18px] w-100 outline-0 placeholder:text-[#b5b5b5]"
      />
      <button
        type="submit"
        className="cursor-pointer ml-3.75 border-0 rounded-full bg-[#ff4869] py-2.75 px-8 text-[#ffffff] text-[18px]"
      >
        검색
      </button>
    </form>
  );
}
