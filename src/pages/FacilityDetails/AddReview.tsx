/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddReviewMutation } from "@/redux/api/reviewApi/reviewApi";
import { useCurrentToken } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { toast } from "sonner";

const AddReview = ({ id }: { id: string }) => {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [addReview, { isLoading }] = useAddReviewMutation();
  const token = useAppSelector(useCurrentToken);

  const handleReview = async (e: any) => {
    e.preventDefault();
    setError(""); // Reset error message

    const review = e.target.review.value;

    // Check if rating is 0 (not selected)
    if (rating === 0) {
      setError("Rating is required.");
      return;
    }

    // Validation passed, create review data
    const reviewData = {
      rating: rating,
      comment: review,
      facility: id,
    };

    try {
      const res = await addReview(reviewData);

      if (res.error) {
        if ('data' in res.error) {
          toast.error((res.error as any).data.message);
        } else {
          toast.error("An error occurred");
        }
      }
      // toast.success("Review added successfully.");
    } catch (err) {
      console.log(err);
    }

    // console.log(reviewData);

    // Optionally reset form
    e.target.reset();
    setRating(0);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (newRating > 0) {
      setError(""); // Hide the error when a valid rating is selected
    }
  };

  return (
    <div>
      {token ? (
        <form onSubmit={handleReview}>
          <div className="my-4 flex items-center gap-2">
            {/* Rating */}
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={handleRatingChange}
            />
            <p className="text-lg font-medium text-gray-600">({rating})</p>
            {rating > 0 && (
              <button
                className="text-red-500 underline ml-4"
                type="button"
                onClick={() => setRating(0)}
              >
                Reset
              </button>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <textarea
            name="review"
            placeholder="Write a review"
            className="text-lg w-full h-36 p-3 mt-2 rounded-lg focus:outline-dashed"
          ></textarea>
          <button
            className="bg-gradient text-white w-full mt-4 p-3 rounded-lg"
            type="submit"
          >
            {
              isLoading ? (
                <div className="flex justify-center items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  <span>Submitting...</span>
                </div>
              ) : "Submit"
            }
            
          </button>
        </form>
      ) : (
        <p className="text-gray-500 text-lg">
          You need to login to add a review.
        </p>
      )}
    </div>
  );
};

export default AddReview;
