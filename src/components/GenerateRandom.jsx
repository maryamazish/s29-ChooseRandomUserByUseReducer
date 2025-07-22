import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";

const GenerateRandom = () => {
  const userList = useContext(UserContext);
  const [randUser, setRandUser] = useState({});
  const chooseRandomOne = () => {
    const rand = userList && Math.floor(Math.random() * userList.length);
    setRandUser(userList[rand]);
  };
  return (
    <>
      <button type="submit" className="btn" onClick={chooseRandomOne}>
        Random
      </button>
      <div>{randUser.fullName}</div>
    </>
  );
};

export default GenerateRandom;
