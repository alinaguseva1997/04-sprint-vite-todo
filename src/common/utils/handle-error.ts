import {Dispatch} from "redux";
import {isAxiosError} from "axios";
import {setAppErrorAC, setAppStatusAC} from "../../app/app-reducer.ts";

export const handleError = (err: any, dispatch: Dispatch) => {
    let errorMessage: string
    if (isAxiosError<ServerError>(err)) {
        errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
        dispatch(setAppErrorAC(errorMessage))
        dispatch(setAppStatusAC("failed"))
    } else {
        errorMessage = (err as Error).message
        dispatch(setAppErrorAC(errorMessage))
        dispatch(setAppStatusAC("failed"))
    }
    console.log(errorMessage)
}


export type ServerError = {
    errorMessages: Array<{ field: string; message: string }>
}
