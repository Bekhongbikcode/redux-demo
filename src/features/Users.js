import { createSlice } from "@reduxjs/toolkit";
import UserData from '../sharedata/ListOfUsers';
export const userSlice = createSlice({
        name: "users",
        initialState: { val: UserData },
        reducers: {
                addUser: (state, action) => {
                        state.val.push(action.payload);
                },
                deleteUser: (state, action) => {
                        state.val = state.val.filter((user) => user.id !== action.payload.id);
                },
                updateUsername: (state, action) => {
                        // eslint-disable-next-line array-callback-return
                        state.val.map((user) => {
                                if (user.id === action.payload.id) {
                                        user.username = action.payload.username;
                                }
                        });
                },
        },
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
