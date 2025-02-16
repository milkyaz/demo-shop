import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function GoodsItem(props) {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    addToBasket = Function.prototype,
  } = props;

  return (
    <Box style={{ border: "1px solid black" }}>
      <CardMedia
        sx={{ width: "100%", height: "150px" }}
        component="img"
        image={image}
      />
      <CardContent>
        <Typography
          style={{ fontWeight: "bold", fontSize: "16px" }}
          gutterBottom
          variant="p"
        >
          Категория: {category}
        </Typography>
        <Typography
          style={{
            width: "214px",
            paddingTop: 20,
            fontSize: "14px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          variant="p"
          component="div"
        >
          {title}{" "}
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingTop: 9,
              lineHeight: "26px",
            }}
            gutterBottom
            variant="p"
          >
            Цена: {price} руб.
          </Typography>
        </Box>
        <button onClick={() => addToBasket({ id, title, price })}>
          Купить
        </button>
      </CardContent>
    </Box>
  );
}
