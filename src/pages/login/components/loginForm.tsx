import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleLogin = async () => {
		navigate("/");
	};
	return (
		<div className="flex flex-col w-full">
			<input
				ref={usernameRef}
				type="text"
				className="bg-background-bold outline outline-[#f3f5f726] outline-[0.5px] rounded-2xl p-4 text-text-color mb-2"
				placeholder="Username"
				id="username"
			/>
			<input
				ref={passwordRef}
				type="password"
				className="bg-background-bold outline outline-[#f3f5f726] outline-[0.5px] rounded-2xl p-4 text-text-color mb-4"
				placeholder="Password"
				id="password"
			/>
			<Button
				className="rounded-2xl p-4 text-sm font-semibold"
				onClick={handleLogin}
				id="login-button"
			>
				Login
			</Button>
		</div>
	);
};

export default LoginForm;
