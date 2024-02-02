import { useRouter } from "next/router";
import React from "react";


//catching all routes
//mainly it is used for documentation
const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params : ", params);
  if (params.length === 2)
    return (
      <div>
        Viewing docs for features : {params[0]} and concepts : {params[1]}
      </div>
    );
  else if (params.length === 1)
    return <div>Viewing docs for features : {params[0]}</div>;
  return <div>Documentation</div>;
};

export default Docs;
