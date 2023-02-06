import axios from "axios";
export const ADD_DATA = "ADD_DATA";
export const FILTER_FOR_NAME = "FILTER_FOR_NAME";
export const FILTER_FOR_CONTINENT = "FILTER_FOR_CONTINENT";
export const FILTER_FOR_ACTIVITY = "FILTER_FOR_ACTIVITY";
export const ORDER_ALFABETIC = "ORDER_ALFABETIC";
export const ORDER_FOR_POPULATION = "ORDER_FOR_POPULATION";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_COUNTRIES_FORM = "ADD_COUNTRIES_FORM";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export function addData() {
  return async function(dispatch) {
    try {
      let res = await axios.get("/countries"),
        json = await res.data;
      return dispatch({
        type: "ADD_DATA",
        payload: json,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function filterForContinent(status) {
  return {
    type: "FILTER_FOR_CONTINENT",
    payload: status,
  };
}
export function filteredForActivity(activity) {
  return {
    type: "FILTER_FOR_ACTIVITY",
    payload: activity,
  };
}

export function filterForName(string) {
  return async function(dispatch) {
    try {
      let res = await axios.get(`/countries?name=${string}`),
        json = await res.data;
      return dispatch({
        type: "FILTER_FOR_NAME",
        payload: json,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function order_alfabetic(string) {
  return {
    type: "ORDER_ALFABETIC",
    payload: string,
  };
}

export function order_population(string) {
  return {
    type: "ORDER_FOR_POPULATION",
    payload: string,
  };
}

export function get_detail(id) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`/countries/${id}`),
        json = await res.data;
      return dispatch({
        type: "GET_DETAIL",
        payload: json,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function addCountriesForm(country) {
  return {
    type: ADD_COUNTRIES_FORM,
    payload: country,
  };
}

export function createActivity(data) {
  return async function() {
    try {
      const response = await axios.post("/activities", data);
      alert("The activity was satisfactorily created");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
