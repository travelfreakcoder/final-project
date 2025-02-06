import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { decreaseQty, increaseQty, removeFromCart } from "../react-redux/cartSlice"

const Cart = () => {


    const {cart}=useSelector((state)=>state.cart)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const subtotal = cart.map((item) => item.price * item.qty).reduce((a, c) => a + c, 0)
  const shipping = subtotal > 0 ? 50 : 0; // Shipping is 0 if no items are in the cart
  const total = subtotal + shipping;

  return (
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {
                       cart?.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className="cart__product__item">
                              <img src={item.images[0]} alt="Image"  style={{ width: "200px", height: "200px" }} />
                              <div className="cart__product__item__title">
                                <h6>{item.title}</h6>
                                <p>
                                  <span style={{ color: "brown", }}>Rating: </span>{" "}
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
                            <td>
                              <IconButton aria-label="delete" onClick={()=>dispatch(removeFromCart(item.id))} >
                                <CancelIcon />
                              </IconButton>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn" >
                <Link to="/shop" style={{backgroundColor:"violet",borderRadius:"10px"}}>Continue Shopping</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn update__btn">
                {/* <Link to="#">
                  <span className="icon_loading"></span> Update cart
                </Link> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="discount__content">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal: <span>Rs. {parseInt(subtotal)}</span>
                  </li>
                  <li>Shipping: <span>Rs. {shipping}</span> </li>
                  <li>
                    Total: <span>Rs. {parseInt(total)}</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: 'url("/img/instagram/insta-1.jpg")' }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="#">@ ashion_shop</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: 'url("/img/instagram/insta-2.jpg")' }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="#">@ ashion_shop</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: 'url("/img/instagram/insta-3.jpg")' }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="#">@ ashion_shop</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: 'url("/img/instagram/insta-4.jpg")' }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="#">@ ashion_shop</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: 'url("/img/instagram/insta-5.jpg")' }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="#">@ ashion_shop</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: 'url("/img/instagram/insta-6.jpg")' }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="#">@ ashion_shop</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Cart;
