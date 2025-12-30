import { Link } from "react-router-dom";
import { useState } from "react";
import API_URL from "../api";
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [wrongName, setwrongName] = useState("");
    const [wrongEmail, setwrongEmail] = useState("");
    const [wrongPass, setWrongPass] = useState("");
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
const handleSignup = async () => {
  try {
    setIsLoading(true);

    if (name.trim() === "") {
      setwrongName("This Field can't be empty");
      return;
    } else {
      setwrongName("");
    }

    if (email.trim() === "") {
      setwrongEmail("This Field can't be empty");
      return;
    } else if (!isValidEmail(email)) {
      setwrongEmail("wrong email");
      return;
    } else {
      setwrongEmail("");
    }

    if (password.trim() === "") {
      setWrongPass("This Field can't be empty");
      return;
    } else if (password.length < 6) {
      setWrongPass("This Password is too short");
      return;
    } else {
      setWrongPass("");
    }

    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.error?.includes("Name")) {
        setwrongName("This Name Has Already Used");
      }
      if (data.error?.includes("Email")) {
        setwrongEmail("This Email Has Already Used");
      }
      return;
    }

    localStorage.setItem("auth", "true");
    navigate("/home");

  } catch (err) {
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <>
        <div className="min-h-screen bg-[rgba(44,0,255,0.23)]">
            <div className="container max-w-[1200px] px-5 m-auto">
            <header className="flex justify-between items-center">
                <h1 className="text-[35px] font-bold">ShopMax</h1>
                <div className="flex gap-5 items-center text-[20px]">
                <Link to="/login"><p className="cursor-pointer">Log in</p></Link>
                </div>
            </header>
            <main className="p-[25px] bg-[#fff] rounded-[30px] max-w-[400px] mx-auto mt-[80px]">
                <h1 className="text-center mb-[20px] text-[30px] font-bold">Sign up</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <p className="text[#393939] mb-2">Your Name</p>
                        <input type="text" className="w-full outline-none border-[1px] border-[#d1d1d1] p-[8px] rounded-[5px]" 
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Name" />
                        <p className="text-[red] pl-[8px]">{wrongName}</p>
                    </div>
                    <div>
                        <p className="text[#393939] mb-2">Email Address</p>
                        <input type="text" className="w-full outline-none border-[1px] border-[#d1d1d1] p-[8px] rounded-[5px]" 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email" />
                            <p className="text-[red] pl-[8px]">{wrongEmail}</p>
                    </div>
                    <div>
                        <p className="text[#393939] mb-2">Password</p>
                        <input type="password" className="w-full outline-none border-[1px] border-[#d1d1d1] p-[8px] rounded-[5px]" 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Your Password" />
                            <p className="text-[red] pl-[8px]">{wrongPass}</p>
                    </div>
                </form>
                    <button 
                        onClick={handleSignup}
                        disabled={isLoading}
                        className={`${isLoading ? "bg-[rgb(81,211,132)]" : "bg-green-500"} w-full py-[10px] text-white text-[20px]  my-[18px] rounded-[12px] cursor-pointer`}>
                        Sign up
                    </button>
                <p className="text-center">I have an account? <Link to="/login"><span className="text-[blue] cursor-pointer">Log in</span></Link></p>
            </main>
            </div>
        </div>
    </>
  )
}
export default Signup;