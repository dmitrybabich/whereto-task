import styled from "styled-components";

export const styles = {
  Container: styled.div`
    background-color: ${props => props.theme.colors.background};
  `,
  ResultsContainer: styled.div`
    display: flex;
  `
};
