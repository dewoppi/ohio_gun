import React from "react";
import styles from "./contact.module.scss";
import { BsChevronRight } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <main>
      <section className={styles.holder}>
        <div className="container">
          <div className={styles.cont}></div>
          <h1>Contact: Agency</h1>
          <p>Leave us a little info, and we’ll be in touch. </p>
          <span>Send Us an Email</span>
        </div>
      </section>

      <section className={styles.home}>
        <ul>
          <li>
            Home <BsChevronRight />
          </li>
          <li>Contact: Agency</li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-4 p-0">
              <div className={styles.inner}>
                <h4>Get in touch</h4>
                <div className="container">
                  <div className="row">
                    <div className="col-6 p-0">
                      <p>
                        Work Inquiries <strong>+1.809.120.6705</strong>
                      </p>
                      <p>
                        Assistance hours: <br /> Monday – Friday <br /> 6 am to
                        8 pm EST
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        Careers & Press <strong>+1.809.120.6705</strong>
                      </p>
                      <p>
                        Assistance hours: <br /> Monday – Friday <br /> 6 am to
                        8 pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-3">
              <h4>Post address</h4>
              <p>
                541 Melville Ave, Palo Alto, <br />
                CA 94301, <br />
                United States
              </p>
            </div>
            <div className="col-3">
              <h4>Social media</h4>
              <p>
                Facebook <br /> Instagram <br /> Twitter
              </p>
            </div>
          </div>
        </div>
        <span></span>
      </section>

      <section className={styles.forms}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form>
                <label htmlFor="">Name (required)</label>
                <input type="text" name="" id="" placeholder="Your name" />
                <label htmlFor="">Phone(optional)</label>
                <input type="text" placeholder="Your actual phone number" />
              </form>
            </div>
            <div className="col-md-4">
              <form>
                <label htmlFor="">Company (required)</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your company name"
                />
                <label htmlFor="">Subject (optional)</label>
                <input type="text" placeholder="Chose a subject" />
              </form>
            </div>
            <div className="col-md-4">
              <form>
                <label htmlFor="">Email (required)</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your working email"
                />
                <label htmlFor="">Choose a Budget(USD)</label>
                <input type="text" placeholder="Less than 5K" />
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className={styles.fortwo}>
                <form>
                  <label htmlFor="">Project details</label>

                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="10"
                    placeholder="Brief project details"
                  ></textarea>
                  <div className={styles.last}>
                    <input
                      className={styles.chek}
                      type="checkbox"
                      name="checkbox"
                    />
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </div>
                </form>
                <button>Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            width="100%"
            height="412"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=vilapisina&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </section>

      <section className={styles.black}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.left}>
                <p>Careers</p>
                <h2>Join our team.</h2>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.butt}>
                See Open Positions <BsArrowRight />
              </div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className="row">
            <div className="col-6">
              <div className={styles.text}>
                <p>
                  We’re <strong>a team of creatives</strong> who are excited
                  about unique ideas and help fin-tech companies to{" "}
                  <strong>create amazing identity</strong> by crafting top-notch
                  UI/UX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
