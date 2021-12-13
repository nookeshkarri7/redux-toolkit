import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from axios
const initialState = {
  data: [],
  msg:""
};


export const fetchData=createAsyncThunk("data/fetch",async()=>{
    const response=await axios.get("https://apis.ccbp.in/covid19-state-wise-data")
    return response
})

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    [fetchData.pending]:(state)=>{
        state.msg="loading...."
    },
    [fetchData.fulfilled]:(state,action)=>{
        state.data=action.payload
    }

    // saveData: (state, action) => {
    //   state.data = action.payload;
    // },
  },
});

// export const { saveData } = dataSlice.actions;

export default dataSlice.reducer;

