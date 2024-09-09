import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  // toast.error( "error" );
  // toast.success('success');

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
