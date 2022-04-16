import { ShoppingCartOutlined, Search, FavoriteBorderIcon } from "@mui/icons-material";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Search } from "@mui/icons-material";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
`;

const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

const Product = (item) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
