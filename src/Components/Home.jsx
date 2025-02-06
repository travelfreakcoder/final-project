import { Link } from "react-router-dom";

const Home = () => {

 
  return (
    <>
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item set-bg"
                style={{
                  backgroundImage: 'url("img/categories/category-1.jpg")',
                }}
              >
                <div className="categories__text">
                  <h1>Women’s fashion</h1>
                  <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage: 'url("img/categories/category-2.jpg")',
                    }}
                  >
                    <div className="categories__text">
                      <h4>Men’s fashion</h4>
                      <p>358 items</p>
                      <Link to="/shop">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage: 'url("img/categories/category-3.jpg")',
                    }}
                  >
                    <div className="categories__text">
                      <h4>Kid’s fashion</h4>
                      <p>273 items</p>
                      <Link to="/shop">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage: 'url("img/categories/category-4.jpg")',
                    }}
                  >
                    <div className="categories__text">
                      <h4>Cosmetics</h4>
                      <p>159 items</p>
                      <Link to="/shop">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage: 'url("img/categories/category-5.jpg")',
                    }}
                  >
                    <div className="categories__text">
                      <h4>Accessories</h4>
                      <p>792 items</p>
                      <Link to="/shop">Shop now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="banner set-bg"
        style={{
          backgroundImage: 'url("img/banner/banner-1.jpg")',
          marginTop: "50px",
          marginBottom: "50px",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 m-auto">
              <div className="banner__slider owl-carousel">
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/shop">Shop now</Link>
                  </div>
                </div>
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/shop">Shop now</Link>
                  </div>
                </div>
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/shop">Shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discount" style={{marginTop: "50px",marginBottom: "50px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="discount__pic">
                <img src="img/discount.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="discount__text">
                <div className="discount__text__title">
                  <span>Discount</span>
                  <h2>Summer 2019</h2>
                  <h5>
                    <span>Sale</span> 50%
                  </h5>
                </div>
                <div className="discount__countdown" id="countdown-time">
                  <div className="countdown__item">
                    <span>22</span>
                    <p>Days</p>
                  </div>
                  <div className="countdown__item">
                    <span>18</span>
                    <p>Hour</p>
                  </div>
                  <div className="countdown__item">
                    <span>46</span>
                    <p>Min</p>
                  </div>
                  <div className="countdown__item">
                    <span>05</span>
                    <p>Sec</p>
                  </div>
                </div>
                <Link to="/shop">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-car"></i>
                <h6>Free Shipping</h6>
                <p>For all oder over $99</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-money"></i>
                <h6>Money Back Guarantee</h6>
                <p>If good have Problems</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-support"></i>
                <h6>Online Support 24/7</h6>
                <p>Dedicated support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-headphones"></i>
                <h6>Payment Secure</h6>
                <p>100% secure payment</p>
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

export default Home;
