import React from "react";

const ProfilePicture = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/general_cat.png"
      width="178"
      height="178"
      alt="My Profile Picture"
      className="bg-cover rounded-lg select-none"
    />
  );
};

export default ProfilePicture;
