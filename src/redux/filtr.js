const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filterState',
  initialState: initialFilterState,
  reducers: {
    fromfilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { fromfilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
