import React from "react";
import profilPic from "../assets/images/image-avatar.png";

export default function AccountPage() {
  return (
    <div>
      <img
        src={profilPic}
        alt="profile_picture"
        className="h-6 md:h-12 p-0.5 hover:bg-Orange hover:rounded-full"
      />
    </div>
  );
}
