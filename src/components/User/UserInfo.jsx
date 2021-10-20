import React, { useContext } from "react";
import { BlogsContext } from "../../context/BlogsContext";

const UserInfo = () => {
  const { userData } = useContext(BlogsContext);
  return (
    <div className="userinfo-main-div">
      <div>
        <ul>
          <li>name: {userData.name}</li>
          <li>username: {userData.username}</li>
          <li>email: {userData.email}</li>
          <li>
            address: {userData.address.city}, {userData.address.street}
          </li>
        </ul>
      </div>
      <div>
        <img
          src={`https://picsum.photos/id/${userData.id}/200/300`}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default UserInfo;
