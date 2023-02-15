import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>
              Reliable and <br /> Regular Updates
            </h4>
            <p>
              Life-time <b>reliable and regular updates</b> going with your
              purchase.{" "}
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>
              7+ Years <br /> Enavto Elite Author
            </h4>
            <p>
              Calabrio is <b>a time-tested elite author</b> with 7+ years of
              experience.{" "}
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>
              5 Stars <br /> Customer Support
            </h4>
            <p>
              More than <b>8K+ resolved inquiries </b> and happy customer
              reviews.{" "}
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>
              Feedback <br /> Appreciative
            </h4>
            <p>
              Have a good idea or an improvement? <b>It can be ended up</b> in
              our updates!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
