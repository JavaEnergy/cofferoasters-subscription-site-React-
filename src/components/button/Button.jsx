import "./button.css";
import "../../reset.css";

let textContent = " Create your plan";

function Button({ textContent = "Create your plan" }) {
  return (
    <>
      <button> {textContent}</button>
    </>
  );
}

export default Button;
