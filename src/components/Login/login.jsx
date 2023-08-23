//#D1E8E2  #FFCB9A  #D9B08C color
import React, { Fragment, useState, useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";

function Login() {
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();
  const [genratedOtp, setGenratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [role, setRole] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = { mobile, role };

    localStorage.setItem("loginData", JSON.stringify(data));
    otpHandler();

    setEnteredOtp("");
  };

  const otpGenrater = () => {
    const NewOtp = Math.floor(Math.random() * 10000);
    setGenratedOtp(NewOtp.toString());
    alert(`Generated OTP: ${NewOtp}`);
  };

  const otpHandler = () => {
    if (enteredOtp === genratedOtp) {
      navigate("/");
    } else {
      return "Error";
    }
  };

  return (
    <Fragment>
      <section className="min-h-screen flex items-center justify-center">
        <div className="bg-[#116466] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="px-16">
            <h2 className="font-bold text-3xl text-black text-center">
              Welcome to site!
            </h2>
            <p className="text-md text-center mb-5 text-[#D1E8E2]">
              Here login for the post webiste!
            </p>
            <h2 className="font-bold text-2xl text-black text-center mb-4">
              Login
            </h2>

            <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <input
                  maxLength={10}
                  minLength={10}
                  pattern="[0-9]*"
                  className="p-2 rounded-xl border mr-5"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                />
                <button
                  type="button"
                  onClick={otpGenrater}
                  className="bg-black rounded-xl text-white py-2 px-2 hover:scale-110 duration-300"
                >
                  genrate otp
                </button>
              </div>
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="userOtp"
                maxLength={4}
                minLength={4}
                pattern="[0-9]*"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                placeholder="OTP(only 4 digit)"
              />
              <div className="p-2 rounded-xl border bg-white">
                <label forhtml="role">Choose your role:</label>
                <select
                  className=" text-black border rounded-md mx-4"
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Select role</option>
                  <option value="admin">admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <button className="bg-black rounded-xl text-white py-2 hover:scale-110 duration-300">
                Log in
              </button>
            </form>
            {/* <div className="mt-5 flex flex-col">
                <p>Other Login method:</p>
                <div>
                <img src="https://img.icons8.com/ios/50/000000/facebook-new.png"/>
                </div>
              </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Login;
