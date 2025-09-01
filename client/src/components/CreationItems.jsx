
import MarkDown from 'react-markdown'
import { useState } from 'react'

const CreationItems = (props) => {

    const [expanded , setExpanded] = useState(false)


  return (
    <div onClick={() => setExpanded(!expanded)} className='p-4 max-w-5xl text-sm bg-white border border-gray-200
    rounded-lg cursor-pointer'>
        <div className='flex justify-between items-center gap-4'>
            <div>
                <h2>{props.item.prompt}</h2>
                <p className='text-gray-500'>{props.item.type} - {new Date(props.item.created_at).toLocaleDateString()}</p>
            </div>
            <button className='bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af]
            px-4 py-1 rounded-full'>
                {props.item.type}
            </button>
        </div>


        {
            expanded && (
                <div>
                    {props.item.type === 'image' ? (
                        <div>
                            <img src={props.item.content} alt="image" className='mt-3
                            w-full max-w-md' />
                        </div>
                    ) : (
                        <div className='mt-3 h-full overflow-y-scroll text-sm
                        text-slate-700'>
                            <div className='reset-tw'>
                                <MarkDown>{props.item.content}</MarkDown>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    </div>
  )
}

export default CreationItems