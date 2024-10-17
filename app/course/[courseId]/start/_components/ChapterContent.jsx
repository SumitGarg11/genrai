
import React from 'react'
import YouTube from 'react-youtube'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      
      autoplay: 0,
    },
  };
function ChapterContent({chapter,content}) {
   
    
  return (
    <div className='p-10  ' > 
       <h2 className='font-medium text-2xl  ' >{chapter?.name}</h2>
       <p className='text-gray-500' >{chapter?.about}</p>
       {/* video */}
        <div className='flex justify-center my-6'>
            <YouTube  videoId={content?.videoId}opts={opts} />
        </div>
       {/* Content  */}
       <div>
        {content?.content.map((item,index)=>{
            return (
                <div className='font-semibold p-5 bg-sky-50 mb-3 rounded-lg text-lg' >
                     <h2 className='font-medium text-lg  ' >{item.title}</h2>
                     <p className='whitespace-pre-wrap' >
                     {item?.explanation?.replace(/\*\s?/g, '')}
                     </p>
                     
                     {item?.codeExample && 
                    
                    <div>
                  <pre className="max-w-2xl overflow-x-auto bg-gray-100 p-3 rounded-lg"> {/* Increased max width */}
        <code className="whitespace-pre-wrap">{item?.codeExample}</code>
    </pre>
</div>

                     }
                </div>   
            )
        })}
       </div>


    </div>
  )
}

export default ChapterContent