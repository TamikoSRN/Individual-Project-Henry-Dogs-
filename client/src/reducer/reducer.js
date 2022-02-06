const initialState = {
  dogs: [],
  dogsAll: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        dogsAll: action.payload,
      };
      
      
    case "FILTER_BY_WEIGHT":
      const allDogs = state.dogsAll; 
      const weightFiltered =
        action.payload === "AllWeights"
          ? allDogs
          : allDogs.filter((el) => el.weight === action.payload);
      return {
        ...state,
        dogs: weightFiltered,
      };


      case "FILTER_BY_CREATED":
      const allDogs2 = state.dogsAll; 
      const createdFilter = action.payload === "AllDogs" ? allDogs2 : allDogs2.filter( e => {
        if(action.payload === "Created"){
            if(e.createdAtDb){
                return e
            }
        }else if(action.payload === "Api"){
            if(!e.createdAtDb){
                return e
            }
        }
    })
      return {
          ...state,
          dogs: createdFilter
      }
      default:
      return state;
  }
}

export default rootReducer;
