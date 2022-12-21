import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchExamResults } from '../Redux/Actions/actions';

export const ExamResults = () => {
  const examResultsId = useParams();
  const dispatch = useDispatch();
  console.log(examResultsId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{dispatch(fetchExamResults(examResultsId))}, [])
  return (
    <div>ExamResults</div>
  )
}
