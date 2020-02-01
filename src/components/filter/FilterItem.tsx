import React from "react";
import styled from "styled-components";

interface Props {
  selectedValue: string;
  values: string[];
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  `,
  Label: styled.span`
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.15px;
    padding: 3px 0;
  `,
  Value: styled.span`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    white-space: nowrap;
  `
};

export const FilterItem = (props: Props) => {
  const { selectedValue, values } = props;

  return (
    <styles.Container>
      <styles.Label>{selectedValue}</styles.Label>
      <styles.Value>{values[0]}</styles.Value>
    </styles.Container>
  );
};
