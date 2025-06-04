import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../api/auth/mutations";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const { toast } = useToast();
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const [login, { loading }] = useMutation(LOGIN_USER, {
		onCompleted: (data) => {
			if (!data.Login) return;
			const displayName = data.Login.username ?? "Unknown";
			toast({
				title: "Login success",
				description: `Welcome ${displayName} to Tizz-flow`,
			});
		},
		onError: (err) => {
			toast({
				title: "Login failed",
				description: err.message ?? "Unexpected error, try again!.",
				variant: "destructive",
			});
		},
	});
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
				disabled={loading}
				id="login-button"
			>
				{loading && <Loader2 className="animate-spin" />}
				Login
			</Button>
		</div>
	);
};

export default LoginForm;
