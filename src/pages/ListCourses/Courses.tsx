import React from 'react'
import Course from './Course'
import Pagination from './Pagination'

const Courses = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-y-3'>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
      </div>
      <Pagination/>
    </div>
  )
}

export default Courses