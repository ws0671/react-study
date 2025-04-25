import React, { useState } from "react";
import { useMovieReview } from "../../../hooks/useMovieReview";

const Review = ({ modalId }) => {
  const { data, isLoading, error, isError } = useMovieReview(modalId);
  console.log("review", data);

  const [openReviewIds, setOpenReviewIds] = useState({});
  const handleOpenReview = (id) => {
    setOpenReviewIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="mt-6">
      <div className="text-2xl font-bold">Reviews</div>
      <div className="">
        {data?.results?.map((review) => {
          const isOpen = openReviewIds[review.id];

          return (
            <div className="mt-6 mb-10 " key={review.id}>
              <div>{review.author}</div>
              <div
                className={
                  isOpen
                    ? ""
                    : "text-ellipsis [max-width:200ch] overflow-hidden whitespace-nowrap"
                }
              >
                {review.content}
              </div>
              <div
                className={
                  review.content.length < 200
                    ? "hidden"
                    : "text-sm underline text-gray-300"
                }
                onClick={() => handleOpenReview(review.id)}
              >
                {isOpen ? "접기" : "더보기"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
