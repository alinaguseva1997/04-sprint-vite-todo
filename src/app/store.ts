import {decksReducer} from "../features/decks/decks-reducer.ts";
import thunkMiddleware,{ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {AnyAction} from "redux";

const rootReducer = combineReducers({
  decks: decksReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

// console.log(store.getState())