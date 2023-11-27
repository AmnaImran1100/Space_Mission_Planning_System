// missionReducer.js
const initialState = {
    missions: [],
    // other state variables
  };
  
  const missionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MISSION':
        return {
          ...state,
          missions: [...state.missions, action.payload],
        };
      // other cases
      default:
        return state;
    }
  };
  
  export default missionReducer;
  