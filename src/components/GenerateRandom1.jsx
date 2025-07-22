import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import { userReducer } from "@/reducer/userReducer";
import { useReducer } from "react";


const GenerateRandom1 = () => {
  const userList = useContext(UserContext);

  const [randUser, dispatch] = useReducer(userReducer, {});

  const chooseRandomOne = () => {
    const rand = userList && Math.floor(Math.random() * userList.length);
    dispatch({
      type: "randUser",
      rand: rand,
      userList: [...userList],
    });
  };
  return (
    <>
      <button type="submit" className="btn" onClick={chooseRandomOne}>
        Random
      </button>
      <div className=" font-bold border border-red-500 h-8 m-2">{randUser.fullName}</div>
    </>
  );
};

export default GenerateRandom1;
