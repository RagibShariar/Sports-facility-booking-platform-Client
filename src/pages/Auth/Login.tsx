/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { useCurrentToken } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const token = useAppSelector(useCurrentToken);
  // console.log("from useLoginMutation", { isError, isLoading, isSuccess, error});

  useEffect(() => {
    if (token && token !== null) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");

    try {
      const loginInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(loginInfo).unwrap();

      if (res?.success) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        localStorage.setItem("userEmail", loginInfo.email);
        navigate("/verify");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  const handleUserDemoLogin = () => {
    // Fill in the demo email and password
    setValue("email", "user@gmail.com");
    setValue("password", "123456");
  };
  const handleAdminDemoLogin = () => {
    // Fill in the demo email and password
    setValue("email", "admin@gmail.com");
    setValue("password", "123456");
  };

  return ( 
    <section className="login h-[95vh] flex justify-center items-center">
    <div className="backdrop-blur-xl lg:w-[550px] md:w-1/2 mx-auto  lg:rounded-xl lg:shadow-2xl  bg-transparent">
      <div className="backdrop-blur-2xl lg:m-1 lg:rounded-lg px-8 py-10 mx-auto dark:bg-slate-900">
        <h4 className="text-white text-3xl font-bold dark:text-gray-50">Welcome Back</h4>
        <p className="mt-3 mb-6 text-sm font-medium text-white">Enter your email below to login to your account</p>

          <div className="mb-4 flex justify-between gap-6">
            <Button onClick={handleUserDemoLogin} className="block font-Outfit bg-teal-700 hover:bg-teal-800 w-full h-fit py-2 px-4 text-left">
              <p className="text-lg">Demo User Login</p>
              <p className="font-normal tracking-wide">Email: user@gmail.com</p>
              <p className="font-normal tracking-wide">Password: 123456</p>
            </Button>
            <Button onClick={handleAdminDemoLogin} className="block font-Outfit bg-teal-700 hover:bg-teal-800 w-full h-fit py-2 px-4 text-left">
              <p className="text-lg">Demo Admin Login</p>
              <p className="font-normal tracking-wide">Email: admin@gmail.com</p>
              <p className="font-normal tracking-wide">Password: 123456</p>
            </Button>
          </div>

        <form onSubmit={handleSubmit(handleLogin)} className=" ">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-white text-md" htmlFor="email">Email</Label>
                <Input
                className="text-md py-5 "
                {...register("email", { required: true })}
                type="email"
                placeholder="m@example.com"
              />
              {errors.email && (
                <span className="text-sm text-red-500 flex items-center">
                  <MdErrorOutline className="mr-1" /> Email is required
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-white text-md" htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
                <Input
                className="text-md py-5 "
                {...register("password", { required: true })}
                type="password"
                placeholder="•••••••••"
              />
              {errors.password && (
                <span className="text-sm text-red-500 flex items-center">
                  <MdErrorOutline className="mr-1" /> Password is required
                </span>
              )}
            </div>
            <Button type="submit" className="w-full mt-4 py-5 text-md font-bold">
              Login
            </Button>
          </div>
        </form>
        <GoogleSignIn />
        <div className="mt-4 text-center text-sm flex items-center justify-center">
          <div>
            Don&apos;t have an account?{" "}
            <Link to="/signUp" className="ml-2 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      </div>
      </section>
  );
};
export default Login;
