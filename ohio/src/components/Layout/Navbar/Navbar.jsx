import React from "react";
import styles from "./navbar.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { BsFilterRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <section className={styles.head}>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className={styles.logo}>
                <button>
                  <BsFilterRight />{" "}
                </button>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-10">
              <ul className={styles.menu}>
                <li className={styles.elements}>
                  Elements <BsChevronDown />
                  <div className="container">
                    <div className={styles.second}>
                      <div className="row">
                        <div className="col-2">
                          <ul>
                            <span>WIDGET</span>
                            <li>Accordion</li>
                            <li>Badge</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress</li>
                            <li>Clients Logo</li>
                          </ul>
                        </div>
                        <div className="col-2">
                          <ul>
                            <span>WIDGET</span>
                            <li>Accordion</li>
                            <li>Badge</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress</li>
                            <li>Clients Logo</li>
                          </ul>
                        </div>
                        <div className="col-2">
                          <ul>
                            <span>WIDGET</span>
                            <li>Accordion</li>
                            <li>Badge</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress</li>
                            <li>Clients Logo</li>
                          </ul>
                        </div>
                        <div className="col-2">
                          <ul>
                            <span>WIDGET</span>
                            <li>Accordion</li>
                            <li>Badge</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress</li>
                            <li>Clients Logo</li>
                          </ul>
                        </div>
                        <div className="col-2">
                          <ul>
                            <span>MENUS</span>
                            <li>Accordion</li>
                            <li>Badge</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress</li>
                            <li>Clients Logo</li>
                          </ul>
                        </div>
                        <div className="col-2">
                          <ul>
                            <span>HAMBURGER MENUS</span>
                            <li>Accordion</li>
                            <li>Badge</li>
                            <li>Banner</li>
                            <li>Blog Posts</li>
                            <li>Button</li>
                            <li>Call to Action</li>
                            <li>Carousel</li>
                            <li>Circle Progress</li>
                            <li>Clients Logo</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  Portfolio <BsChevronDown />
                </li>
                <li>
                  Blog
                  <BsChevronDown />
                </li>
                <li>
                  Shop
                  <BsChevronDown />
                </li>
                <li>
                  Pages
                  <BsChevronDown />
                </li>
                <li>
                  Help
                  <BsChevronDown />
                </li>
                <li>
                  Changelog
                  <BsChevronDown />
                </li>
                <button className={styles.but}>Getting Started</button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
