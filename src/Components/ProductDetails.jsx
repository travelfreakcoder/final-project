import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchSingleProductQuery } from "../react-query/product-query";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../react-redux/cartSlice";
import Loader from "../ui/Loader";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, error } = useFetchSingleProductQuery(id);

  console.log(data);

  const {cart}=useSelector((state)=>state.cart)

  const existingCartProduct=cart.find((item)=>item.id===data?.id)

  const dispatch=useDispatch()
  const navigate=useNavigate()


  const handleAddToCart=(item)=>{
    dispatch(addToCart(item))
    navigate("/cart")
  }

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
                <Link to="#">{data?.category} </Link>
                <span>{data?.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <img src={data?.images[0]} alt="image" />
                {/* <div className="product__details__pic__left product__thumb nice-scroll">
                  {
                    data?.images?.map((image,index)=>{
                      return <Link key={index} className="pt active" to="#product-1">
                      <img src={image} alt="" />
                    </Link>
                    })
                  }
                  
                  
                </div> */}
                {/* <div className="product__details__slider__content">
                  <div className="product__details__pic__slider owl-carousel">
                    {
                      data?.images?.map((image,index)=>{
                        return <img key={index} className="product__big__img" src={image} alt="" data-hash="product-1" />
                      })
                    }
                    
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>
                  {data?.title}
                  <span>Brand: {data?.brand}</span>
                </h3>
                <div className="rating">
                  Rating: {data?.rating}
                </div>
                <div className="product__details__price">
                  <span style={{textDecoration:"none"}}>Price: Rs. {data?.price}</span>
                </div>
                <p>
                  {data?.description}
                </p>
                <div className="product__details__button">
                  {/* <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div> */}
                  <Button variant="contained" style={{backgroundColor:"Violet"}} onClick={()=>handleAddToCart(data)} disabled={!!existingCartProduct}>{existingCartProduct?"Added To Cart":"Add To Cart"}</Button>
                  {/* <ul>
                    <li>
                      <Link to="#">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_adjust-horiz"></span>
                      </Link>
                    </li>
                  </ul> */}
                </div>
                <div className="product__details__widget">
                  {/* <span>Width: </span> {data?.width}
                  <span>Height: </span> {data?.height}
                  <span>Depth: </span> {data?.depth} */}
                  {/* <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label htmlFor="stockin">
                          In Stock
                          <input type="checkbox" id="stockin" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        <label htmlFor="red">
                          <input
                            type="radio"
                            name="color__radio"
                            id="red"
                            checked
                          />
                          <span className="checkmark"></span>
                        </label>
                        <label htmlFor="black">
                          <input type="radio" name="color__radio" id="black" />
                          <span className="checkmark black-bg"></span>
                        </label>
                        <label htmlFor="grey">
                          <input type="radio" name="color__radio" id="grey" />
                          <span className="checkmark grey-bg"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        <label htmlFor="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label htmlFor="s-btn">
                          <input type="radio" id="s-btn" />s
                        </label>
                        <label htmlFor="m-btn">
                          <input type="radio" id="m-btn" />m
                        </label>
                        <label htmlFor="l-btn">
                          <input type="radio" id="l-btn" />l
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping</p>
                    </li>
                  </ul> */}
                  
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <h4 style={{color:"brown",fontFamily:"sans-serif"}}>Customer Reviews:</h4>

              {
                data?.reviews?.map((item,index)=>{
                  return <div style={{backgroundColor:"rgb(229,221,220)",textAlign:"center", marginTop:"20px",marginBottom:"20px",padding:"10px",borderRadius:"20px"}} key={index}>
                    <p style={{fontWeight:"bold"}}>{item.rating} stars</p>
                    <p style={{fontWeight:"bold"}}>{item.comment}</p>
                    <p style={{fontWeight:"bold"}}><span style={{marginRight:"100px"}}>Name: {item.reviewerName}  </span><span>Email: {item.reviewerEmail}</span></p>

                  </div>
                })
              }

              {/* <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-toggle="tab"
                      to="#tabs-1"
                      role="tab"
                    >
                      Description
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-toggle="tab"
                      to="#tabs-2"
                      role="tab"
                    >
                      Specification
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-toggle="tab"
                      to="#tabs-3"
                      role="tab"
                    >
                      Reviews ( 2 )
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <h6>Specification</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: 'url("img/product/related/rp-1.jpg")',
                  }}
                >
                  <div className="label new">New</div>
                  <ul className="product__hover">
                    <li>
                      <Link
                        to="img/product/related/rp-1.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="#">Buttons tweed blazer</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: 'url("img/product/related/rp-2.jpg")',
                  }}
                >
                  <ul className="product__hover">
                    <li>
                      <Link
                        to="img/product/related/rp-2.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="#">Flowy striped skirt</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 49.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: 'url("img/product/related/rp-3.jpg")',
                  }}
                >
                  <div className="label stockout">out of stock</div>
                  <ul className="product__hover">
                    <li>
                      <Link
                        to="img/product/related/rp-3.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="#">Cotton T-Shirt</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: 'url("img/product/related/rp-4.jpg")',
                  }}
                >
                  <ul className="product__hover">
                    <li>
                      <Link
                        to="img/product/related/rp-4.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="#">Slim striped pocket shirt</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
          </div> */}
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

export default ProductDetails;
