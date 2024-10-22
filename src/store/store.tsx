import { createSlice, configureStore, PayloadAction, combineReducers } from "@reduxjs/toolkit";
import { User } from "../types/types";
import { Token } from "../types/types";
import { Cake } from "../types/types";

const userFomLocalStorage = localStorage.getItem("user");

const initialUserState: User = {
    user: userFomLocalStorage? JSON.parse(userFomLocalStorage) : null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action:  PayloadAction<User["user"] | null>) => {
            state.user = action.payload;
            if(action.payload){
                localStorage.setItem('user', JSON.stringify(action.payload));
            }else{
                localStorage.removeItem('user')
            }
        }
    }
})




const tokenFromLocalStorage = localStorage.getItem('token');

const initialTokenState : Token = {
    token : tokenFromLocalStorage? JSON.parse(tokenFromLocalStorage):null
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: initialTokenState,
    reducers: {
        setToken: (state, action: PayloadAction<Token['token'] | null>) => {
            state.token = action.payload;
            if(action.payload){
                localStorage.setItem('token', JSON.stringify(action.payload))
            }else{
                localStorage.removeItem('token')
            }
        }
    }
})



  interface CakeState {
    cakes: Cake[] 
  }

  const cakesFromLocalStorage = localStorage.getItem('cakes');

  const initialCakeState : CakeState = {
    cakes: cakesFromLocalStorage? JSON.parse(cakesFromLocalStorage) : []
  };

  const cakesSlice = createSlice({
    name: 'cakes',
    initialState: initialCakeState,
    reducers: {
        setCakes: (state, action:PayloadAction<Cake[]>) => {
            state.cakes = action.payload;
            localStorage.setItem('cakes', JSON.stringify(action.payload))
        }
    }
  })


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        token: tokenSlice.reducer,
        cakes: cakesSlice.reducer
    }
})

export default store;

export const userActions = userSlice.actions;
export const tokenActions = tokenSlice.actions;
export const cakesActions = cakesSlice.actions;

const rootReducer = combineReducers({
    user: userSlice.reducer,
    token: tokenSlice.reducer,
    cakes: cakesSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>