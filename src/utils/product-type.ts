export enum ProductTypeEnum {
  DRINK = "DRINK",
  FOOD = "FOOD",
  SIDE_DISH = "SIDE_DISH",
}

export const ProductType = {
  [ProductTypeEnum.DRINK]: "Bebida",
  [ProductTypeEnum.FOOD]: "Comida",
  [ProductTypeEnum.SIDE_DISH]: "Acompanhamento",
};
