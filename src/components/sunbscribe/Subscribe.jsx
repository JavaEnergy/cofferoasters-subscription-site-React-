import "./subscribe.css";
import "../../reset.css";
import Steps from "../steps/Steps";
import { useState } from "react";

const Subscribe = () => {
  const [visibleQuestion, setVisibleQuestion] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleQuestionClick = (index) => {
    setVisibleQuestion((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <main>
      <section className="subscribe-first">
        <h1>Create a plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>
      <Steps />
      <section>
        <div className="navigation">
          <div className="pref">
            <p>
              <span>01</span> Preferences
            </p>
          </div>
          <hr />
          <div className="type">
            <p>
              <span>02</span> Bean Type
            </p>
          </div>
          <hr />
          <div className="quantity">
            <p>
              <span>03</span> Quantity
            </p>
          </div>
          <hr />
          <div className="grind">
            <p>
              <span>04</span> Grind Option
            </p>
          </div>
          <hr />
          <div className="deliveries">
            <p>
              <span>05</span> Deliveries
            </p>
          </div>
        </div>
      </section>
      <section className="carousell">
        <div className="firstQuestion" onClick={() => handleQuestionClick(0)}>
          <h2>How do you drink your coffee?</h2>
        </div>
        <div className="firstAnswer answer">
          {visibleQuestion[0] && (
            <>
              <div className="capsule border">
                <h3>Capsule</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="filter border">
                <h3>Filter</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="espresso border">
                <h3>Espresso</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </>
          )}
        </div>
        <div className="secondQuestion" onClick={() => handleQuestionClick(1)}>
          <h2>What type of coffee?</h2>
        </div>
        {visibleQuestion[1] && (
          <>
            <div className="secondAnswer answer">
              <div className="singleOrigin border">
                <h3>Single Origin</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="decaf border">
                <h3>Decaf</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="blended border">
                <h3>Blended</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          </>
        )}
        <div className="thirdQuestion" onClick={() => handleQuestionClick(2)}>
          <h2>How much would you like?</h2>
        </div>
        {visibleQuestion[2] && (
          <>
            <div className="thirdAnswer answer">
              <div className="250g border">
                <h3>250g</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="500g border">
                <h3>500g</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="1000g border">
                <h3>1000g</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          </>
        )}
        <div className="forthQuestion" onClick={() => handleQuestionClick(3)}>
          <h2>Want us to grind them?</h2>
        </div>
        {visibleQuestion[3] && (
          <>
            <div className="forthAnswer answer">
              <div className="wholebean border">
                <h3>Wholebean</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="forthFilter border">
                <h3>Filter</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="cafetiére border">
                <h3>Cafetiére</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          </>
        )}

        <div className="fifthQuestion" onClick={() => handleQuestionClick(4)}>
          <h2>How often should we deliver?</h2>
        </div>
        {visibleQuestion[4] && (
          <>
            <div className="fifthAnswer answer">
              <div className="week border">
                <h3>Every week</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="weeks border">
                <h3>Every 2 weeks</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="month border">
                <h3>Every month</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Subscribe;
