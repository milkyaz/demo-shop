import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import GoodsToDisplay from "./components/GoodsToDisplay/GoodsToDisplay";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import UseGeoLocation from "./components/UseGeoLocation/UseGeoLocation";
import Container from "@mui/material/Container";

const IMAGES = {
  image1: new URL("./img/React.png", import.meta.url).href,
};

function App() {
  const [goods, setGoods] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const fetchData = async () => {
    const response = await fetch(
      "https://fakestoreapi.in/api/products?limit=20"
    );
    const data = await response.json();
    setGoods(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleCategoryChange(item) {
    setSelectCategory(item);
  }

  const handleSearchItem = goods.filter((el) =>
    el.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const filteredCharactersToDisplay = () => {
    return goods.filter((goods) => {
      if (searchItem.toLowerCase() === "" && selectCategory === "All")
        return true;

      if (searchItem.toLowerCase() === goods.title.toLowerCase()) {
        if (selectCategory === goods.title) {
          console.log(goods.title);
          return true;
        }
        return true;
      } else if (selectCategory === goods.category) return true;

      return false;
    });
  };

  return (
    <Container fixed>
      <div className="App">
        <div className="main-shop">
          <header
            className="header"
            style={{ display: "flex", alignItems: "center", width: "983px" }}
          >
            <img
              src={IMAGES.image1}
              alt="react"
              className="header__logo"
              style={{ width: "103px", height: "43px" }}
            />
            <UseGeoLocation />
            <Search
              searchTerm={searchItem}
              setSearchTerm={setSearchItem}
              onChange={handleSearchItem}
            />
          </header>

          <Filter
            category={selectCategory}
            handleCategoryChange={handleCategoryChange}
            goods={goods}
          />
          <Box
            className="box-shop"
            sx={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "50px",
              width: "916px",
              height: "500px",
              border: "1px solid",
              justifyContent: "center",
              overflow: "auto",
            }}
          >
            {filteredCharactersToDisplay().map((goods) => (
              <GoodsToDisplay
                title={goods.title}
                price={goods.price}
                category={goods.category}
                image={goods.image}
                key={goods.id}
              />
            ))}
          </Box>
        </div>
        <Sidebar />
      </div>
    </Container>
  );
}

export default App;
