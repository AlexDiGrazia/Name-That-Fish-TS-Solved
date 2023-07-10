import { Images } from "./assets/Images";

type InitialFishes = {
    name: string;
    url: string;
}

export const initialFishes: InitialFishes[] = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
