import React, { useContext } from "react";
import { Range as LibRange } from "rc-slider";
import "rc-slider/assets/index.css";
import { ThemeContext } from "styled-components";

interface Props {
  value: number[];
}

export const Range = (props: Props) => {
  const { value } = props;

  const theme = useContext(ThemeContext);

  const dotStyle: React.CSSProperties = {
    width: "218px",
    height: "218px",
    border: `1px solid ${theme.borders.main}`
  };

  return <LibRange dotStyle={dotStyle} value={value} max={100} />;
};
