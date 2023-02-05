import {
  ADD_DATA,
  FILTER_FOR_NAME,
  ORDER_ALFABETIC,
  ORDER_FOR_POPULATION,
  FILTER_FOR_CONTINENT,
  FILTER_FOR_ACTIVITY,
  GET_DETAIL,
  ADD_COUNTRIES_FORM,
  CREATE_ACTIVITY,
} from "../redux/actions";

const initialState = {
  allCountries: [],
  filterForContinent: [],
  filterForName: [],
  filterForActivity: [],
  orderAlfabetic: [],
  orderPopulation: [],
  getDetail: [],
  getActivities: [],
  countriesForm: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        allCountries: action.payload,
      };

    case FILTER_FOR_CONTINENT:
      const filtered = state.allCountries;
      const filterContinent =
        action.payload === "all"
          ? filtered
          : filtered.filter((country) => country.continent === action.payload);
      return {
        ...state,
        filterForContinent: filterContinent,
      };

    case FILTER_FOR_ACTIVITY:
      const filter_activity = state.allCountries;
      const containActivity =
        action.payload === "all"
          ? filter_activity
          : filter_activity.filter((country) =>
              country.activities.find(
                (activity) => activity.name === action.payload
              )
            );

      return {
        ...state,
        filterForActivity: containActivity,
      };

    case FILTER_FOR_NAME:
      return {
        ...state,
        filterForName: action.payload,
      };
    case ORDER_FOR_POPULATION:
      const order_population = state.filterForContinent.length
        ? state.filterForContinent
        : state.allCountries;

      action.payload === "min_max"
        ? order_population.sort((a, b) => {
            return a.poblation - b.poblation;
          })
        : order_population.sort((a, b) => {
            return b.poblation - a.poblation;
          });
      return {
        ...state,
        orderPopulation: [...order_population],
      };

    case ORDER_ALFABETIC:
      const sortedAlfabetic = state.filterForContinent.length
        ? state.filterForContinent
        : state.allCountries;
      action.payload === "Ascendente"
        ? sortedAlfabetic.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
          })
        : sortedAlfabetic.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
          });
      return {
        ...state,
        orderAlfabetic: [...sortedAlfabetic],
      };
    case GET_DETAIL:
      return {
        ...state,
        getDetail: action.payload,
        getActivities: action.payload.activities,
      };
    case ADD_COUNTRIES_FORM:
      const id = action.payload[0].id;
      return {
        ...state,
        countriesForm: [...state.countriesForm, id],
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
