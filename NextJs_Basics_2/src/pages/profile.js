import Footer from "@/components/Footer";
import React from "react";

function Profile() {
  return <div className="about">Profile</div>;
}

export default Profile;

Profile.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
