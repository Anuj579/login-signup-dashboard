
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 border border-[#11182721] rounded-md px-6 py-8 shadow-md">
                <div>
                    <h2 className="text-center text-4xl font-bold text-gray-900">Login</h2>
                </div>
                <form className="mt-8 space-y-4">
                    <div>
                        <Input
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            required
                            autoComplete="current-password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="text-sm text-right">
                        <Link to="#" className="font-medium text-primary hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Login
                        </Button>
                        <Button asChild
                            type="button"
                            className="w-full mt-4"
                        >
                            <Link to="/dashboard" >
                                Go to Dashboard
                            </Link>
                        </Button>
                    </div>
                    <div className="text-sm text-center">
                        Don't have an account?
                        <Link to="/signup" className="font-medium text-primary hover:underline ms-2">
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}