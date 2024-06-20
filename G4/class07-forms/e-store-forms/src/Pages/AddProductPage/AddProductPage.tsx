import { useForm } from "react-hook-form";
import { Page } from "../../Layout/Page/Page";
import "./AddProductPage.css";

interface FormValues {
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  stock: string;
}

export function AddProductPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      price: "",
      image: "",
      description: "",
      category: "",
      stock: "",
    },
  });

  const watchImgValue = watch("image");

  console.log(watchImgValue);

  const placeholderImg =
    "https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg";

  console.log("errors", errors);
  console.log("isDirty", isDirty);
  console.log("isValid", isValid);
  console.log("isSubmitted", isSubmitted);

  return (
    <Page title="Add Product">
      <form className="form" onSubmit={handleSubmit(data => console.log(data))}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            {...register("title", {
              required: { value: true, message: "Title is required" },
            })}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            {...register("price", { required: true, min: 0, max: 10000 })}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" {...register("image", { required: true })} />
        </div>
        <div className="img-display">
          <img
            src={watchImgValue || placeholderImg}
            alt="Product Image"
            onError={() => {
              console.log("error fired");
            }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea {...register("description", { required: true })}></textarea>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select {...register("category", { required: true })}>
            <option value="mens clothing">Mens clothing</option>
            <option value="womens clothing">Womens clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
          </select>
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input type="text" {...register("stock", { required: true })} />
        </div>
        {!isValid && isSubmitted && (
          <div className="form-error">All fields are required</div>
        )}

        <div className="form-controls">
          <button type="button" onClick={() => reset()}>
            Reset
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
    </Page>
  );
}
