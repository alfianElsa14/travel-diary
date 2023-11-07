import { combineReducers } from "redux";
import registerReducer from "./pages/Register/reducer";
import homeReducer from "./pages/Homes/reducer";
import detailReducer from "./pages/Detail/reducer";
import loginReducer from "./pages/Login/reducer";
import addReducer from "./pages/Add/reducer";
import profileReducer from "./pages/Profile/reducer";

const rootReducer = combineReducers({
    registerReducer: registerReducer,
    homeReducer: homeReducer,
    detailReducer: detailReducer,
    loginReducer: loginReducer,
    addReducer: addReducer,
    profileReducer: profileReducer

    
    
})

export default rootReducer