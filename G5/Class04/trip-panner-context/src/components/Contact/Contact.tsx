import { useContext } from "react";
import { TripContext } from "../../context/trip.context";

export const Contact = () => {
  const context = useContext(TripContext);
  console.log(context);
  const { userMe } = context;
  return (
    <div>
      <h1>Contact Page</h1>
      <div>
        <h3>
          {userMe.fullName} from {userMe.city}
        </h3>
      </div>
    </div>
  );
};
