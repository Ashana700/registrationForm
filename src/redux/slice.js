import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
	name: 'RegistrationForm',
	initialState: [
		{ id: 0, name: 'Ashana', employeeId: '19117021', dob: '03-05-2001' },
	],
	reducers: {
		addEntry: (state, action) => {
			const entry = {
				id: new Date(),
				name: action.payload.name,
				employeeId: action.payload.employeeId,
				dob: action.payload.dob,
			};
			state.push(entry);
		},
		deleteEntry: (state, action) => {
			// return state.filter((entry) => entry.deleteId !== action.payload.id);
			console.log("Done");
			console.log(action.payload.deleteId);
			state = state.filter((entry) => entry.employeeId !== action.payload.deleteId);
			return state;
		},
		editEntry: (state, action) => {
			state = state.map(
				(entry) => {
				if (entry.id == action.payload.id) 
				{
					entry.name = action.payload.name;
					entry.employeeId = action.payload.employeeId;
					entry.dob = action.payload.dob;
				}
			})
		},
	},
});


export const { addEntry, deleteEntry, editEntry } = Slice.actions;

export default Slice.reducer;