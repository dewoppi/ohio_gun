import React, { useEffect } from "react";
import styles from "./banner.module.scss";
import { BsCheck2 } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
export default function MyFunctionalComponent() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <section className={styles.banner}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <span>WPBakery & Elementor</span>
              <h1 className={styles.has}>
                {" "}
                Build a creative <br />
                showcase| <br />
                website
              </h1>
              <p>
                Quick and easy getting started <br />
                with carefully crafted ready-to-go templates.
              </p>
              <ul>
                <li>
                  <BsCheck2 /> Easy to Use
                </li>
                <li>
                  <BsCheck2 /> No coding
                </li>
                <li>
                  <BsCheck2 /> Life-Time
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className={styles.litlle}>
                <img
                  className={styles.photo}
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo17__Slide1__Mobile.jpeg"
                  alt=""
                />
                <img
                  className={styles.border}
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/iPhone.png"
                  alt=""
                />
              </div>
              <div className={styles.big}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Laptop.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.second}>
        <div className="container-fluid">
          <div className="col-md-4">
            <div className={styles.title}>
              <h3>
                {" "}
                <span>With best in class </span> features and design templates.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div
                className={styles.red}
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/FigmaShape.svg"
                  alt=""
                />
                <h4>
                  Theme’s Figma design <br /> source files go with your
                  purchase.
                </h4>
                <button>
                  <BsArrowUpRight /> Get Files
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={styles.grey}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h1>326+</h1>
                <h4>
                  Standard+ custom WPBakery <br /> shortcodes and Elementor
                  widgets
                </h4>
                <button>
                  <BsArrowUpRight /> Release Notes
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={styles.black}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <button>Design Quality</button>
                <p>
                  “One of the best themes I've ever used, didn't have to reach
                  support yet and I've been working 3 months with it.
                  Congratulations to Colabrio for their awesome work.”
                </p>
                <h6>by JoaquinLaser</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.third}>
        <div className="container-wide">
          <div className="row">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <span className={styles.next}>
                {" "}
                <BsCheck2 /> Package
              </span>
              <h3>
                {" "}
                <span>Bundled with </span>
                <br />
                popular premium plugins.
              </h3>
              <p>
                Ohio single license goes with WPBakery Page Builder, ACF Pro and
                Slider Revolution plugins that helps you to{" "}
                <b>save $123 in total.</b>
              </p>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.plugin}>
                <BsFillCameraVideoFill />
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/BundledIcon.svg"
                  alt=""
                />
                <div className={styles.info}>
                  <h5>
                    WPBakery <br />
                    Page Builder
                  </h5>
                  <div className={styles.sun}>
                    <span className={styles.huge}>$64</span>
                    <span className={styles.smal}>Free</span>
                  </div>
                </div>
              </div>
              <div className={styles.plugin}>
                <BsFillCameraVideoFill />
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/BundledIcon.svg"
                  alt=""
                />
                <div className={styles.info}>
                  <h5>
                    WPBakery <br />
                    Page Builder
                  </h5>
                  <div className={styles.sun}>
                    <span className={styles.huge}>$64</span>
                    <span className={styles.smal}>Free</span>
                  </div>
                </div>
              </div>
              <div className={styles.plugin}>
                <BsFillCameraVideoFill />
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/BundledIcon.svg"
                  alt=""
                />
                <div className={styles.info}>
                  <h5>
                    WPBakery <br />
                    Page Builder
                  </h5>
                  <div className={styles.sun}>
                    <span className={styles.huge}>$64</span>
                    <span className={styles.smal}>Free</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.inverse}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/TranslateIcon.svg"
                  alt=""
                />
                <h4>
                  Hey Guys!| <br />
                  Translate ready.
                </h4>
                <p>
                  Localize your website to any language using PO translation and
                  WMPL plugin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.demos}>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <span className={styles.title}>
                {" "}
                <BsCheck2 />
                Easy installation
              </span>
              <h2>
                {" "}
                <span>Carefully crafted</span> <br /> demo sites.
              </h2>
              <p>
                Choose and mix up demos and components with no coding skills.{" "}
                <br />
                <b>Only real business demo websites.</b>
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo31.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo4.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo6.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo23.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo10.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo25.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo2.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo17.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo5.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo22.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo9.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo13.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo28.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo11.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo19.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo24.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo12.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo15.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo7.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo8.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo18.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo29.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo14.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo16.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo20.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo1.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.personal}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/retina/Demo27.jpeg"
                  alt=""
                />
                <div className={styles.details}>
                  <h6>Digital Agency</h6>
                  <p>Agency, Studio, Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
