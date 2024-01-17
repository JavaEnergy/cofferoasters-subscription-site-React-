import "./home.css";
import "../../reset.css";
import Button from "../button/Button";
import imageEsp from "../../assets/home/desktop/image-gran-espresso.png";
import imagePlanalto from "../../assets/home/desktop/image-planalto.png";
import imagePicollo from "../../assets/home/desktop/image-piccollo.png";
import imagedanche from "../../assets/home/desktop/image-danche.png";

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
    </main>
  );
}

export default Home;
