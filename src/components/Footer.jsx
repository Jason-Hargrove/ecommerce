import { 
    Facebook, 
    Instagram, 
    Twitter, 
    Pinterest 
}  from '@mui/icons-material';

import styled from "styled-components";

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
`;

const Right = styled.div`
flex: 1;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum quasi incidunt est consequuntur odit obcaecati eveniet nemo iste corporis. Atque quas rerum quidem labore, animi tenetur magnam possimus perspiciatis.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                   <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                   <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                   <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                   <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer