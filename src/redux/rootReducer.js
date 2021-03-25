import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import muffinReducer from "./muffins/muffinReducers";
import cookiesReducer from "./cookies/cookiesReducers";
import croissantReducer from "./croissants/croissantReducer";
import alfajoresReducers from "./alfajores/alfajoresReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  muffin: muffinReducer,
  cookies: cookiesReducer,
  croissants: croissantReducer,
  alfajores: alfajoresReducers
});

export default rootReducer;
