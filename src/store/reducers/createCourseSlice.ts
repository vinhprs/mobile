import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootReducers';
import { stateProps } from '../../utils/type';
import { genSlug } from '../../utils/lib';
import { getStatusTeacher } from '../actions/course.action';

const initialState: stateProps = {
  index: 0,
  tabCourse: [0],
  course: {
    courseName: '',
    description: '',
    price: 0,
    expiredDate: '',
    thumbnail_url: '',
    categoryId: '',
    subCategoryId: '',
    sections: [
      {
        // id: uuid4(),
        sectionName: '',
        lectures: [
          {
            // id: uuid4(),
            lectureName: '',
            lectureType: '',
            amount: '',
            url: '',
            slug:genSlug(10)
          },
        ],
      },
    ],
  },
  status:{}
};
const createCourseSlice = createSlice({
  name: 'createCourse',
  initialState: initialState,
  reducers: {
    updateArray(state: any, actions) {
      state.tabCourse = [
        ...state.tabCourse.filter((p: any) => p !== actions.payload),
        actions.payload,
      ];
      state.tabCourse = state.tabCourse.sort((a: any, b: any) => a - b);
      console.log(state.tabCourse);
    },
    updateIndex(state, actions) {
      state.index = actions.payload;
    },
    updateCourseName(state, actions) {
      state.course.courseName = actions.payload;
    },
    updateDesc(state, actions) {
      state.course.description = actions.payload;
    },
    updatePrice(state, actions) {
      state.course.price = actions.payload;
    },
    updateExpiredDate(state, actions) {
      state.course.expiredDate = actions.payload;
    },
    updateCategoryId(state, actions) {
      state.course.categoryId = actions.payload;
    },
    updateSubCategoryId(state, actions) {
      state.course.subCategoryId = actions.payload;
    },
    updateSections(state: any, actions) {
      state.course.sections = actions.payload;
    },
    updateLecture(state, actions) {
      const { sectionIndex, value } = actions.payload;
      state.course.sections[sectionIndex].lectures = value;
    },
    addSectionItem(state, actions) {
      state.course.sections = [...state.course.sections, actions.payload];
    },
    addLectureItem(state, actions) {
      const { sectionIndex, item } = actions.payload;
      state.course.sections[sectionIndex].lectures = [
        ...state.course.sections[sectionIndex].lectures,
        item,
      ];
    },
    updateSectionName(state, actions) {
      const { sectionIndex, value } = actions.payload;
      state.course.sections[sectionIndex].sectionName = value;
    },
    updateLectureName(state, actions) {
      const { sectionIndex, lectureIndex, value } = actions.payload;
      state.course.sections[sectionIndex].lectures[lectureIndex].lectureName =
        value;
    },
    updateLectureExamId(state, actions) {
      const { sectionIndex, lectureIndex, value } = actions.payload;
      state.course.sections[sectionIndex].lectures[lectureIndex].examId = value;
    },
    
    updateLectureQuizId(state:any, actions) {
      const { sectionIndex, lectureIndex, quizIndex,value } = actions.payload;
      state.course.sections[sectionIndex].lectures[lectureIndex].quizzs[quizIndex].quizzId= value;
    },
    updateLectureQuizQuestionTime(state:any, actions) {
      const { sectionIndex, lectureIndex, quizIndex,value } = actions.payload;
      state.course.sections[sectionIndex].lectures[lectureIndex].quizzs[quizIndex].questionTime= value;
    },
    updateAddQuiz(state:any, actions) {
      const { sectionIndex, lectureIndex,item } = actions.payload;
      if (!state.course.sections[sectionIndex].lectures[lectureIndex].quizzs) {
        state.course.sections[sectionIndex].lectures[lectureIndex].quizzs = [];
      }
      
      // Spread `item` into `quiz`
      state.course.sections[sectionIndex].lectures[lectureIndex].quizzs.push(item);
    },
    deleteItemQuiz(state:any, actions) {
      const { sectionIndex, lectureIndex,quizIndex } = actions.payload;
      
      // Spread `item` into `quiz`
      state.course.sections[sectionIndex].lectures[lectureIndex].quizzs.splice(quizIndex,1);
    },
    updateLectureAmount(state, actions) {
      const { sectionIndex, lectureIndex, value } = actions.payload;
      state.course.sections[sectionIndex].lectures[lectureIndex].amount = value;
    },
    
    updateLectureType(state, actions) {
      const { sectionIndex, lectureIndex, value, urlValue } = actions.payload;
      if (value === 'VIDEO') {
        state.course.sections[sectionIndex].lectures[lectureIndex].lectureType =
          value;
        state.course.sections[sectionIndex].lectures[lectureIndex].url =
          urlValue;
      } else {
        state.course.sections[sectionIndex].lectures[lectureIndex].lectureType =
          value;
        state.course.sections[sectionIndex].lectures[lectureIndex].url =
          urlValue;
      }
    },
    updateThumbnail(state, actions) {
      state.course.thumbnail_url = actions.payload;
    },
    deleteSectionItem(state, actions) {
      const { sectionIndex } = actions.payload;
      state.course.sections.splice(sectionIndex, 1);
    },
    deleteLectureItem(state, actions) {
      const { sectionIndex, lectureIndex } = actions.payload;
      state.course.sections[sectionIndex].lectures.splice(lectureIndex, 1);
    },
    swapSection(state, action) {
      const { indexOne, indexTwo } = action.payload;
      if (
        indexOne < 0 ||
        indexTwo < 0 ||
        indexOne >= state.course.sections.length ||
        indexTwo >= state.course.sections.length
      ) {
        return;
      } else {
        const newArray = [...state.course.sections]; // Create a copy of the original array
        [newArray[indexOne], newArray[indexTwo]] = [
          newArray[indexTwo],
          newArray[indexOne],
        ]; // Swap the items
        // setSections(newArray);
        state.course.sections = newArray;
      }
    },

    swapLecture(state, action) {
      const { indexOne, indexTwo, sectionIndex } = action.payload;
      if (
        indexOne < 0 ||
        indexTwo < 0 ||
        indexOne >= state.course.sections[sectionIndex].lectures.length ||
        indexTwo >= state.course.sections[sectionIndex].lectures.length
      ) {
        return;
      } else {
        const newArray: any = [...state.course.sections]; // Create a copy of the original array
        [
          newArray[sectionIndex].lectures[indexOne],
          newArray[sectionIndex].lectures[indexTwo],
        ] = [
          newArray[sectionIndex].lectures[indexTwo],
          newArray[sectionIndex].lectures[indexOne],
        ]; // Swap the items
        // setSections(newArray);
        state.course.sections = newArray;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStatusTeacher.fulfilled,(state,actions)=>{
      state.status = actions.payload.data;
    });
  },
});
export const {
  updateArray,
  updateIndex,
  updateCategoryId,
  updateCourseName,
  updateDesc,
  updatePrice,
  updateSections,
  updateSubCategoryId,
  updateExpiredDate,
  updateThumbnail,
  addSectionItem,
  deleteLectureItem,
  deleteSectionItem,
  swapSection,
  updateLectureAmount,
  updateLectureName,
  updateLectureType,
  updateSectionName,
  addLectureItem,
  swapLecture,
  updateLecture,
  updateLectureExamId,
  updateLectureQuizId,
  updateLectureQuizQuestionTime,
  updateAddQuiz,
  deleteItemQuiz
} = createCourseSlice.actions;
export default createCourseSlice.reducer;
export const selectCreateCourse = (state: RootState) =>
  state?.createCourse?.tabCourse;
export const selectIndexCreateStep = (state: RootState) =>
  state.createCourse.index;
export const selectCoursesCreated = (state: RootState) =>
  state.createCourse.course;
export const selectStatusTeacher = (state:RootState)=>state.createCourse.status;