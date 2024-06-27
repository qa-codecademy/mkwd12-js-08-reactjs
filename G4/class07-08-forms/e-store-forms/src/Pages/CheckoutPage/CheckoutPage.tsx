import { useForm } from "react-hook-form";
import CheckoutDetails from "../../Components/CheckoutDetails/CheckoutDetails";
import { Page } from "../../Layout/Page/Page";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import { AddOrderReq } from "../../models/order.model";
import { useContext, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { httpService } from "../../services/http.service";
import { Spinner } from "../../Components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

export interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { getProductsInCart, resetCart } = useContext(ProductsContext);

  const checkoutForm = useForm<CheckoutFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    },
  });

  const {
    formState: { isValid },
  } = checkoutForm;

  const onOrderSubmit = () => {
    console.log("on submit");

    console.log(isValid);

    if (!isValid) return;

    console.log("is valid check");

    const { firstName, lastName, address, phoneNumber } =
      checkoutForm.getValues();

    const cartProducts = getProductsInCart();

    const total = getProductsInCart().reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const addOrderReq: AddOrderReq = {
      fullName: `${firstName} ${lastName}`,
      address,
      phoneNumber,
      date: new Date(),
      amount: total,
      products: cartProducts.map(product => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    };

    postNewOrder(addOrderReq);
  };

  const postNewOrder = async (reqBody: AddOrderReq) => {
    setIsLoading(true);
    try {
      await httpService.post("/orders", reqBody);
      resetCart();
      navigate("/products");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Page title="Checkout">
        <CheckoutForm form={checkoutForm} />
        <CheckoutDetails onOrderSubmit={onOrderSubmit} />
      </Page>
    </>
  );
}

export default CheckoutPage;
