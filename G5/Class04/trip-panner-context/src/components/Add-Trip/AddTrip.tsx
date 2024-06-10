import { useContext, useState } from "react";
import "./AddTrip.css";
import { TripContext } from "../../context/trip.context";

export const AddTrip = () => {
  const context = useContext(TripContext);
  const { handleAddTrip } = context;
  const [draftTitle, setDraftTitle] = useState("");
  const [draftDestination, setDraftDestination] = useState("");
  const [draftImage, setDraftImage] = useState("");
  const [draftBudget, setDraftBudget] = useState("");

  const [isBudgeInvalid, setIsBudgetInvalid] = useState(false);

  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDraftTitle(event.target.value);
  };

  const handleChangeDestination = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDraftDestination(event.target.value);
  };

  const handleChangeImage = (imageUrl: string) => {
    setDraftImage(imageUrl);
  };

  const handleChangeBudget = (budget: string) => {
    const parsedBudget = Number(budget);
    const isValueNotANumber = Number.isNaN(parsedBudget);

    console.log(isValueNotANumber);
    setIsBudgetInvalid(isValueNotANumber);
    setDraftBudget(budget);
  };

  const clearInputs = () => {
    setDraftTitle("");
    setDraftDestination("");
    setDraftImage("");
    setDraftBudget("");
  };

  return (
    <form
      className="createTripForm"
      onSubmit={(event) => {
        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        // console.log(event.target[2].value);
        // console.log(event.target[3].value);

        event.preventDefault();

        handleAddTrip(
          draftTitle,
          draftDestination,
          Number(draftBudget),
          draftImage
        );

        clearInputs();
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={draftTitle}
        onChange={handleChangeTitle}
      />
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={draftDestination}
        onChange={(event) => handleChangeDestination(event)}
      />
      <input
        type="text"
        name="image"
        placeholder="Image"
        value={draftImage}
        onChange={(event) => handleChangeImage(event.target.value)}
      />
      <input
        type="text"
        name="budget"
        placeholder="Budget"
        value={draftBudget}
        onChange={(event) => handleChangeBudget(event.target.value)}
      />
      {isBudgeInvalid && (
        <span style={{ color: "red" }}>* Input is invalid</span>
      )}
      <button>Create</button>
    </form>
  );
};
