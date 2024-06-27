import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../types/product.type";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart.slice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "contain" }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

        <Typography>Price: {product.price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton color="primary" onClick={() => handleAddProduct()}>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton color="secondary">
          <RemoveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
