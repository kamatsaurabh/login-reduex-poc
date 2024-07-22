import { isDevMode } from "@angular/core";
import {
    ActionReducerMap,
    MetaReducer,
} from "@ngrx/store";
import { couterReducer } from "./counter.reducer";


export interface State {

}

export const reducers: ActionReducerMap<State> = {
    counter: couterReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];