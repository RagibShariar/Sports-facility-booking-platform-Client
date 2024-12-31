import { baseApi } from "../baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (reviewData) => ({
        url: "/add-review",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: [],
    }),
    getReview: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),
  }),
});

export const { useAddReviewMutation, useGetReviewQuery } = reviewApi;
