import { Link } from "react-router-dom";

const Blog = () => {
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
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic large__item set-bg" style={{backgroundImage:'url("img/blog/blog-1.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-7.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Pot Party! See Farrah Abraham Flaunt Smoking Body At...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-9.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">CMT Awards 2019 Red Carpet Arrivals Carrie Underwood, Sheryl...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-2.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-4.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At Stagecoach...</Link>
                            </h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-8.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-10.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-3.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2019...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{backgroundImage:'url("img/blog/blog-5.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Billboard Music Awards: Best, Worst & Wackiest Dresses On The...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic large__item set-bg" style={{backgroundImage:'url("img/blog/blog-6.jpg")'}}></div>
                        <div className="blog__item__text">
                            <h6><Link to="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</Link></h6>
                            <ul>
                                <li>by <span>Ema Timahe</span></li>
                                <li>Seb 17, 2019</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <Link to="#" className="primary-btn load-btn">Load more posts</Link>
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

export default Blog;
