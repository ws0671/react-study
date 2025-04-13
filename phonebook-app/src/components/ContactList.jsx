import { useEffect, useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import useSearchStore from "../stores/useSearchStore";

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const { searchResult, updateSearchResult } = useSearchStore();
  const listToShow = searchResult === null ? phoneBook : searchResult;
  return (
    <div className="border-1 rounded-lg p-3 flex-1">
      <div>
        {listToShow.map((item) => (
          <div key={item.id} className="flex justify-around">
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContactList;
