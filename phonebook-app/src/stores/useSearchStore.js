import { create } from "zustand";

const useSearchStore = create((set, get) => ({
  searchResult: null,
  updateSearchResult: (result) => {
    set({ searchResult: result });
  },
}));

export default useSearchStore;
