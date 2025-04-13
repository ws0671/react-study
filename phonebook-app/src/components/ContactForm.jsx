import { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();
  const handlePhoneNumber = (e) => {
    e.preventDefault();
    if (!name.trim() || !phoneNumber.trim()) return;
    // 연락처를 추가
    addContact(name, phoneNumber);
  };
  return (
    <div className="flex-1 border-1 rounded-lg p-3 flex flex-col">
      <div className="text-center p-4 font-bold text-2xl">Phone Book</div>
      <form
        onSubmit={handlePhoneNumber}
        className="flex flex-col p-4 gap-2 flex-grow justify-center"
      >
        <input
          className="border-1 rounded-2xl p-1 px-2"
          type="text"
          id="name"
          role="name"
          placeholder="이름을 입력하세요"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-1 rounded-2xl p-1 px-2"
          type="tel"
          id="phone_number"
          role="phone_number"
          placeholder="전화번호를 입력하세요"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="bg-amber-500 text-white rounded-3xl p-2">
          제출
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
