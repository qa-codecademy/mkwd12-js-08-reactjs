import { useContext } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { AuthContext } from "../../../context/auth.context";
interface LoginFormProps {
  email: string;
  password: string;
}

export const Login = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await login(data.email, data.password);
      })}
    >
      <input type="text" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />

      <button type="submit" className="Login">
        Login
      </button>
    </form>
  );
};
