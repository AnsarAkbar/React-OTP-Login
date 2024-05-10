import { useState } from "react";
import "./index.css"; // Assuming you have additional global styles in index.css
import EmailForm from "./Component/EmailForm";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsLogin(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isLogin ? (
        <EmailForm />
      ) : (
        <button
          onClick={handleClick}
          className="bg-gray-300 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none"
        >
          Login via email
        </button>
      )}
    </div>
  );
}

export default App;
