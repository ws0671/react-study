import { create } from "zustand";

const usePhoneBookStore = create((set, get) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
  searchContact: (keyword) => {
    const list = get().phoneBook;
    // console.log(list.filter((contact) => contact.name));

    return list.filter((contact) => contact.name.includes(keyword));
  },
}));

export default usePhoneBookStore;
