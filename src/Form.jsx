import { useState } from "react";

const Form = () => {
  let [success, setSuccess] = useState(null);
  const initialState = {
    userName: "",
    email: "",
    currentPassword: "",
    confirmPassword: "",
    gender: "",
    hobbies: "",
    country: "",
  };
  const [user, setUser] = useState(initialState);

  const handleGender = function (e) {
    setUser({
      ...user,
      gender: e.target.value,
    });
  };

  const handleHobbies = function (e) {
    setUser({ ...user, hobbies });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (
      !user.userName ||
      !user.currentPassword ||
      !user.email
    ) {
      setSuccess(false);
      return;
    }
    console.log(
      `Name: ${user.userName}\nPassword: ${user.currentPassword}\nEmail: ${user.email}`
    );
    setSuccess(true);
    setUser(initialState);
  };

  return (
    <div className="mx-auto border-2 border-gray-500 p-4  font-semibold mt-auto">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-3"
      >
        {/********************** userName *********************************/}
        <div className="grid-cols-2 grid">
          <label htmlFor="userName">
            USER NAME
          </label>
          <input
            value={user.userName}
            id="userName"
            type="text"
            className="border-2 border-tail-blue rounded-lg p-1"
            onChange={(e) => {}}
          />
        </div>
        {/********************** Email *********************************/}
        <div className="grid-cols-2 grid">
          <label htmlFor="email">EMAIL</label>
          <input
            value={user.email}
            id="email"
            type="email"
            className="border-2 border-tail-blue rounded-lg p-1"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        {/********************** Password *********************************/}
        <div className="grid-cols-2 grid">
          <label htmlFor="current-password">
            PASSWORD
          </label>
          <input
            id="current-password"
            type="password"
            value={user.currentPassword}
            onChange={(e) =>
              setUser({
                ...user,
                currentPassword: e.target.value,
              })
            }
            className="border-2 border-tail-blue rounded-lg p-1"
          />
        </div>
        {/********************** Confirm Password *********************************/}
        <div className="grid-cols-2 grid">
          <label htmlFor="confirm-password">
            CONFIRM PASSWORD
          </label>
          <input
            id="confirm-password"
            type="password"
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({
                ...user,
                confirmPassword: e.target.value,
              })
            }
            className="border-2 border-tail-blue rounded-lg p-1"
          />
        </div>
        {/********************** Gender *********************************/}
        <div className="grid-cols-2 grid">
          <p>Gender</p>

          <div className="flex gap-5">
            {/* Male */}
            <div className="flex gap-1">
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={handleGender}
                className="border-2 border-tail-blue rounded-lg p-1"
              />
              <label htmlFor="male">Male</label>
            </div>
            {/* Female */}
            <div className="flex gap-1">
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={handleGender}
                className="border-2 border-tail-blue rounded-lg p-1"
              />
              <label htmlFor="female">
                Female
              </label>
            </div>
            {/* Others */}
            <div className="flex gap-1">
              <input
                id="others"
                type="radio"
                name="gender"
                value="others"
                checked={user.gender === "others"}
                onChange={handleGender}
                className="border-2 border-tail-blue rounded-lg p-1"
              />
              <label htmlFor="others">
                Others
              </label>
            </div>
          </div>
        </div>

        {/********************** Hobbies *********************************/}
        <div className="grid-cols-2 grid">
          <p>Hobbies</p>

          <div className="flex gap-5">
            {/* Reading */}
            <div className="flex gap-1">
              <input
                id="reading"
                type="checkbox"
                name="hobbies"
                value="reading"
                onChange={handleGender}
                className="border-2 border-tail-blue rounded-lg p-1"
              />
              <label htmlFor="reading">
                Reading
              </label>
            </div>
            {/* Female */}
            <div className="flex gap-1">
              <input
                id="traveling"
                type="checkbox"
                name="gender"
                className="border-2 border-tail-blue rounded-lg p-1"
              />
              <label htmlFor="traveling">
                Traveling
              </label>
            </div>
            {/* Others */}
            <div className="flex gap-1">
              <input
                id="others"
                type="checkbox"
                name="sports"
                className="border-2 border-tail-blue rounded-lg p-1"
              />
              <label htmlFor="sports">
                Sports
              </label>
            </div>
          </div>
        </div>
        {/******************************Final Messages ***********/}
        {success === false && (
          <div className="text-red-600 font-thin text-xs">
            Enter User Name and Password
          </div>
        )}
        {success === true && (
          <div className="text-green-600 font-thin text-xs">
            Sign Up Successful
          </div>
        )}
        <button
          type="submit"
          className=" bg-slate-700 text-white rounded-md uppercase p-1"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
export default Form;
