import { API_URL } from "../services";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchAllEvents = createAsyncThunk(
    'users/fetchPosts',
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

const setError = (state,action)=>{
    state.status = 'rejected';
    state.error = action.payload
  }
const eventSlice = createSlice({
	name: 'events', // название слайса
	initialState: { 
        events: [
            // {id: 1, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 2, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 3, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 4, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 5, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 6, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 7, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 8, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 9, name: "Созвон с пиццой", actual: false, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 10, name: "Созвон с чиксами", actual: false, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            // {id: 11, name: "Созвон с пиццой", actual: false, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
            // qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
            
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
        [fetchAllEvents.rejected]:setError,
        [delEvent.rejected]:setError,
        [addNewEvent.rejected]:setError
    }
	
});
export const {addPost,removePost,changeMeet} = eventSlice.actions;
export default eventSlice.reducer;