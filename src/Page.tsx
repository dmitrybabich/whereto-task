import React, {useEffect, useState} from "react";
import {loadCars} from "./api/api";
import { CarInfo } from "./api/dto";
import { Filter } from "./components/filter/Filter";
import { SubFilter } from "./components/filter/SubFilter";
import { Header } from "./components/Header";
import { Results } from "./components/results/Results";
import { styles } from "./Page.styles";

const mainFilterItems = [
  { title: "product", selectedValue: "Mersedes Benz", values: ["Mersedes Benz"] },
  { title: "color", selectedValue: "Black", values: ["Black"] },
  { title: "year", selectedValue: "2009", values: ["2009"] },
  { title: "miles", selectedValue: "Less than 1000", values: ["less than 1000"] }
];

const tags = [
  { value: "Free", selected: false },
  { value: "Cool", selected: false },
  { value: "Fun", selected: false },
  { value: "Sexy", selected: false }
];

export const Page = () => {
  const [cars, setCars] = useState<CarInfo[] | null>(require('./api/carsStatic.json').results);

  useEffect(() => {
    if(cars == null) {
      loadCars().then(c => setCars(c));
    }
  });

  return (
    <styles.Container>
      <Header userName="James" />
      <Filter found={100} items={mainFilterItems} redoSearch={() => console.log("redo")} />
      <styles.ResultsContainer>
        <SubFilter onChange={() => console.log("on change")} tags={tags} />
        {cars != null ? <Results cars={cars} /> : <div>Loading...</div>}
      </styles.ResultsContainer>
    </styles.Container>
  );
};
