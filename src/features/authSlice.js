import { createSlice } from "@reduxjs/toolkit"
const loginStatus = localStorage.getItem('loginStatus')

const initialState = {
    status: localStorage.getItem('loginStatus') === 'true' ? true : false,
    userData: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            localStorage.setItem('loginStatus', true)
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
            localStorage.setItem('loginStatus', false)
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;