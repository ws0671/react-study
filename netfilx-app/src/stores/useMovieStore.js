import { create } from "zustand";

const useMovieStore = create((set) => ({
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  setPopularMovies: (popularMovies) => set({ popularMovies }),
  setTopRatedMovies: (topRatedMovies) => set({ topRatedMovies }),
  setUpcomingMovies: (upcomingMovies) => set({ upcomingMovies }),
}));

export default useMovieStore;
