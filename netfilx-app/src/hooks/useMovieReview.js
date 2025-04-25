import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUseMovieReview = (movieId) => {
  return api.get(`/movie/${movieId}/reviews
`);
};

export const useMovieReview = (movieId) => {
  return useQuery({
    queryKey: ["movie-review", movieId],
    queryFn: () => fetchUseMovieReview(movieId),
    select: (result) => result.data,
  });
};
