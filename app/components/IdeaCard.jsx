'use client'

const IdeaCard = ({text, tag, username, date}) => {

 

  return (
    <div className="md px-5 py-4 ring-2 rounded-md basis-[23.7%] flex flex-col justify-between">
        <div>
            <div className="flex justify-between">
                <div><span className='text-[13px] inline-block px-4 py-[4px] bg-blue-500 text-white rounded-full'>{tag}</span></div>
                <div><button onClick={()=> console.log('11')} className="text-[13px] h-6 w-6 rounded-full bg-red-700 text-white underline"><i class="bi bi-three-dots-vertical"></i></button></div>
            </div>

            <p className="py-3">{text}</p>
        </div>

        <p className="text-sm text-blue-600">@{username}</p>
    </div>
  )
}

export default IdeaCard