import { useContext, useState } from "react";
import "./AddTrip.css";
import { Currency, DraftTrip, Status } from "../../types/trip";
import { TripContext } from "../../context/trip.context";

export const AddTrip = () => {
  const { handleCreateTrip } = useContext(TripContext);

  const [draftTrip, setDraftTrip] = useState<DraftTrip>({
    destination: "",
    notes: "",
    imageUrl: "",
    amount: "",
    currency: Currency.MKD,
    startDate: "",
    endDate: "",
    status: Status.PLANNING,
  });

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string
  ) => {
    const value = event.target.value;
    console.log(value);

    setDraftTrip({
      ...draftTrip,
      [key]: value,
    });
  };

  const resetForm = () => {
    setDraftTrip({
      destination: "",
      notes: "",
      imageUrl: "",
      amount: "",
      currency: Currency.MKD,
      startDate: "",
      endDate: "",
      status: Status.PLANNING,
    });
  };

  return (
    <form
      className="createTripForm"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleCreateTrip(draftTrip);
        resetForm();
      }}
    >
      <input
        type="text"
        placeholder="Destination"
        value={draftTrip.destination}
        onChange={(e) => handleChangeInput(e, "destination")}
      />

      <input
        type="text"
        placeholder="Notes"
        value={draftTrip.notes}
        onChange={(e) => handleChangeInput(e, "notes")}
      />

      <div className="dueDateInput">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={draftTrip.startDate}
          onChange={(e) => handleChangeInput(e, "startDate")}
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          value={draftTrip.endDate}
          onChange={(e) => handleChangeInput(e, "endDate")}
        />
      </div>

      <input
        type="text"
        placeholder="Image Url"
        value={draftTrip.imageUrl}
        onChange={(e) => handleChangeInput(e, "imageUrl")}
      />

      <input
        type="text"
        placeholder="Amount"
        value={draftTrip.amount}
        onChange={(e) => handleChangeInput(e, "amount")}
      />

      <select
        value={draftTrip.currency}
        onChange={(e) => handleChangeInput(e, "currency")}
      >
        <option value="MKD">Macedonian Denar</option>
        <option value="EUR">Euro</option>
        <option value="USD">American Dollar</option>
      </select>

      <button>Save</button>
    </form>
  );
};
