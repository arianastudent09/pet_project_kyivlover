import {createStore, combineReducers, applyMiddleware} from "redux"
import Middleware from "redux-thunk"

import { galleryReducer } from "./reducers/galleryReducer"

const reducers = combineReducers({
   gallery: galleryReducer
})

export const store = createStore(reducers, applyMiddleware(Middleware))
window.store = store