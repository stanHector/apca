import axios from "axios";
import { BaseURL } from "../api";

const aggregationCall = ({data, ffyPeriodYear, id, type}) => {
  return axios.post(BaseURL + "api/aggregation", {
    data: {
      data: data,
      fyPeriodYear: ffyPeriodYear,
      id: id,
      type: type,
    },
  });
};

const aggregationService = {
  aggregationCall,
};
export default aggregationService;
