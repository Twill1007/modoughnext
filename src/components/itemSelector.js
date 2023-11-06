import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addItemToCart } from "@/state/cart-slice";
import { removeItemFromCartById } from "@/state/cart-slice";
import useCart from "@/hooks/use-cart";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ItemSelector(props) {
  const { items, addItem, removeItem } = useCart();

  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("Select");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue !== "Select") {
      const item = {
        id: selectedValue,
        title: selectedValue,
      };
      dispatch(addItemToCart(item));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCartById(selectedValue));
  };

  return (
    <Fragment>
      <Box sx={{ minWidth: 30 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            value={selectedValue}
            label="Quantity"
            onChange={handleDropdownChange}
          >
            <MenuItem value={1}>One Dozen</MenuItem>
            <MenuItem value={2}>Two Dozen</MenuItem>
            <MenuItem value={3}>Three Dozen</MenuItem>
          </Select>

          <Button variant="contained" onClick={handleSubmit}>
            Complete Order
          </Button>
          <div>
            {items.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </div>
          <Button
            variant="contained"
            onClick={() => handleRemoveItem(selectedValue)}
          >
            Delete Item
          </Button>

          <Link href="/cookie-home">Home</Link>
          {selectedValue === "select" && (
            <div>
              {selectedValue} {props.cookieType.title}
            </div>
          )}
          {/* {selectedValue.id === "cc" && <div>{props.cookieType.title}</div>} */}
        </FormControl>
      </Box>
    </Fragment>
  );
}

export default ItemSelector;
