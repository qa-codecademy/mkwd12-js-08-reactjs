import { useForm } from "react-hook-form";
import { Page } from "../../Layout/Page/Page";
import "./AddProductPage.css";
import { AddProductReq } from "../../models/product.model";
import { useState } from "react";
import { Spinner } from "../../Components/Spinner/Spinner";
import { httpService } from "../../services/http.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks";
import { fetchProducts } from "../../state/slices/products.slice";

interface FormValues {
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  stock: string;
}

export function AddProductPage() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitted },
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

  const onSubmit = (productData: FormValues) => {
    const addProductReq: AddProductReq = {
      ...productData,
      price: Number(productData.price),
      stock: Number(productData.stock),
    };

    postNewProduct(addProductReq);
  };

  const postNewProduct = async (reqBody: AddProductReq) => {
    setIsLoading(true);

    try {
      const response = await httpService.post("/products", reqBody);

      console.log(response);

      toast.success("Product added successfully!");
      dispatch(fetchProducts());
      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Unable to add product, please try again");
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Page title="Add Product">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            <textarea
              {...register("description", { required: true })}
            ></textarea>
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
    </>
  );
}
