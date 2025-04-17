import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const [books, setBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = "https://openlibrary.org/subjects/love.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setBooks(json.works);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getSearchData(title) {
    const url = `https://openlibrary.org/search.json?${title}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setBooks(json.works);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleWord = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setSearchWord(title);
  };
  const handleSearch = () => {
    e.preventDefault();
    getSearchData(searchWord);
  };
  return (
    <div>
      <div role="nav" className="py-6 px-15 flex justify-between">
        <div className="text-lg font-bold">코딩알려주는 누나 도서관</div>
        <ul className="flex gap-10">
          <li>메인</li>
          <li>나의 책</li>
          <li>로그인</li>
        </ul>
      </div>
      <div
        role="search"
        className="flex bg-gray-600 py-15 px-20 justify-between"
      >
        <div className="text-3xl text-amber-100">코딩알려주는 누나 도서관</div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="rounded-lg w-[500px] p-4 bg-white text-black"
            placeholder="책 제목이나 작가를 검색하세요"
            onKeyDown={(e) => handleWord(e)}
          />
          <button className="bg-amber-100 rounded-lg p-4">검색</button>
        </form>
      </div>
      <main className="p-14">
        <div role="title" className="text-4xl pb-6">
          인기 도서
        </div>
        <div role="main_content " className="grid grid-cols-6 gap-10">
          {books.map((book) => {
            return (
              <div key={book.key} className="flex flex-col shadow rounded-lg">
                <div className="">
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book?.cover_id}.jpg`}
                    alt=""
                  />
                </div>
                <div className="">
                  <div>{book.title}</div>
                  <div>{book.authors[0].name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
