import { useFetchProductsQuery } from "../react-query/product-query";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../react-redux/cartSlice";
import { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { set } from "react-hook-form";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Loader from "../ui/Loader";

const Shop = () => {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [sortType, setSortType] = useState("price");
  const [sortOrder, setSortOrder] = useState({
    price: "default",
    title: "default",
  });
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useFetchProductsQuery();

  console.log(data);

  const categories = [...new Set(data?.map((product) => product.category))];

  const filterData = data
    ?.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
    .filter((item) =>
      selectedCategory ? item.category === selectedCategory : true
    );

    const sortedData = data
    ? isSorted
      ? [...filterData].sort((a, b) => {
          if (sortType === "price") {
            return sortOrder.price === "asc"
              ? a.price - b.price
              : b.price - a.price;
          } else if (sortType === "title") {
            return sortOrder.title === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          }
        })
      : filterData
    : [];

  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(cart);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  const handleProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const handleSortClick = (e) => {
    const value = e.target.value;
    if (value === "default") {
      setIsSorted(false);
      setSortOrder({ price: "default", title: "default" });
    } else {
      setIsSorted(true);
      if (value === "asc" || value === "desc") {
        setSortType("price");
        setSortOrder({ price: value, title: "default" });
      } else if (value === "title-asc" || value === "title-desc") {
        setSortType("title");
        setSortOrder({
          title: value === "title-asc" ? "asc" : "desc",
          price: "default",
        });
      }
    }
  };

  console.log(sortedData);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage != page &&
      selectedPage <= Math.ceil(sortedData.length / 10)
    )
      setPage(selectedPage);
  };

  if (isLoading) {
    return <h1><Loader/></h1>;
  }

  if (isFetching) {
    return <h1><Loader/></h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

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
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="shop__sidebar">
                <input
                  type="text"
                  placeholder="Search by title"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />

                <div className="sidebar__categories">
                  <div className="section-title">
                    <h4 style={{ marginTop: "30px" }}>Categories</h4>
                  </div>
                  <h5
                    style={{
                      color: "blue",
                      fontFamily: "sans-serif",
                      backgroundColor: "limegreen",
                      marginBottom: "10px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                    onClick={() => setSelectedCategory("")}
                  >
                    View All
                  </h5>
                  {categories.map((category, index) => {
                    return (
                      <h5
                        style={{
                          color: "blue",
                          fontFamily: "sans-serif",
                          backgroundColor: "limegreen",
                          marginBottom: "10px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          textAlign: "center",
                          borderRadius: "20px",
                        }}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.charAt(0).toUpperCase() +
                          category.slice(1).toLowerCase()}
                      </h5>
                    );
                  })}
                </div>
                {/* <div className="sidebar__filter">
                  <div className="section-title">
                    <h4>Shop by price</h4>
                  </div>
                  <div className="filter-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="33"
                      data-max="99"
                    ></div>
                    <div className="range-slider">
                      <div className="price-input">
                        <p>Price:</p>
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                  <Link to="#">Filter</Link>
                </div> */}
                {/* <div className="sidebar__sizes">
                  <div className="section-title">
                    <h4>Shop by size</h4>
                  </div>
                  <div className="size__list">
                    <label for="xxs">
                      xxs
                      <input type="checkbox" id="xxs" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="xs">
                      xs
                      <input type="checkbox" id="xs" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="xss">
                      xs-s
                      <input type="checkbox" id="xss" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="s">
                      s
                      <input type="checkbox" id="s" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="m">
                      m
                      <input type="checkbox" id="m" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="ml">
                      m-l
                      <input type="checkbox" id="ml" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="l">
                      l
                      <input type="checkbox" id="l" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="xl">
                      xl
                      <input type="checkbox" id="xl" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div> */}
                {/* <div className="sidebar__color">
                  <div className="section-title">
                    <h4>Shop by size</h4>
                  </div>
                  <div className="size__list color__list">
                    <label for="black">
                      Blacks
                      <input type="checkbox" id="black" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="whites">
                      Whites
                      <input type="checkbox" id="whites" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="reds">
                      Reds
                      <input type="checkbox" id="reds" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="greys">
                      Greys
                      <input type="checkbox" id="greys" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="blues">
                      Blues
                      <input type="checkbox" id="blues" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="beige">
                      Beige Tones
                      <input type="checkbox" id="beige" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="greens">
                      Greens
                      <input type="checkbox" id="greens" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="yellows">
                      Yellows
                      <input type="checkbox" id="yellows" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-9 col-md-9">
              <Box style={{display:"flex",justifyContent:"end",marginBottom:"20px"}}>
              <FormControl style={{ width: "200px"}}>
                      <InputLabel id="demo-simple-select-label">
                        Sort By-
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={
                          sortType === "price"
                            ? sortOrder.price
                            : sortOrder.title
                        }
                        onChange={handleSortClick}
                        label="Sort By: "
                      >
                        <MenuItem value={"default"}>
                          <span style={{ color: "grey" }}>View All</span>
                        </MenuItem>
                        <MenuItem value="asc">Price: Low to High</MenuItem>
                        <MenuItem value="desc">Price: High to Low</MenuItem>
                        <MenuItem value="title-asc">Title: A to Z</MenuItem>
                        <MenuItem value="title-desc">Title: Z to A</MenuItem>
                      </Select>
                    </FormControl>
              </Box>
              {/* <div style={{textAlign:"right"}}>
            <IconButton onClick={() => handleSortClick("price")} aria-label={sortOrder.price==="asc"?"Sort by price high to low":"Sort by price low to high"} style={{textAlign:""}}>
                <SortIcon />
            </IconButton>
            <IconButton onClick={() => handleSortClick("name")} aria-label={sortOrder.name==="asc"?"Sort by name Z to A":"Sort by name A to Z"}>
                <SortByAlphaIcon />
            </IconButton>
            </div> */}
              <div className="row">
                {sortedData?.slice(page * 10 - 10, page * 10).map((item) => {
                  const existingCartProduct = cart.find(
                    (cartItem) => cartItem.id === item.id
                  );

                  return (
                    <div key={item.id} className="col-lg-4 col-md-6">
                      <div
                        className="product__item"
                        style={{ minHeight: "600px" }}
                      >
                        <div
                          className="product__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${item?.images?.[0]})`,
                            backgroundSize: "contain",
                          }}
                          onClick={() => handleProductDetails(item.id)}
                        >
                          {/* <div className="label new">New</div> */}
                          {/* <ul className="product__hover">
                                        <li><Link to="img/shop/shop-1.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                    </ul> */}
                        </div>
                        <div className="product__item__text">
                          <h6 style={{ color: "brown" }}>{item?.title}</h6>
                          {/* <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div> */}
                          <div
                            className="product__price"
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                          >
                            Rs. {item?.price}
                          </div>
                          <div>
                            <span
                              style={{ color: "violet", fontWeight: "bold" }}
                            >
                              Category: {item?.category}
                            </span>
                          </div>
                          <Button
                            variant="contained"
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                            disabled={!!existingCartProduct}
                            onClick={() => handleAddToCart(item)}
                          >
                            ADD TO CART
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-lg-12 text-center">
                  {sortedData.length > 0 && (
                    <div>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => selectPageHandler(page - 1)}
                        className={page > 1 ? "" : "pagination_disabled"}
                      >
                        ⬅️
                      </span>
                      {[...Array(Math.ceil(sortedData.length / 10))].map(
                        (_, index) => {
                          return (
                            <span
                              key={index}
                              style={{
                                width: "35px",
                                height: "35px",
                                padding: "5px",
                                border: "1px solid black",
                                marginRight: "20px",
                                marginLeft: "20px",
                                display: "inline-block",
                                borderRadius: "10px",
                                backgroundColor:
                                  page === index + 1 ? "grey" : "white",
                                color: "brown",
                                cursor: "pointer",
                              }}
                              onClick={() => selectPageHandler(index + 1)}
                            >
                              {index + 1}
                            </span>
                          );
                        }
                      )}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => selectPageHandler(page + 1)}
                        className={
                          page < Math.ceil(sortedData.length / 10)
                            ? ""
                            : "pagination_disabled"
                        }
                      >
                        ➡️
                      </span>
                    </div>
                  )}
                </div>
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

export default Shop;
