import React from "react";
import styles from "./blog.module.scss";
const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.classic}>
        <h1>Classic</h1>
        <div className={styles.build}>
          <p className={styles.active}>WPBakery</p>
          <p className={styles.non}>Elementor</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className={styles.image}>
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_21-1764x2048.jpeg"
                alt=""
              />
              <div className={styles.litlleimg}>
                <img
                  src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.image}>
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/9awbvC7w-clb_blog_3-min.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-4">
            <div className={styles.image}>
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/H4t8I7UW-clb_blog_20-min.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className={styles.image}>
              <img
                src="	https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5.jpg"
                alt=""
              />
              <div className={styles.litlleimg}>
                <img
                  src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.image}>
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-4">
            <div className={styles.image}>
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_17.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
