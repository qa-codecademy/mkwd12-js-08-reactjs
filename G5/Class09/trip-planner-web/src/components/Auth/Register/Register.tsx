import { useForm } from "react-hook-form";
import "./Register.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";

interface RegisterFormProps {
  email: string;
  password: string;
}

export const Register = () => {
  const { register: registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log(data);

        await registerUser(data.email, data.password);
      })}
    >
      <input type="text" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />

      <button type="submit" className="Register">
        Register
      </button>
    </form>
  );
};
