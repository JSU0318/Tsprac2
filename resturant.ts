export type Restaurant = {
  name: string;
  category: string;
  address: {
    city: string;
    detail: string;
    zipCode: number;
  };
  menu: {
    name: string;
    price: number;
    category: string;
  }[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  prive: number;
  category: string;
};
