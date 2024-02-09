import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';

interface CourseTab {
  index: number;
}
const initialState: CourseTab = {
  index: 0,
};
const courseTabSlice = createSlice({
  name: 'courseTab',
  initialState: initialState,
  reducers: {
    updateTabCourse(state, actions) {
      state.index = actions.payload;
    },
  },
});
export const { updateTabCourse } = courseTabSlice.actions;
export default courseTabSlice.reducer;
export const selectCourseTab = (state: RootState) => state.courseTab.index;
