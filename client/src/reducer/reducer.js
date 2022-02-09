const initialState = {
  dogs: [],
  dogsAll: [],
  temperaments: [],
  detail: [],
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
      function sortA(a) {
        let weightSortA = a.weight.split("-");
        if (weightSortA[0] && weightSortA[1]) {
          let sumWeight =
            parseInt(weightSortA[0].trim()) + parseInt(weightSortA[1].trim());
          return sumWeight / 2;
        } else {
          return parseInt(weightSortA[0].trim());
        }
      }
      function sortB(b) {
        let weightSortB = b.weight.split("-");
        if (weightSortB[0] && weightSortB[1]) {
          let sumWeight =
            parseInt(weightSortB[0].trim()) + parseInt(weightSortB[1].trim());
          return sumWeight / 2;
        } else {
          return parseInt(weightSortB[0].trim());
        }
      }

      let dogsWeight 

      if (action.payload === "AllWeights") {
        dogsWeight = state.dogs;
      }
      if (action.payload === "HeavyWeight") {
        dogsWeight = state.dogs.sort(function (a, b) {
          return sortA(b) - sortB(a);
        });
      }
      if (action.payload === "LightWeight") {
        dogsWeight = state.dogs.sort(function (a, b) {
          return sortB(a) - sortA(b);
        });
      }
      return {
        ...state,
        dogs: dogsWeight,
      };


    case "FILTER_BY_CREATED":
      const allDogs2 = state.dogsAll;
      const createdFilter =
        action.payload === "AllDogs"
          ? allDogs2
          : allDogs2.filter((e) => {
              if (action.payload === "Created") {
                if (e.createdAtDb) {
                  return e;
                }
              } else if (action.payload === "Api") {
                if (!e.createdAtDb) {
                  return e;
                }
              }
            });
      return {
        ...state,
        dogs: createdFilter,
      };

    case "ORDER_BY_NAME":
      const dogsSorted =
        action.payload === "Asc"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: dogsSorted,
      };
      case "GET_DOGS_NAME":
        return {
          ...state,
          dogs: action.payload
        }
        case "POST_DOG":
          return{
            ...state,
          }
          case "GET_DOGS_TEMPERAMENT":
            return {
              ...state,
              temperaments: action.payload
            }
            case "GET_DETAIL":
              return {
                ...state,
                detail: action.payload
              }
    default:
      return state;
  }
}

export default rootReducer;
