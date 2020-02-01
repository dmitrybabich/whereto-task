import React, { useState } from "react";
import styled from "styled-components";
import { CarInfo } from "../../api/dto";
import { CarDetails } from "./CarDetails";

const styles = {
  Container: styled.div`
    background-color: ${props => props.theme.colors.secondaryBackground};
    margin-bottom: 14px;
  `,
  CarDetailsContainer: styled.div<{ visible: boolean }>`
    transition: height 0.3s ease-in-out;
    height: ${props => (props.visible ? "315px" : "0px")};
    overflow: hidden;
  `,
  MainInfoContainer: styled.div`
    display: flex;
    min-height: 136px;
    width: 100%;
    align-items: stretch;
  `,
  Image: styled.img`
    height: 136px;
    width: 136px;
    object-fit: cover;
  `,
  BuyButton: styled.button`
    background-color: ${props => props.theme.colors.buttonBackground};
  `,
  BuyButtonLabel: styled.span`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    padding: 7px 0;
    margin: 0 44px;
    border-bottom: 1px solid ${props => props.theme.colors.textSecondary};

    &:hover {
      color: ${props => props.theme.colors.text};
      border-bottom: 1px solid ${props => props.theme.colors.text};
    }
  `,
  MainInfo: styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px 26px;
  `,
  InfoHeader: styled.div`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.content};
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
  `,
  Description: styled.span`
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.content};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
  `,
  DetailsLink: styled.a`
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.link};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
  `,
  InfoFooter: styled.div``
};

export const Car = (info: CarInfo) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleShowDetails = (e: any) => {
    e.preventDefault();
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <styles.Container>
      <styles.MainInfoContainer>
        <styles.Image src={info.image} />
        <styles.MainInfo>
          <styles.InfoHeader>{info.title}</styles.InfoHeader>
          <styles.Description>
            This is a random description of this car. It’s only a couple words because this is a test project. Good
            luck!&nbsp;
            <styles.DetailsLink href="#" onClick={handleShowDetails}>
              View Details
            </styles.DetailsLink>
          </styles.Description>
          <styles.InfoFooter />
        </styles.MainInfo>
        <styles.BuyButton>
          <styles.BuyButtonLabel>Buy</styles.BuyButtonLabel>
        </styles.BuyButton>
      </styles.MainInfoContainer>
      <styles.CarDetailsContainer visible={isDetailsVisible}>
        <CarDetails onClose={() => setIsDetailsVisible(false)} info={info} />
      </styles.CarDetailsContainer>
    </styles.Container>
  );
};
