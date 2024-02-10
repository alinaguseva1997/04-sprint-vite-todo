import {AppRootState} from "./store.ts";
export const appSelector = (state: AppRootState) => state.app.status
