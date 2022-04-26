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

const Logo = styled.h1`

`;

const Desc = styled.p`

`;

const SocialContainer = styled.div`

`;

const SocialIcon = styled.div`

`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
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
                <SocialIcon>
                   <Facebook />
                </SocialIcon>
                <SocialIcon>
                   <Instagram />
                </SocialIcon>
                <SocialIcon>
                   <Twitter />
                </SocialIcon>
                <SocialIcon>
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