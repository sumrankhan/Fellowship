import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-green-700 text-white p-4">
      User : {userid}
    </div>
  );
}

export default User;
