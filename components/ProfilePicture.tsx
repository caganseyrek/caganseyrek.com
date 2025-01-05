import React from "react";

import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      src="/images/general_cat.png"
      width="178"
      height="178"
      alt="My Profile Picture"
      className="bg-cover rounded-lg select-none"
    />
  );
};

export default ProfilePicture;
