import { Inter } from "next/font/google";
import styled from "styled-components";
import EthMage from "@/public/EthMage.png";
import Image from "next/image";
import ETHIcon from "@/public/ETHIcon";
import ClockIcon from "@/public/ClockIcon";
import Authorz from "@/public/Author.png";
import EyeIcon from "@/public/EyeIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Section>
        <Retangle>
          <ImageContainer>
            <Image src={EthMage} alt={"Etherium Image"} />
            <EyeIcon />
          </ImageContainer>
          <Container>
            <Title>Equilibrium #3429</Title>
            <SubTitle>
              Our Equilibrium collection promotes balance and calm.
            </SubTitle>
            <InfoContainer>
              <p>
                <ETHIcon /> 0.041 ETH
              </p>
              <a>
                <ClockIcon /> 3 days left
              </a>
            </InfoContainer>
            <Hr />
            <Author>
              <Image src={Authorz} alt={"Author Image"} />
              <span>Creation of</span> <div>Jules Wyvern</div>
            </Author>
          </Container>
        </Retangle>
      </Section>
    </>
  );
}

const Section = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: var(--very-dark-blue);

  display: grid;
  place-items: center;
`;

const Retangle = styled.div`
  width: 350px;
  border-radius: 15px;
  padding: 24px;
  padding-bottom: 32px;

  background-color: var(--dark-blue);

  @media (max-width: 375px) {
    width: 327px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  place-items: center;
  border-radius: 10px;
  background-color: cyan;

  img {
    display: block;
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    transition: 200ms;

    @media (max-width: 375px) {
      width: 278px;
      height: 278px;
    }
  }

  :hover img {
    opacity: 0.5;
    color: cyan;
  }

  svg {
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    opacity: 0;
    position: relative;

    transition: 200ms;
  }

  :hover svg {
    opacity: 1;
  }
`;

const Container = styled.div`
  font-family: "Outfit", sans-serif;
`;
const Title = styled.h1`
  color: var(--white);
  font-weight: 600;
  font-size: 24px;
  padding: 24px 0 22px 0;

  :hover {
    color: var(--cyan);
    transition: 200ms;
    cursor: pointer;
  }

  @media (max-width: 375px) {
    font-size: 22px;
  }
`;
const SubTitle = styled.h2`
  color: var(--soft-blue);
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  padding-bottom: 29px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  svg {
    margin-right: 8px;
  }

  p {
    display: flex;
    place-items: center;
    color: var(--cyan);
  }

  a {
    display: flex;
    align-items: center;
    justify-self: end;
    color: var(--soft-blue);
  }
`;

const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: var(--blue);
  margin: 24px 0 16px 0;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;

  span {
    color: var(--soft-blue);
    padding-left: 16px;
  }

  div {
    color: var(--white);
    padding-left: 5px;

    :hover {
      color: var(--cyan);
      transition: 200ms;
      cursor: pointer;
    }
  }
`;
