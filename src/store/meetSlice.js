import { func } from "prop-types";
import { API_URL } from "../services";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchAllEvents = createAsyncThunk(
    'events/fetchEvents',
    async function (_,{rejectWithValue}){
        try{
            const response = await fetch(`${API_URL}/meetups`,{
                headers:{
                    'access': localStorage.getItem('AccessToken')
                }
            });
            if(!response.ok){
            throw new Error('Server Error!');
            }
            const data = await response.json();
            return data.data.meetups;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
        
    }
)
export const delEvent = createAsyncThunk(
    'users/delUser',
    async function(id,{rejectWithValue,dispatch}){
        try {
            const response = await fetch(`placeholder`,{
                method: 'DELETE',
            })
            if (!response.ok){
                throw new Error('Cannot delete task. Server Error!');
              }
              dispatch(removePost(id))
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
export const addNewEvent = createAsyncThunk(
    'users/addNewPost',
    async function({rejectWithValue,dispatch}){
        try{
            const response = await fetch('placeholder',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
            if (!response.ok){
                throw new Error('Cannot add task. Server Error!');
              }
           
              const data = await response.json();
                dispatch(addPost(data))
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    } 
)
export const changeEvent = createAsyncThunk(
    'events/changeEvent',
    async function(event,{rejectWithValue,dispatch}){
        try {
            const response = await fetch(`${API_URL}/meetup/${event.id}/update`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    "access" : localStorage.getItem('AccessToken')
                },
                body: JSON.stringify(event)
            })
            if (!response.ok){
                throw new Error('Cannot delete task. Server Error!');
              }
              dispatch(changeMeet(event))
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
const setError = (state,action)=>{
    state.status = 'rejected';
    state.error = action.payload
  }
const eventSlice = createSlice({
	name: 'events', // название слайса
	initialState: { 
        events: [
            
            ],
        status: null,
        error:null
},
	reducers: {
        addPost(state,action){
            state.posts.push(action.payload);
        },
        removePost(state,action){
            state.posts= state.events.filter((event)=>event.id!==action.payload)
         },
        changeMeet(state,action){
            console.log(action.payload);
            const index = state.events.findIndex(item=>item.id === action.payload.id);
            if(index!== -1){
                state.events[index]=action.payload
            }
        }

	},
    extraReducers: {
        [fetchAllEvents.pending]:(state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchAllEvents.fulfilled]:(state,action)=>{
            state.status = 'resolved';
            state.events = action.payload;
        },
        [changeEvent.rejected]:setError,
        [fetchAllEvents.rejected]:setError,
        [delEvent.rejected]:setError,
        [addNewEvent.rejected]:setError
    }
	
});
export const {addPost,removePost,changeMeet} = eventSlice.actions;
export default eventSlice.reducer;