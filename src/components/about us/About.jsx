import "./about.css";

import ImageComm from "../../assets/about/mobile/image-commitment.jpg";
import ImageCommTablet from "../../assets/about/tablet/image-commitment.jpg";
import ImageCommDesktop from "../../assets/about/desktop/image-commitment.jpg";

function About() {
  return (
    <main className="about">
      <section className="about-first">
        <h1>About Us</h1>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>
      <section className="about-second">
        <img className="mobile" src={ImageComm} alt="" />
        <img className="tablet" src={ImageCommTablet} alt="" />
        <img className="desktop" src={ImageCommDesktop} alt="" />

        <div className="text-commitment">
          <h1>Our commitment</h1>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
