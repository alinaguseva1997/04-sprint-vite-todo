export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}
export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-APP-STATUS': {
      return {...state, status: action.status}
    }
    case 'APP/SET-APP-ERROR': {
      return {...state, error: action.error}
    }
    default:
      return state
  }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-APP-STATUS' as const, status})
export const setAppErrorAC = (error: string) => ({type: 'APP/SET-APP-ERROR' as const, error})

type AppStateType = typeof initialState

type ActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
