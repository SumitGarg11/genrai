'use client'
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect,useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo';
import Image from 'next/image';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';

function CourseLayout({params}) {
  const {user} = useUser();
  const [course,setCourse] = useState([]);
  useEffect(()=>{
    params&&GetCourse();
    console.log("params : ",params);
    
  },[params]);
  const GetCourse=async()=>{
    const result = await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)));
    setCourse(result[0]);
    console.log("result : ",result);
  }
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44' >
       <div className='flex flex-row items-center justify-center gap-3'> 
       <Image  src={'/vlogger.gif'} width={80} height={80} alt = "vloggre"  />
       <h2 className='font-bold mt-8  text-2xl' >Course Layout</h2>
       
       </div>
      {/* Basic Info */}
       
       <CourseBasicInfo course = {course}/>
       
     
      {/* course detail  */} 
      <CourseDetail course = {course} />
      
      {/* List of lesson  */}
      <ChapterList course = {course} />

    </div>
  )
}

export default CourseLayout