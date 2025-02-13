import GoodsItem from "../GoodsItem/GoodsItem";
import Box from "@mui/material/Box";
import "./GoodsToDisplay";
function GoodsToDisplay({ characters, title, price, category, image }) {
  return (
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
