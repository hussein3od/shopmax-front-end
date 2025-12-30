import { useState } from "react";
import API_URL from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [wrongEmail, setWrongEmail] = useState("");
    const [wrongPass, setWrongPass] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleLogin = async () => {
        setIsLoading(true);
        setWrongEmail("");
        setWrongPass("");

        try {
            if(email.trim() === "") {
                setWrongEmail("This field can't be empty");
                return;
            } else if(!isValidEmail(email)) {
                setWrongEmail("Invalid email format");
                return;
            }

            if(password.trim() === "") {
                setWrongPass("This field can't be empty");
                return;
            } else if(password.length < 6){
                setWrongPass("Password is too short");
                return;
            }

            const res = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if(res.status !== 200) {
                if(data.message.includes("email")) setWrongEmail("Email not found");
                if(data.message.includes("password")) setWrongPass("Incorrect password");
                return;
            }

            console.log("Login successful:", data);
            if(res.status === 200) {
                localStorage.setItem("auth", "true");
                navigate("/home");
            }
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
    };

    return (
        <div className="min-h-screen bg-[rgba(44,0,255,0.23)]">
            <div className="container max-w-[1200px] px-5 m-auto">
            <header className="flex justify-between items-center">
                <h1 className="text-[35px] font-bold">ShopMax</h1>
                <div className="flex gap-5 items-center text-[20px]">
                <Link to="/signup"><p className="cursor-pointer">Sign up</p></Link>
                </div>
            </header>
            <main className="p-[25px] bg-[#fff] rounded-[30px] max-w-[400px] mx-auto mt-[80px]">
                <h1 className="text-center mb-[20px] text-[30px] font-bold">Log in</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <p className="text-[#393939] mb-2">Email Address</p>
                        <input 
                            type="text" 
                            className="w-full outline-none border-[1px] border-[#d1d1d1] p-[8px] rounded-[5px]" 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter Your Email" 
                        />
                        <p className="text-[red] pl-[8px]">{wrongEmail}</p>
                    </div>
                    <div>
                        <p className="text-[#393939] mb-2">Password</p>
                        <input 
                            type="password" 
                            className="w-full outline-none border-[1px] border-[#d1d1d1] p-[8px] rounded-[5px]" 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter Your Password" 
                        />
                        <p className="text-[red] pl-[8px]">{wrongPass}</p>
                    </div>
                </form>
                <button 
                    onClick={handleLogin}
                    disabled={isLoading}
                    className={`${isLoading ? "bg-[rgb(81,211,132)]" : "bg-green-500"} w-full py-[10px] text-white text-[20px]  my-[18px] rounded-[12px] cursor-pointer`}>
                    Log in
                </button>
                <p className="text-center">
                    Don't have an account? <Link to="/signup"><span className="text-[blue] cursor-pointer">Sign up</span></Link>
                </p>
            </main>
            </div>
        </div>
    );

}

export default Login;