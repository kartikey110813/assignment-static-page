import "./App.css";
import {
  Header,
  SloganContainer,
  FeatureSteps,
  FreeProduct,
  Footer,
} from "./components/ComponentExporter";

function App() {
  return (
    <div className="App">
      <div className="main__container">
        <Header />
        <div className="main__sub-container">
          <section className="main__section flex">
            <SloganContainer />
          </section>
          <section className="feature__section">
            <FeatureSteps />
          </section>
          <section className="product__section">
            <FreeProduct />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
