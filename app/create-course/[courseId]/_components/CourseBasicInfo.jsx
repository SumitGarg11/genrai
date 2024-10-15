"use client"
import { Button } from '@/@/components/ui/button'
import Image from 'next/image'
import React , {useState} from 'react'
import EditCourseBasicInfo from './EditCourseBasicInfo'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/configs/firebaseConfig'


function CourseBasicInfo({course}) {
  const [selectedFile, setSelectedFile] = useState();
  console.log('sumit 99');

  const onFileSelected =async(event)=> {
    const file=event.target.files[0];
    
    console.log("sumit file",file);
    setSelectedFile(URL.createObjectURL(file));
    const fileName = Date.now()+".jpg"
    const storageRef=ref(storage,'ai-course/'+fileName);
    await uploadBytes(storageRef,file).then((snapshot)=>{
      console.log("Upload File Complete ")
     })
    //  .then(resp=>{
    //   getDownloadURL(storageRef).then(async(downloadUrl)=>{
    //     console.log(downloadUrl);
    //   })
    // })

    
  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5 '>
        <div  className='grid grid-cols-1 md:grid-cols-2' >
            <div>
                <h2 className='font-bold text-2xl ' >{course?.courseOutput?.course?.name} <EditCourseBasicInfo  course ={course}  />   </h2>
                <p className='text-sm text-grid-400 mt-3' >{course?.courseOutput?.course?.description}</p>
                <div className='flex flex-row mt-5'>

                     <Image src={'/rocket.gif'}  alt = "rocket" width={50} height={50}  />
                     <h3 className='mt-5 font-medium  ' > {course?.category} </h3>
                     <Image src={'/circle.gif'} className='ml-64 -mt-5'  alt = "rocket" width={50} height={50}/>
                </div>
                
                 <Button className=" mt-5 w-full">Start</Button>
            </div>
            <div className="">
              <label htmlFor='upload-image' >
                <Image src={ selectedFile?selectedFile:'/boss.gif'} alt ="boos "   width={300} height={300} className='w-full  h-[250px] object-cover  cursor-pointer '  />
                </label>
                <input type="file" id="upload-image" className='opacity-0' onChange={onFileSelected} />
            </div>
        </div>
       
    </div>
  )
}

export default CourseBasicInfo