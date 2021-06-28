import * as constants from "../constants";

const intitialState = {
  data: {},
  error: null,
  today: {},
  total: {},
  regions: [],
  loading: false,
};

const statusReducer = (state = intitialState, action) => {
  switch (action.type) {
    case constants.DATA_LOADING_BEGIN:
      console.log("DATA_LOADING_BEGIN");

      return { ...state, loading: true };

    case constants.DATA_LOADING_SUCCEEDED:
      console.log("DATA_LOADING_SUCCEEDED");
      console.log("payload");

      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case constants.DATA_LOADING_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case constants.GET_TODAY_STATUS:
      const todayData = {
        activeCasesNew: state.data.activeCasesNew,
        deathsNew: state.data.deathsNew,
        recoveredNew: state.data.recoveredNew,
      };

      return {
        ...state,
        today: todayData,
      };

    case constants.GET_TOTAL_STATUS:
      const totalData = {
        activeCases: state.data.activeCases,
        deaths: state.data.deaths,
        recovered: state.data.recovered,
        totalCases: state.data.totalCases,
      };

      return {
        ...state,
        total: totalData,
      };

    case constants.GET_REGION_LIST:
      const regionList = [...state.data.regionData];

      return {
        ...state,
        regionList,
      };
    default:
      return { ...state };
  }
};

export default statusReducer;
