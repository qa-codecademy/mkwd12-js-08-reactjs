import { Trip } from "../../../types/trip";
import "./EditTripForm.css";
import { useForm } from "react-hook-form"; // npm install react-hook-form

interface EditTripForm {
  tripDetails: Trip;
  handleDisableEdit: () => void;
}

interface UpdateTripFormValues {
  notes: string;
  destination: string;
  budget: string;
  imageUrl: string;
}

export const EditTripForm = ({
  tripDetails,
  handleDisableEdit,
}: EditTripForm) => {
  const useFormValue = useForm<UpdateTripFormValues>();
  const { register, handleSubmit, formState, setValue } = useFormValue;

  setValue("notes", tripDetails.notes);
  setValue("destination", tripDetails.destination);
  setValue("budget", tripDetails.budget.amount.toString());
  setValue("imageUrl", tripDetails.imageUrl);

  return (
    <form
      className="editForm"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <input type="text" placeholder="Notes" {...register("notes")} />
      <input
        type="text"
        placeholder="Destination"
        {...register("destination")}
      />
      <input type="text" placeholder="Budget" {...register("budget")} />
      <input type="text" placeholder="Image Url" {...register("imageUrl")} />

      <button className="save" type="submit">
        Save
      </button>
      <button className="cancel" onClick={handleDisableEdit}>
        Cancel
      </button>
    </form>
  );
};
