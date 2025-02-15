import GoodsItem from "../GoodsItem/GoodsItem";
import Box from "@mui/material/Box";
import "./GoodsToDisplay";

function GoodsToDisplay(props) {
  const {
    goods = [],
    addToBasket = Function.prototype,
    filteredCharactersToDisplay = Function.prototype,
    title,
    price,
    category,
    image,
  } = props;
  return (
    <Box className="box-shop">
      {/* <GoodsItem
        title={title}
        price={price}
        category={category}
        image={image}
        addToBasket={addToBasket}
      /> */}
      {filteredCharactersToDisplay().map((item) => (
        <GoodsItem addToBasket={addToBasket} {...item} key={item.id} />
      ))}
    </Box>
  );
}

export default GoodsToDisplay;
