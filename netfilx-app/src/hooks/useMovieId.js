import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUseMovieId = (movieId) => {
  return api.get(`/movie/${movieId}/videos
`);
};

export const useMovieId = (movieId) => {
  return useQuery({
    queryKey: ["movie-id", movieId],
    queryFn: () => fetchUseMovieId(movieId),
    // select: (result) => result.data,
  });
};
