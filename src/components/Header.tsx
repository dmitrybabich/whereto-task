import React from "react";
import styled from "styled-components";
import avatar from "../assets/images/avatar-icon@3x.png";

const styles = {
  Container: styled.div`
    background-color: ${props => props.theme.colors.background};
    border: solid 1px ${props => props.theme.borders.main};
    display: flex;
    justify-content: flex-end;
    padding: 11px 24px;
  `,
  Icon: styled.img`
    object-fit: contain;
    height: 14px;
    width: 14px;
    margin: 0 9px;
  `,
  UserName: styled.span`
    font-family: ${props => props.theme.fonts.main};
  `
};

interface Props {
  userName: string | null;
}

export const Header = (props: Props) => {
  return (
    <styles.Container>
      <styles.Icon src={avatar}/>
      <styles.UserName>Hey, {props.userName || "Anonymous"}</styles.UserName>
    </styles.Container>
  );
};
