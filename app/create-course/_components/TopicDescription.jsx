import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {
    
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange =(fieldName, value)=>{
        setUserCourseInput((prev)=>({
            ...prev,
            [fieldName]:value,

        }))
    }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* Input Topic */}
        <div className='mt-5' >
            <label> Write The Topic for which you want to generate the a course(e.g., Python Course, Yoga , Machine Learning, etc): </label>
                <Input placeholder={'Topic'} defaultValue={userCourseInput?.topic}  onChange={(e)=>handleInputChange('topic',e.target.value)  } className="h-14 text-xl "  />
            
        </div>
        <div className='mt-5' >
            <label> Tell us more about your course, what you want to include in the course (Optional)  </label>
            <Textarea placeholder = "About your course" defaultValue={userCourseInput?.description}  onChange={(e)=>handleInputChange('description',e.target.value)  } className="h-24 text-xl" />

        </div>
        {/* Text Area Desc  */}
    </div>
  )
}

export default TopicDescription