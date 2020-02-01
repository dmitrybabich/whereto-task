import React from "react";
import styled from "styled-components";
import { CarInfo } from "../../api/dto";
import {Car} from "./Car";

interface Props {
  cars: CarInfo[];
}

const styles = {
  Container: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 26px 43px;
  `
};

export const Results = (props: Props) => {
  const {cars} = props;

  return (
    <styles.Container>
      {cars.map(car => <Car key={car.id} {...car}/>)}
    </styles.Container>
  );
};
