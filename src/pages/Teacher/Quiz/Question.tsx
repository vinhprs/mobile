import React from 'react';
import { useSelector } from 'react-redux';
import { selectQuiz, setAddQuiz } from '../../../store/reducers/quizSlice';
import QuizQuestionCreateItem from './QuizQuestionCreateItem';
import { useAppDispatch } from '../../../hooks/appHooks';
interface QuizProps {
    title: string;
    answers: Array<string>;
    correctAnswers: Array<string>;
    explain: string;
    questionLevel: string;
  }
const Question = () => {
  const dispatch = useAppDispatch();
  const addQuizQuestion = () => {
    dispatch(
      setAddQuiz({
        title: '',
        answers: ['', '', '', ''],
        correctAnswers: [],
        explain: '',
        questionLevel: 'Nhận biết',
      })
    );
  };
  const quizQuestion = useSelector(selectQuiz);
  console.log('🚀 ~ Question ~ quizQuestion:', quizQuestion);
  return (
    <div>
      <h1 className="text-[18px] font-semibold mb-2">Tạo quizz</h1>
      <div className="flex flex-col gap-y-[24px]">
        {quizQuestion.questions.map((item: QuizProps, index: number) => (
          <QuizQuestionCreateItem
            item={item}
            index={index}
            key={index}
            questions={quizQuestion.questions}
          />
        ))}
      </div>
      <button
        onClick={addQuizQuestion}
        className="bg-[#FF6636] text-white text-[14px] px-[12px] py-[8px] mt-[24px]"
      >
        Thêm câu hỏi
      </button>
    </div>
  );
};

export default Question;