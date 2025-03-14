import Pagination from "@/components/common/Pagination";
import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import Form5 from "@/components/newsletterForms/Form5";

import { blogs12 } from "@/data/blogs";

import { modernMultipage, modernMultipageDark } from "@/data/menu";

import { Link } from "react-router-dom";
import ParallaxContainer from "@/components/common/ParallaxContainer";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Modern Blogs Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function ModernBlogPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-modern">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header8 links={modernMultipageDark} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-modern/section-bg-7.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative">
                  <div className="mb-20">
                    <div className="mb-10">
                      <Link
                        to="/modern-multi-page"
                        className="link-hover-anim align-middle"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            <i
                              className="icon-arrow-left2 size-14"
                              aria-hidden="true"
                            ></i>{" "}
                            Back to home
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            <i
                              className="icon-arrow-left2 size-14"
                              aria-hidden="true"
                            ></i>{" "}
                            Back to home
                          </span>
                        </span>
                      </Link>
                    </div>
                    <hr className="white mt-0 mb-0" />
                  </div>
                  <div className="row">
                    <div className="col-9 col-sm-8">
                      <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                        <span className="d-block wow fadeRotateIn">
                          {" "}
                          Selected{" "}
                        </span>
                        <span className="d-block text-end wow fadeRotateIn">
                          Works
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Scroll Down */}
                <div
                  className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                  data-wow-offset={0}
                >
                  <div className="full-wrapper text-end">
                    <span className="scroll-down-2">
                      <img
                        width="50"
                        height="73"
                        src="/assets/images/demo-modern/arrow-down-1-white.svg"
                        alt="Scroll Down"
                      />
                    </span>
                  </div>
                </div>
                {/* End Scroll Down */}
              </ParallaxContainer>
              <>
                {/* Blog Section */}
                <section
                  className="page-section bg-dark-1 light-content"
                  id="blog"
                >
                  <div className="container position-relative">
                    {/* Blog Grid */}
                    <div className="row gx-5 mt-n50 mt-sm-n30 mb-50 mb-sm-30">
                      {/* Post Item */}
                      {blogs12.map((elm, i) => (
                        <div
                          key={i}
                          className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30"
                        >
                          <div className="post-prev-2-img">
                            <Link to={`/modern-blog-single/${elm.id}`}>
                              <img
                                src={elm.imgSrc}
                                width={700}
                                height={479}
                                alt="Image Description"
                              />
                            </Link>
                          </div>
                          <h3 className="post-prev-2-title">
                            <Link to={`/modern-blog-single/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h3>
                          <div className="post-prev-2-info">{elm.date}</div>
                        </div>
                      ))}
                      {/* End Post Item */}

                      {/* End Post Item */}
                    </div>
                    {/* End Blog Grid */}
                    {/* Pagination */}
                    <Pagination className={"pagination"} />
                    {/* End Pagination */}
                  </div>
                </section>
                {/* End Blog Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Newsletter Section */}
                <section className="small-section bg-dark-1 light-content">
                  <div className="container">
                    {/* Newsletter Form */}
                    <div className="row wow fadeInUp">
                      <div className="col-lg-8 offset-lg-2">
                        <h2 className="section-title-tiny mb-30">
                          <span className="icon-ellipse" /> Subscribe our
                          newsletter
                        </h2>
                        <Form5 />
                      </div>
                    </div>
                    {/* End Newsletter Form */}
                  </div>
                </section>
              </>
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
