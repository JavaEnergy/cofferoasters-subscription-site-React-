import "./home.css";
import "../../reset.css";
import Button from "../button/Button";
import imageEsp from "../../assets/home/desktop/image-gran-espresso.png";
import imagePlanalto from "../../assets/home/desktop/image-planalto.png";
import imagePicollo from "../../assets/home/desktop/image-piccollo.png";
import imagedanche from "../../assets/home/desktop/image-danche.png";
import coffeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import present from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";
import Steps from "../steps/Steps";

function Home() {
  return (
    <main>
      <section className="first">
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <div className="btn">
          <Button />
        </div>
      </section>
      <section className="second">
        <h1>our collection</h1>
        <div className="box">
          <div className="espresso card">
            <img src={imageEsp} alt="" />
            <div className="box-text">
              <h2>Gran Espresso</h2>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>{" "}
          <div className="planalto card">
            <img src={imagePlanalto} alt="" />
            <div className="box-text">
              <h2>Planalto</h2>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>{" "}
          <div className="piccollo card">
            <img src={imagePicollo} alt="" />
            <div className="box-text">
              <h2>Piccollo</h2>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>{" "}
          <div className="danche card">
            <img src={imagedanche} alt="" />
            <div className="box-text">
              <h2>Danche</h2>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className="why">
        <div className="whyUs">
          <h1>Why choose us?</h1>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="offerCards">
          <div className="offcard quality">
            <img src={coffeBean} alt="" />
            <h1>Best quality</h1>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="offcard quality">
            <img src={present} alt="" />
            <h1>Exclusive benefits</h1>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div className="offcard quality">
            <img src={truck} alt="" />
            <h1>Free shipping</h1>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </section>
      <Steps />
      <div className="home-last-btn">
        <Button />
      </div>
    </main>
  );
}

export default Home;
