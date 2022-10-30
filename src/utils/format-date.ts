import moment from "moment";
export default (value: any) =>
  ((value && moment(value)) || moment()).format("MM/DD/YYYY hh:mm");
