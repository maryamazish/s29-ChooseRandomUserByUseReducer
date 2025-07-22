import { UserContext } from "@/context/userContext";
import List from "@/components/List.jsx";
import { useReducer } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userReducer } from "@/reducer/userReducer";
import GenerateRandom1 from "../components/GenerateRandom1";

const defaultUser = [];

const Home = () => {
  const schema = yup.object({
    fullName: yup.string().min(3).max(255),
    cellNumber: yup
      .string()
      .matches(/^(?:\+98|0)9\d{9}$/, "cell number is not valid")
      .test(
        "cellNumber",
        "This cellNumber has already been taken",
         (value) => {
          return check(value);
        }
      ),
  });

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const [userList, dispatch] = useReducer(userReducer, defaultUser);

  const onSubmit = (data) => {
    dispatch({
      type: "add",
      fullName: data.fullName,
      cellNumber: data.cellNumber,
    });
  };

  const check = (cellNumber) => {
    return !userList.some((user) => user.cellNumber === cellNumber);
  };

  return (
    <div className=" font-bold border border-b-black w-90 h-120 p-2 m-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="ml-auto mr-auto">
        <div>
          <div className="mt-2.5">
            <label className="w-25 inline-block">Full Name:</label>
            <input {...register("fullName")} />
            <div className="text-pink-700">
              {formState.errors.fullName && formState.errors.fullName.message}
            </div>
          </div>
          <div className="mt-2.5">
            <label className="w-25 inline-block">Cell Number:</label>
            <input {...register("cellNumber")} />
            <div className="text-pink-700">
              {formState.errors.cellNumber &&
                formState.errors.cellNumber.message}
            </div>
          </div>
          <button type="submit" className="btn ml-auto mr-auto">
            Add User
          </button>
        </div>
      </form>

      <UserContext.Provider value={userList}>
        <List />
        {/* {!!userList.length && <GenerateRandom />} */}
        {!!userList.length && <GenerateRandom1 />}
      </UserContext.Provider>
    </div>
  );
};

export default Home;
