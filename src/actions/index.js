import * as constants from "../constants";

export const loadingBegin = () => {
  return {
    type: constants.DATA_LOADING_BEGIN,
  };
};

export const loadingSucceeded = (data) => {
  return {
    type: constants.DATA_LOADING_SUCCEEDED,
    payload: data,
  };
};

export const loadingFailed = (error) => {
  return {
    type: constants.DATA_LOADING_FAILED,
    payload: error,
  };
};

export const getTodayStatus = () => {
  return {
    type: constants.GET_TODAY_STATUS,
  };
};

export const getTotalStatus = () => {
  return {
    type: constants.GET_TOTAL_STATUS,
  };
};

export const getRegionList = () => {
  return {
    type: constants.GET_REGION_LIST,
  };
};
