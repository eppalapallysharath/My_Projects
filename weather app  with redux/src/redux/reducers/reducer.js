const initialState = {
  weatherInfo: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CITY_WEATHER_INFO": {
      return { ...state, weatherInfo: (state.weatherInfo = action.payload) };
    }

    default:
      return state;
  }
};

export default weatherReducer;
