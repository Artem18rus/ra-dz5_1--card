import BasicExample from "./components/BasicExample";
import WithHeaderStyledExample from "./components/WithHeaderStyledExample";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let img = require("./img/img.jpg");
  return (
    <div className="container">
      <BasicExample img={img} />
      <br />
      <WithHeaderStyledExample />
    </div>
  );
}

export default App;
