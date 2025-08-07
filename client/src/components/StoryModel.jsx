import { ArrowLeft, TextIcon } from 'lucide-react'
import React, { useState } from 'react'

const StoryModel = ({setShowModal, fetchStories}) => {
    const bgColors = ["#4f46e5", "#7c3aed", "#db2777", "#e11d48", "#ca8a04","#0d9488"]
    const [mode, setMode] = useState("text")
    const [background, setBackground] = useState(bgColors[0])
    const [text, setText] =useState("")
    const [media, setMedia] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)


    const handleMediaUpload = (e)=>{
        const file = e.target.files?.[0];
        i(file)
        {
            setMedia(file);
            setPreviewUrl(URL.createObjectURL(file));
        }

    }
    const handleCreateStory = async (param) => {

    }
  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex
    items-center justify-center p-4'>
        <div className='w-full max-w-md'>
            <div className='text-center mb-4 flex items-center justify-between'>
                <button onClick={()=> setShowModal(false)} className='text-white p-2 cursor-pointer'>
                    <ArrowLeft />

                </button>
                <h2 className='text-lg font-semibold'> Create Story</h2>
                <span className='w-10'></span>
            </div>
            <div className='rounded-lg h-96 flex items-center justify-center relative'
            style={{backgroundColor: background}}>
                {mode === 'text' && (
                    <textarea className='bg-transparent text-white w-full h-full p-6 text-lg resize-none
                    focus:outline-none' placeholder='what is your post?' onChange={(e)=>setText(e.target.value)} value={text}/>
                )}
                {
                    mode === 'media' && previewUrl && (
                        media?.type.startsWith('image') ? (
                            <img src={previewUrl} alt='' className='object-contain max-h-full'/>
                        ):(
                            <video src={previewUrl} className='object-contain max-h-full'/>
                        )
                    )
                }

            </div>
            <div className='flex mt-4 gap-2'>
                {
                    bgColors.map((color)=>(
                        <button key={color} className='w-6 h-6 rounded-full ring cursor-pointer'
                         style={{backgroundColor: color}} onClick={() =>setBackground(color)}/>
                    ))
                }

            </div>
            <div className='flex gap-2 mt-4'>
                <button onClick={()=> {setMode('text'); setMedia(null); setPreviewUrl(null)}} className={`flex-1 flex 
                    items-center justify-center gap-2 p-2 rounded ${mode === 'text' ? "bg-white text-black" : "bg-zinc-800"}`}>
                        <TextIcon size={8}/> Text
                    </button>
                    

            </div>
        </div>
    </div>
  )
}

export default StoryModel