import { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="text">Color</label> */}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <input
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        ></input>

        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
