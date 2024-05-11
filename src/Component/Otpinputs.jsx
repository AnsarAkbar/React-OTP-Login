import React, { useState, useRef, useEffect } from "react";

const Otpinputs = ({ length = 4, email }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  function handleChange(index, event) {
    const { value } = event.target;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < length - 1) inputRefs.current[index + 1].focus();
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div className="bg-gray-100 px-16 py-12 rounded max-w-lg flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-4">
        Dear user, an email has been sent to your {email} address
      </h1>
      <div className="flex mb-4">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            ref={(el) => (inputRefs.current[index] = el)}
            value={value}
            maxLength={1}
            className="w-10 h-10 bg-gray-100 text-center mr-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        ))}
      </div>
      <button 
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
          otp.some((value) => !value)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
        disabled={otp.some((value) => !value)}
      >
        Verify
      </button>
    </div>
  );
};

export default Otpinputs;
