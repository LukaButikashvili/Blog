// import React, { createContext, useState } from "react";

// const UserContext = createContext();

// const UserContectProvider = (props) => {
//   const [userData, setUserData] = useState();

//   const fetchUser = async (userID) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
//       .then((res) => res.json())
//       .then((data) => setUserData(data));
//   };
//   return (
//     <UserContext.Provider value={{ fetchUser, userData }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export { UserContext, UserContectProvider };
