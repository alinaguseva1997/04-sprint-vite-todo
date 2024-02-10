import {Dispatch} from "redux";
import {desksApi} from "./decks-api.ts";
import {addDeckAC, setDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    desksApi.fetchDesks().then((res) => {
        dispatch(setDecksAC(res.data.items))
    })
}
export const addDecksTC = (name: string) => async (dispatch: Dispatch) => {
    return desksApi.createDesk(name).then((res)=>{
        dispatch(addDeckAC(res.data))
    })
}