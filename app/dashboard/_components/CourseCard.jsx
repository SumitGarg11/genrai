import Image from 'next/image'
import React from 'react'
import DropdownOption from './DropdownOption'


function CourseCard({course}) {
  return ( 
    <div className='shadow-lg  hover:scale-105 transition-all cursor-pointer rounded-lg' >
        <Image src={course?.courseBanner} width={300} height={190} className='w-full  h-[200px] object-fit  rounded-lg ' />
       <div className='p-2' >
            <div className='flex gap-1'>
                <div className='mt-4 '>
                <h2 className='font-extrabold text-lg' > {course?.courseOutput?.course?.name} </h2>
                </div>
                <DropdownOption  >
                     <Image src={'/trash.gif'} unoptimized  alt = "rocket" width={70} height={50}/>
                </DropdownOption>
            </div>
         
          <div>
            
            <div className='flex gap-2  '>
                {/* image */}
                <Image src={'/boss2.gif'} unoptimized  alt = "rocket" width={50} height={50}  />
                <div className='mt-3 flex  flex-row'>
                    
                    <h2 className='font-extrabold mt-5 ml-1 text-lg'>{course?.courseOutput?.course?.noOfChapters}</h2>
                    <h2 className='text-lg font-bold mt-5 ml-1 text-primary'> Module</h2>

                    <h2  className='mt-5 ml-10 bg-primary text-white p-1 rounded-lg font-extrabold overflow-hidden  '>{course?.category} </h2>
                     
                </div>

     
            </div>
            <h2 className='mt-2 font-extrabold bg-blue-400/30 p-2 rounded-lg ' >{course?.level} Level</h2>
          </div>
       </div>
    </div>
  )
}

export default CourseCard