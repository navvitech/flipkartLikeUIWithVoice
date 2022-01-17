import Header from "./Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { Data } from "./Data";
import { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "Alan SDK Key",
      onCommand: ({ command, product }) => {
        if (command === "show") {
          filter(product);
        }
        if (command === "cartPage") {
          history.push("/cart");
        }
        if (command === "ordersPage") {
          history.push("/orders");
        }
        if (command === "homePage") {
          history.push("/");
        }
      },
    });
    filter("");
  }, [history]);

  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {category.map((item) => (
              <Card
                image={item.image}
                name={item.name}
                rating={item.rating}
                actualPrice={item.actualPrice}
                offerPrice={item.offerPrice}
              />
            ))}
          </div>
        </Route>

        <Route exact path="/cart">
          <Navbar text={"This is Cart Page"} />
        </Route>
        <Route exact path="/orders">
          <Navbar text={"This is Orders Page"} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
