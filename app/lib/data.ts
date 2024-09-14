export interface Product {
  imageName: string;
  id: number;
  name: string;
  description: string;
  priceInETH: number;
  is3D: boolean;
}

const products: Product[] = [
  {
    imageName: "/1.png",
    id: 1,
    name: "The sword of Pergon",
    description: "Great for close up work!",
    priceInETH: 0.001,
    is3D: false,
  },
  {
    imageName: "/10.png",
    id: 10,
    name: "The Holy Hand Grenade of Antioch",
    description: "Smite thine enemies",
    priceInETH: 0.0015,
    is3D: false,
  },
  {
    imageName: "/5.jpg",
    id: 5,
    name: "Buster Drone",
    description: "Animated drone",
    priceInETH: 0.001,
    is3D: true,
  },
  {
    imageName: "/8.png",
    id: 8,
    name: "The BFG",
    description: "You know what it does!",
    priceInETH: 0.001,
    is3D: false,
  },
  {
    imageName: "/2.png",
    id: 2,
    name: "Pot of Power",
    description: "Improves you to max health in no time",
    priceInETH: 0.001,
    is3D: false,
  },
  {
    imageName: "/3.png",
    id: 3,
    name: "Goblet of Stamina",
    description: "One drink doubles your stamina",
    priceInETH: 0.001,
    is3D: false,
  },
  {
    imageName: "/4.png",
    id: 4,
    name: "Hand Laser",
    description: "Emits short bursts of laser fire",
    priceInETH: 0.001,
    is3D: false,
  },

  {
    imageName: "/6.png",
    id: 6,
    name: "Medieval Oranament",
    description: "Designed for the mantle piece",
    priceInETH: 0.005,
    is3D: false,
  },
  {
    imageName: "/7.png",
    id: 7,
    name: "Polyjuice Potion",
    description: "Change into a frog to avoid detection - lasts 30 seconds",
    priceInETH: 0.001,
    is3D: false,
  },
  {
    imageName: "/9.png",
    id: 9,
    name: "The Sword of Ansitan",
    description: "It may be short, but it's very sharp",
    priceInETH: 0.001,
    is3D: false,
  },
];
export default products;
