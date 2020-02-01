import React from "react";
import styled from "styled-components";
import { FilterItem } from "./FilterItem";

interface Props {
  found: number;
  items: Array<{ title: string; selectedValue: string; values: string[] }>;
  redoSearch: () => void;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background-image: ${props => props.theme.gradient};
    padding: 22px 32px;
  `,
  Found: styled.span`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    color: #ffffff;
    border-bottom: 1px solid ${props => props.theme.borders.secondary};
    align-self: flex-start;
  `,
  ItemsContainer: styled.div`
    display: flex;
    padding-top: 14px;
    justify-content: space-between;
    align-items: flex-end;
  `,
  Redo: styled.button`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.link};
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    background-color: transparent;
    border: none;
    flex-shrink: 1;
    flex-basis: 40%;
    text-align: left;
  `
};

export const Filter = (props: Props) => {
  const { found, items,redoSearch } = props;

  return (
    <styles.Container>
      <styles.Found>{`${found} Results for`}</styles.Found>
      <styles.ItemsContainer>
        {items.map(item => (
          <FilterItem key={item.title} {...item} />
        ))}
        <styles.Redo onClick={redoSearch}>Redo Search</styles.Redo>
      </styles.ItemsContainer>
    </styles.Container>
  );
};
