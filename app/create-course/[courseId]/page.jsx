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
import { Button } from '@/@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';

function CourseLayout({params}) {
  const {user} = useUser();
  const [course,setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    params&&GetCourse();
    console.log("params : ",params);
    
  },[params]);
  const GetCourse=async()=>{
    const result = await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)));
    setCourse(result[0]);
    
  }
  const GenerateChapterContent =() => {
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;
    chapters.forEach(async(chapter,index)=>{
      // const PROMPT="Explain the concept in Detail on Topic: "+course?.name+", Chapter:"+chapter?.name+", in JSON Format with field as title,description in detail, Code Example(HTML Code format) if applicable";
      const PROMPT= "Explain the concept in Detail on Topic:"+course?.name+", Chapter: "+chapter?.name+",in JSON Format  with list of array with field as title,explanation on give chapter in detail, Code Example( Code field  in <precode > format) if applicable";
      
      console.log(PROMPT);
      if(index==0){
        try{
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          console.log(result?.response?.text());
          // Generate Video URL

          // Save Chapter Content + Video URL 
          setLoading(false);
        }catch(e){
          setLoading(false)
          console.log(e)
        }
      }
    })
  }
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44' >
       <div className='flex flex-row items-center justify-center gap-3'> 
       <Image  src={'/vlogger.gif'} width={80} height={80} alt = "vloggre"  />
       <h2 className='font-bold mt-8  text-2xl' >Course Layout</h2>

       <LoadingDialog loading={loading} />
       
       </div>
      {/* Basic Info */}
       
       <CourseBasicInfo course = {course}/>
       
     
      {/* course detail  */} 
      <CourseDetail course = {course} />
      
      {/* List of lesson  */}
      <ChapterList course = {course} />
     <Button  onClick={GenerateChapterContent} className="mt-8 mb-4 font-extrabold " >Generate Course Content</Button>
    </div>
  )
}

export default CourseLayout