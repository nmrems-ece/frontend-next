import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div>
      <p>Profile of User {params.id}</p>
    </div>
  );
};

export default UserProfile;