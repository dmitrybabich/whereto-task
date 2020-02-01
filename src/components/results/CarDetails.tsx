import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { CarInfo } from "../../api/dto";

interface Props {
  info: CarInfo;
  onClose: () => void;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  HeaderRow: styled.div`
    display: flex;
  `,
  Tab: styled.div`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.content};
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    padding: 5px;
  `,
  CloseLink: styled.a`
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.link};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    margin: 5px;
  `,
  Space: styled.div`
    flex: 1;
  `
};

export const CarDetails = (props: Props) => {
  const { onClose, info } = props;

  const handleClose = (e: any) => {
    e.preventDefault();

    onClose();
  };

  return (
    <styles.Container>
      <styles.HeaderRow>
        <styles.Tab>Specs</styles.Tab>
        <styles.Tab>Reviews</styles.Tab>
        <styles.Tab>Parts</styles.Tab>
        <styles.Space />
        <styles.CloseLink href="#" onClick={handleClose}>
          Close
        </styles.CloseLink>
      </styles.HeaderRow>
    </styles.Container>
  );
};
