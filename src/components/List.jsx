import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";

const List = () => {
  const userList = useContext(UserContext);

  return (
    <>
      <ol className=" font-bold border border-red-500 h-48 overflow-auto m-2">
        {userList &&
          userList.map((user) => {
            return <li className="m-2 h-8 font-bold border border-blue-500 " key={user.cellNumber}>{user.fullName}</li>;
          })}
      </ol>
    </>
  );
};

export default List;
