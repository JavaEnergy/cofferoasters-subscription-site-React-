import "./subscribe.css";
import "../../reset.css";
import Steps from "../steps/Steps";
import { useState } from "react";
import Button from "../button/Button";

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

  const [answerOne, setAnswerOne] = useState("...");
  const [answerTwo, setAnswerTwo] = useState("...");
  const [answerThree, setAnswerThree] = useState("...");
  const [answerFour, setAnswerFour] = useState("...");
  const [answerFive, setAnswerFive] = useState("...");

  const getAnswerOne = (value) => {
    setAnswerOne(value);
  };
  const getAnswerTwo = (value) => {
    setAnswerTwo(value);
  };
  const getAnswerThree = (value) => {
    setAnswerThree(value);
  };
  const getAnswerFour = (value) => {
    setAnswerFour(value);
  };
  const getAnswerFive = (value) => {
    setAnswerFive(value);
  };
  const [resumeVisible, setresumeVisible] = useState(false);

  function resume() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setresumeVisible(!resumeVisible);
  }

  return (
    <main>
      {resumeVisible && (
        <>
          <div class="backdrop" onClick={resume}></div>
          <section className="orderSummary-top">
            <div className="summary-head">
              <div className="summary-head-h">
                <h1>Order Summary</h1>
              </div>
              <div className="summary-head-text">
                <h3>
                  “I drink my coffee as <span>{answerOne} </span>, with a
                  <span>{answerTwo} </span>type of bean.{" "}
                  <span>{answerThree} </span>
                  ground ala
                  <span>{answerFour} </span>, sent to me{" "}
                  <span>{answerFive} </span>”
                </h3>
                <p>
                  Is this correct? You can proceed to checkout or go back to
                  plan selection if something is off. Subscription discount
                  codes can also be redeemed at the checkout.
                </p>
              </div>
              <div className="top-btn-div">
                <Button textContent="Checkout - $14.00 / mo" />
              </div>
              <div className="tablet">
                <h2>$14.00 / mo</h2>
                <Button textContent="Checkout" />
              </div>
            </div>
          </section>
        </>
      )}

      <section className="subscribe-first">
        <h1>Create a plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>
      <Steps />
      <section className="twosections">
        <section>
          <div className="navigation">
            <div
              className="pref pointer"
              onClick={() => handleQuestionClick(0)}
            >
              <p style={{ color: visibleQuestion[0] ? "black" : "#333D4B" }}>
                <span
                  style={{ color: visibleQuestion[0] ? "#0E8784" : "#333D4B" }}
                >
                  01
                </span>{" "}
                Preferences
              </p>
            </div>
            <hr />
            <div
              className="type pointer"
              onClick={() => handleQuestionClick(1)}
            >
              <p style={{ color: visibleQuestion[1] ? "black" : "#333D4B" }}>
                <span
                  style={{ color: visibleQuestion[1] ? "#0E8784" : "#333D4B" }}
                >
                  02
                </span>{" "}
                Bean Type
              </p>
            </div>
            <hr />
            <div
              className="quantity pointer"
              onClick={() => handleQuestionClick(2)}
            >
              <p style={{ color: visibleQuestion[2] ? "black" : "#333D4B" }}>
                <span
                  style={{ color: visibleQuestion[2] ? "#0E8784" : "#333D4B" }}
                >
                  03
                </span>{" "}
                Quantity
              </p>
            </div>
            <hr />
            <div
              className="grind pointer"
              onClick={() => handleQuestionClick(3)}
            >
              <p style={{ color: visibleQuestion[3] ? "black" : "#333D4B" }}>
                <span
                  style={{ color: visibleQuestion[3] ? "#0E8784" : "#333D4B" }}
                >
                  04
                </span>{" "}
                Grind Option
              </p>
            </div>
            <hr />
            <div
              className="deliveries pointer"
              onClick={() => handleQuestionClick(4)}
            >
              <p style={{ color: visibleQuestion[4] ? "black" : "#333D4B" }}>
                <span
                  style={{ color: visibleQuestion[4] ? "#0E8784" : "#333D4B" }}
                >
                  05
                </span>{" "}
                Deliveries
              </p>
            </div>
          </div>
        </section>
        <section className="carousell">
          <div
            className="firstQuestion cursor"
            onClick={() => handleQuestionClick(0)}
          >
            <h2>How do you drink your coffee?</h2>
          </div>
          {visibleQuestion[0] && (
            <>
              <div className="firstAnswer answer">
                <div
                  className={
                    "capsule pointer border " +
                    (answerOne === "Capsule" ? "color" : "")
                  }
                  onClick={() => getAnswerOne("Capsule")}
                >
                  <h3>Capsule</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div
                  className={
                    "filter pointer border " +
                    (answerOne === "Filter" ? "color" : "")
                  }
                  onClick={() => getAnswerOne("Filter")}
                >
                  <h3>Filter</h3>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div
                  className={
                    "espresso pointer border " +
                    (answerOne === "Espresso" ? "color" : "")
                  }
                  onClick={() => getAnswerOne("Espresso")}
                >
                  <h3>Espresso</h3>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </>
          )}
          <div
            className="secondQuestion cursor"
            onClick={() => handleQuestionClick(1)}
          >
            <h2>What type of coffee?</h2>
          </div>
          {visibleQuestion[1] && (
            <>
              <div className="secondAnswer answer">
                <div
                  className={
                    "singleOrigin pointer border " +
                    (answerTwo === " Single Origin" ? "color" : "")
                  }
                  onClick={() => getAnswerTwo("Single Origin")}
                >
                  <h3>Single Origin</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div
                  className={
                    "decaf pointer border " +
                    (answerTwo === "Decaf" ? "color" : "")
                  }
                  onClick={() => getAnswerTwo("Decaf")}
                >
                  <h3>Decaf</h3>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div
                  className={
                    "blended pointer border " +
                    (answerTwo === "Blended" ? "color" : "")
                  }
                  onClick={() => getAnswerTwo("Blended")}
                >
                  <h3>Blended</h3>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </>
          )}
          <div
            className="thirdQuestion cursor"
            onClick={() => handleQuestionClick(2)}
          >
            <h2>How much would you like?</h2>
          </div>
          {visibleQuestion[2] && (
            <>
              <div className="thirdAnswer answer">
                <div
                  className={
                    "250g pointer border " +
                    (answerThree === "250g" ? "color" : "")
                  }
                  onClick={() => getAnswerThree("250g")}
                >
                  <h3>250g</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div
                  className={
                    "500g pointer border " +
                    (answerThree === "500g" ? "color" : "")
                  }
                  onClick={() => getAnswerThree("500g")}
                >
                  <h3> 500g</h3>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div
                  className={
                    "1000g pointer border " +
                    (answerThree === "1000g" ? "color" : "")
                  }
                  onClick={() => getAnswerThree("1000g")}
                >
                  <h3>1000g</h3>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </>
          )}
          <div
            className="forthQuestion cursor"
            onClick={() => handleQuestionClick(3)}
          >
            <h2>Want us to grind them?</h2>
          </div>
          {visibleQuestion[3] && (
            <>
              <div className="forthAnswer answer">
                <div
                  className={
                    "wholebean pointer border " +
                    (answerFour === "Wholebean" ? "color" : "")
                  }
                  onClick={() => getAnswerFour("Wholebean")}
                >
                  <h3>Wholebean</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div
                  className={
                    "forthFilter pointer border " +
                    (answerFour === "Filter" ? "color" : "")
                  }
                  onClick={() => getAnswerFour("Filter")}
                >
                  <h3>Filter</h3>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div
                  className={
                    "cafetiére pointer border " +
                    (answerFour === "Cafetiére" ? "color" : "")
                  }
                  onClick={() => getAnswerFour("Cafetiére")}
                >
                  <h3>Cafetiére</h3>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </>
          )}

          <div
            className="fifthQuestion cursor"
            onClick={() => handleQuestionClick(4)}
          >
            <h2>How often should we deliver?</h2>
          </div>
          {visibleQuestion[4] && (
            <>
              <div className="fifthAnswer answer">
                <div
                  className={
                    "week pointer border " +
                    (answerFive === "Every week" ? "color" : "")
                  }
                  onClick={() => getAnswerFive("Every week")}
                >
                  <h3>Every week</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div
                  className={
                    "weeks pointer border " +
                    (answerFive === "Every 2 weeks" ? "color" : "")
                  }
                  onClick={() => getAnswerFive("Every 2 weeks")}
                >
                  <h3>Every 2 weeks</h3>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div
                  className={
                    "month pointer border " +
                    (answerFive === "Every month" ? "color" : "")
                  }
                  onClick={() => getAnswerFive("Every month")}
                >
                  <h3>Every month</h3>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="orderSummary">
            <h5>Order Summary</h5>
            <h3>
              “I drink my coffee as <span>{answerOne} </span>, with a
              <span>{answerTwo} </span>type of bean. <span>{answerThree} </span>
              ground ala
              <span>{answerFour} </span>, sent to me <span>{answerFive} </span>”
            </h3>
          </div>
          <div className="subs-btn" onClick={resume}>
            <Button textContent="Create my plan!" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Subscribe;
