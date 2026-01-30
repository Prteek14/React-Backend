import { useState, useEffect } from "react";
import Loader from "../Common/Loader";
import axios from "axios";
import apiClient from "../Utils/api-client";

function UseEffect() {
  const [name, setName] = useState("");
  const [delId, setDelId] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log("UseEffect Component Mounted , every time if no dependency array");
  //      });

  // useEffect(()=>{
  //   console.log("Only once, no matter how many times state changes");
  //   return ()=>{
  //       console.log("UseEffect Component Unmounted");
  //      } // right placce to clenup callback function , it only runs when you leave the component
  // },[])

  // useEffect(() => {
  //     console.log("UseEffect Component mounted1, each time name changes");
  //
  // }, [name]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     console.log(res.data);
    //     setUsers(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     setError(error.message);
    //     setIsLoading(false);
    //   });
  }, []);

  // fetch khud parsing ni krta hai but axios parsing kr deta hai and also handles some errors internally

  const addUser = async () => {
    const newUser = {
      id: users.length + 1,
      name,
      email: "example@gmail.com",
    };
    const prevUsers = users;
    setUsers([...users, newUser]);
    setName("");
    try {
      await apiClient.post("/users", newUser);
    } catch (err) {
      setError(err.message);
      setUsers(prevUsers); // rollback
    }
  };

  const removeUser = async () => {
    const prevUsers = users;
    setUsers(users.filter((user) => user.id !== parseInt(delId)));

    try {
      await apiClient.delete(`/users/${delId}`);
    } catch (err) {
      setError(err.message);
      setUsers(prevUsers); // rollback
    }
    setDelId("");
  };

  const updateUser = async (user) => {
    const updateUser = {
      ...user,
      name: user.name + " updated",
    };
    setUsers(users.map((u) => (u.id === user.id ? updateUser : u)));

    try {
      await apiClient.patch(`/users/${user.id}`, updateUser);
    } catch (err) {
      setError(err.message);
      setUsers(users); // rollback
    }
  };

  return (
    <div className="min-h-screen w-full mb-5">
      <h1 className="text-sm font-bold text-center mb-8 mt-8 p-2 w-2/4 mx-auto bg-[#5265b4]   sm:text-lg md:text-xl">
        UseEffect Component
      </h1>

      <hr className="m-4 border-t-2 rounded" />

      <p className="text-center m-4  text-xs sm:text-xl sm:font-semibold">
        This is a sample component demonstrating the use of the useEffect hook
        in React.
      </p>

      <hr className="m-4 border-t-2 rounded" />

      <h2 className="text-sm font-bold text-center mb-8 mt-8 p-2 w-3/4 mx-auto bg-[#5265b4]   sm:text-lg md:text-xl">
        From here we understand API calls, Loading state, Error handling, axios , http methods.
      </h2>

      <div className="flex flex-col justify-center gap-2 m-2 bg-[#7cbec8] p-3 rounded w-5/6 mx-auto sm:flex-row sm:items-center sm:gap-4 sm:text-sm lg:gap-6 lg:text-lg">
        <input
          type="text"
          className="border-2 border-black p-2 rounded placeholder:text-slate-700"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2  rounded hover:bg-blue-600"
          onClick={addUser}
        >
          Add User
        </button>
        <input
          type="number"
          className="border-2 border-black p-2  rounded placeholder:text-slate-700"
          placeholder="Enter user ID to remove"
          value={delId}
          onChange={(e) => setDelId(e.target.value)}
        />
        <button
          className="bg-red-500 text-white p-2  rounded hover:bg-red-700"
          onClick={removeUser}
        >
          Remove User
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : (
        <table className="border-collapse border border-gray-400 w-3/4 mx-auto mt-6
        rounded-lg text-[8px] sm:text-sm md:text-base lg:text-lg  sm:5/6">
          <caption className="caption-top text-xl font-bold mb-2">
            Users Details
          </caption>

          <thead>
            <tr className="bg-[#106cec]">
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className=" hover:bg-gray-600 cursor-pointer  ">
                <td className="border border-gray-400 p-2">{user.id}</td>
                <td className="border border-gray-400 p-2">{user.name}</td>
                <td className="border border-gray-400 p-2 ">{user.email}</td>
                <td className="border border-gray-400 p-2">
                  <button
                    className="bg-red-500 text-white rounded hover:bg-red-700 sm:p-2"
                    onClick={() => updateUser(user)}
                  >
                    update user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UseEffect;
