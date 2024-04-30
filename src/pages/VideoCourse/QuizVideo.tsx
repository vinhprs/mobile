import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Question from '../Assingments/Question';
import QuestionQuiz from './QuizQuestion';
import { useSelector } from 'react-redux';
import { getResultQuiz, resetPostQuiz, selectPostQuiz, selectQuizResult, selectSortTime, updateArrayQuizToPost, updateQuizId, updateQuizList, updateSortCheckTime } from '../../store/reducers/quizSlice';
import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/appHooks';
import { postQuizExam } from '../../store/actions/quiz.action';
import QuestionResultDetail from '../ResultExam/QuestionResultDetail';
import { LocalStorage } from '../../utils/LocalStorage';

const QuizVideo = ({item,played,setIsPause,isPause,quizList,videoRef}:any) => {
  const sortCheckItem:any = useSelector(selectSortTime);
  const postQuiz = useSelector(selectPostQuiz);
  const getQuizResult:any = useSelector(selectQuizResult);
  const dispatch = useAppDispatch();
  const [isLoading,setIsLoading] = useState(false);
  const [showResult,setShowResult] = useState(false);
  useEffect(()=>{
    const checkItem = quizList.filter((item:any,index:number)=>item?.questionTime < played && !item?.quizz?.isComplete);
    const sortCheckItem = checkItem.sort((a:any,b:any)=>a?.questionTime - b?.questionTime);
    dispatch(updateSortCheckTime(sortCheckItem));
    if(sortCheckItem.length > 0){
      setIsPause(false);
      dispatch(updateQuizId(Number(sortCheckItem[0]?.quizzId)));
      dispatch(updateArrayQuizToPost({
        length:sortCheckItem[0]?.quizz?.questions?.length
      }));
      // videoRef?.currentTime.seekTo(sortCheckItem.questionTime);
      console.log('videoREFL',videoRef.current);
    }
    // if(played === Number(item?.questionTime) && item?.quizz?.isComplete === false){
    //   console.log('🚀 ~ QuizVideo ~ item:', item);
    //   setIsPause(false);
    //   dispatch(updateQuizId(Number(item?.quizzId)));
    //   dispatch(updateArrayQuizToPost({
    //     length:item?.quizz?.questions?.length
    //   }));
    // }
  },[played,item]);
  const handlePost = async()=>{
    setIsLoading(true);
    const res:any = await dispatch(postQuizExam(postQuiz));
    if( res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ handlePost ~ res:', res);
      setIsLoading(false);
      setShowResult(true);
      dispatch(getResultQuiz(res.payload.data));
    }
  };

  const resetPostQuizs = ()=>{
    dispatch(resetPostQuiz({}));
    setShowResult(false);
  };
  const continuedCourse = ()=>{
    setIsPause(true);
    dispatch(updateSortCheckTime([]));
    setShowResult(false);
    const newArray = quizList.filter((item:any,index:number)=>item._id !== sortCheckItem[0]?._id);
    dispatch(updateQuizList(newArray));
  };
  
  useEffect(()=>{
    
  },[]);
  return (
    <>
      {
        showResult && sortCheckItem.length > 0 ? (
          <div className='absolute top-0 left-0 z-[1] w-full h-full bg-white overflow-y-scroll'>
            <div className='z-auto '>
              <div className="flex flex-col gap-y-[20px]">
                {getQuizResult?.correction?.map((item: any, index: any) => (
                  <QuestionResultDetail item={item} index={index} key={index}/>
                ))}
              </div>
              {getQuizResult?.isCorrect ? (
                <Button
                  bg="#FF6636"
                  color="#FFFFFF"
                  _hover={{ bg: '#fb5b2a' }}
                  borderRadius="base"
                  onClick={continuedCourse}
                  isLoading={isLoading}
                  marginTop="10px"
                >
                    Tiếp tục bài học
                </Button>
              ):(
                <Button
                  bg="#FF6636"
                  color="#FFFFFF"
                  _hover={{ bg: '#fb5b2a' }}
                  borderRadius="base"
                  onClick={resetPostQuizs}
                  isLoading={isLoading}
                  marginTop="10px"
                >
                    Làm lại bài quizz
                </Button>
              )}
            </div>
          </div>
        ):(
          <>
            {
              (!showResult && sortCheckItem?.length > 0) && (
                <div className='absolute top-0 left-0 z-[1] w-full h-full bg-white'>
                  <div className='z-auto'>
                    <div>
                      <h1 className='font-bold text-[20px]'>Đề Quiz {parse(`${item.quizz.title}`)}</h1>
                      <div>
                        {
                          sortCheckItem[0]?.quizz.questions.map((itemQuiz:any,index:number)=>(
                            <QuestionQuiz index={index + 1} quiz={itemQuiz} key={itemQuiz?._id} />
                          ))
                        }
                      </div>
                    </div>
                    <Button
                      bg="#FF6636"
                      color="#FFFFFF"
                      _hover={{ bg: '#fb5b2a' }}
                      borderRadius="base"
                      onClick={handlePost}
                      isLoading={isLoading} 
                    
                    >
                  Nộp bài
                    </Button>
                  </div>
                </div>
              )
            }
          </>
        )
      }
    </>
   
  );
};

export default QuizVideo;