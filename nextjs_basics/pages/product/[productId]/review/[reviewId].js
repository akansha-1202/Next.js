import { useRouter } from "next/router";
import React from "react";

//Nested Dynamic Routing
const Review = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;

  return (
    <div>
      <h3>
        Product Review : {reviewId} for product : {productId} !!!{" "}
      </h3>
    </div>
  );
};

export default Review;
