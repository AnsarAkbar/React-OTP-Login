import React, { useState } from "react";
import Otpinputs from "./Otpinputs";

const EmailForm = () => {
  const [otpsent, setOtpsent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {otpsent ? (
        <Otpinputs email={email} />
      ) : (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center w-full">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Enter Your Email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
            />
            <button
              onClick={() =>
                setOtpsent(email !== "" ? true : false)
              }
              className={`w-full  text-white font-bold py-2 px-4 rounded-md focus:outline-none ${
                email === "" ? 
                "cursor-not-allowed bg-gray-400"
                  : " bg-blue-500 hover:bg-blue-700"
              }`}
            >
              Send Verification Code
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailForm;
