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
  const [order, setOrder] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const [alertName, setAlertName] = useState("");

  //сценарий, когда товар добавляется впервый раз
  const addToBasket = (item) => {
    //нужна проверка, что увеличивать quantity
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id); //если вдруг айди найдётся, то мы получим индекс этого массива пример => [{id: 1}, {id: 2}]
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      //функция setOrder должна вернуть нам массив и она у нас возвращает список, который уже есть в массиве и добавляет туда новый объект
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.title);
  };

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
              order={order}
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
            {/* {filteredCharactersToDisplay().map((goods) => (
              <GoodsToDisplay
                addToBasket={addToBasket}
                {...goods}
                key={goods.id}
              />
            ))} */}
            <GoodsToDisplay
              addToBasket={addToBasket}
              goods={goods}
              filteredCharactersToDisplay={filteredCharactersToDisplay}
            />
          </Box>
        </div>
        <Sidebar />
      </div>
    </Container>
  );
}

export default App;
