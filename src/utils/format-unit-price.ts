import numeral from "numeral";

export default (value: any) =>
  `R$ ${numeral((value || 0) / 100).format("0,0.00")}`;
