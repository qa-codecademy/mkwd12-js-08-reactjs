import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          <NavLink to={"/"}>
            <Button sx={{ color: "white" }}>Home</Button>
          </NavLink>

          <NavLink to={"/products"}>
            <Button sx={{ color: "white" }}>Products</Button>
          </NavLink>
          <NavLink to={"/cart"}>
            <Button sx={{ color: "white" }}>Cart</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
