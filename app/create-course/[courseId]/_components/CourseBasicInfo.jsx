import { Button } from '@/@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5 '>
        <div  className='grid grid-cols-1 md:grid-cols-2' >
            <div>
                <h2 className='font-bold text-2xl ' >{course?.courseOutput?.course?.name}</h2>
                <p className='text-sm text-grid-400 mt-3' >{course?.courseOutput?.course?.description}</p>
                <div className='flex flex-row mt-5'>

                     <Image src={'/rocket.gif'}  alt = "rocket" width={50} height={50}  />
                     <h3 className='mt-5 font-medium  ' > {course?.category} </h3>
                     <Image src={'/circle.gif'} className='ml-64 -mt-5'  alt = "rocket" width={60} height={60}/>
                </div>
                
                 <Button className=" mt-5 w-full">Start</Button>
            </div>
            <div className="">
                <Image src={'/boss.gif'} alt ="boos " width={300} height={300} className='w-full  h-[250px] object-cover '  />
            </div>
        </div>
       
    </div>
  )
}

export default CourseBasicInfo