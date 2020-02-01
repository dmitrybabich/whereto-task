import {CarInfo} from "./dto";

export const loadCars = async (): Promise<CarInfo[]> => {
  const response = await fetch("https://gist.githubusercontent.com/bgdavidx/f92a8cf0fdceb1a9c3a7e11f4dfec646/raw/ff4946915162d57b8b699ae19d7f5cc1ed317746/car_response.json")
  const json = await response.json();

  return json.results;
}