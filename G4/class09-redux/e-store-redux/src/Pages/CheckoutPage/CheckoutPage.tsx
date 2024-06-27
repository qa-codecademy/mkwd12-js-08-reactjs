import { useForm } from "react-hook-form";
import CheckoutDetails from "../../Components/CheckoutDetails/CheckoutDetails";
import { Page } from "../../Layout/Page/Page";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import { AddOrderReq } from "../../models/order.model";
import { useState } from "react";
import { httpService } from "../../services/http.service";
import { Spinner } from "../../Components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { selectProductsInCart, selectTotalAmount } from "../../state/selectors";
import { resetCart } from "../../state/slices/products.slice";
import { toast } from "react-toastify";

export interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectProductsInCart);
  const total = useAppSelector(selectTotalAmount);

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
    if (!isValid) return;

    const { firstName, lastName, address, phoneNumber } =
      checkoutForm.getValues();

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
      dispatch(resetCart());
      toast.success("Order created successfully!");
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
