import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { deepOrange } from "@mui/material/colors";

import { logout } from "../react-redux/authSlice";

const Header = () => {
  const settings = ["Profile", "Logout"];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === "Logout") {
      dispatch(logout());
      navigate("/");
    }
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      {/* <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
            <li><span className="icon_search search-switch"></span></li>
            <li><Link to="#"><span className="icon_heart_alt"></span>
                <div className="tip">2</div>
            </Link></li>
            <li><Link to="#"><span className="icon_bag_alt"></span>
                <div className="tip">2</div>
            </Link></li>
        </ul>
        <div className="offcanvas__logo">
            <Link to="./index.html"><img src="img/logo.png" alt=""/></Link>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
            <Link to="#">Login</Link>
            <Link to="#">Register</Link>
        </div>
    </div> */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <Link to="./index.html">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shopping Cart</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  {/* <ul className="dropdown">
                                    <li><Link to="./product-details.html">Product Details</Link></li>
                                    <li><Link to="./shop-cart.html">Shop Cart</Link></li>
                                    <li><Link to="./checkout.html">Checkout</Link></li>
                                    <li><Link to="./blog-details.html">Blog Details</Link></li>
                                </ul> */}
                  {/* </li> */}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleCloseUserMenu(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/* <div className="header__right__auth">
                            <Link to="#">Login</Link>
                            <Link to="#">Register</Link>
                        </div> */}
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
