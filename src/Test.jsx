import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { decreaseQty, increaseQty, removeFromCart } from "./react-redux/cartSlice";

cart?.map((item) => {
  return (
    <tr key={item.id}>
      <td className="cart__product__item">
        <img src={item.images[0]} alt="Image" />
        <div className="cart__product__item__title">
          <h6>{item.title}</h6>
          <p>
            <span style={{ color: "brown", fontSize: "30px" }}>Rating: </span>{" "}
            {item.rating}
          </p>
        </div>
      </td>
      <td className="cart__price">{item.price}</td>
      <td className="cart__quantity">
        <div className="pro-qty">
          <IconButton aria-label="Decrease Quantity" onClick={()=>dispatch(decreaseQty(item.id))}>
            <ArrowLeftIcon />
          </IconButton>

          {item.qty}
          <IconButton aria-label="Increase Quantity" onClick={()=>dispatch(increaseQty(item.id))}>
            <ArrowRightIcon />
          </IconButton>
        </div>
      </td>
      <td className="cart__total">Rs. {parseInt(item.price * item.qty)}</td>
      <td className="cart__close">
        <IconButton aria-label="delete" onClick={()=>dispatch(removeFromCart(item.id))}>
          <CancelIcon />
        </IconButton>
      </td>
    </tr>
  );
});
