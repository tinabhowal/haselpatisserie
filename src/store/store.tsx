import { createSlice, configureStore, PayloadAction, combineReducers } from "@reduxjs/toolkit";

interface User {
    user : {
        Username: string;
        Password: string;
        Email: string;
        Cart: string[];
        GoogleID: string
    } | null;
}

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


interface Token {
    token : string | null
}

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




const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        token: tokenSlice.reducer}
})

export default store;

export const userActions = userSlice.actions;
export const tokenActions = tokenSlice.actions;

const rootReducer = combineReducers({
    user: userSlice.reducer,
    token: tokenSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>