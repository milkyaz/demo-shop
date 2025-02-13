import GoodsItem from "../GoodsItem/GoodsItem";
import Box from "@mui/material/Box";
import "./GoodsToDisplay";
function GoodsToDisplay({ characters, title, price, category, image }) {
  return (
    <Box className="box-shop">
      <GoodsItem
        title={title}
        price={price}
        category={category}
        image={image}
      />
    </Box>
  );
}

export default GoodsToDisplay;
