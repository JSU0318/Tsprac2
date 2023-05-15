export type Restaurant = {
  name: string;
  category: string;
  address: {
    city: string;
    detail: string;
    zipCode: number;
    menu: {
      name: string;
      price: number;
      category: string;
    };
  };
};
