import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  selected: boolean;
  onToggle: () => void;
}

const styles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    margin: 4px 0
  `,
  Label: styled.span`
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.textThird};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    margin-left: 8px;
  `,
  CheckBox: styled.div`
    width: 17px;
    height: 17px;
    border: solid 1px ${props => props.theme.borders.checkBox};
    background-color: ${props => props.theme.colors.secondaryBackground};
  `
};

export const TagItem = (props: Props) => {
  const { value, onToggle, selected } = props;

  return (
    <styles.Container>
      <styles.CheckBox />
      <styles.Label>{value}</styles.Label>
    </styles.Container>
  );
};
