'use client'

const IdeaCard = ({text, tag, username, date}) => {
  
  const parseDate = ()=>{
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate
  }

  return (
    <div className="md px-5 py-4 ring-2 rounded-md basis-[23.7%] flex flex-col justify-between">
        <div>
            <div className="flex justify-between">
                <div><span className='text-[13px] inline-block px-4 py-[4px] bg-blue-500 text-white rounded-full'>{tag}</span></div>
                <div><button onClick={()=> console.log('11')} className="text-[13px] h-6 w-6 rounded-full bg-red-700 text-white underline"><i className="bi bi-three-dots-vertical"></i></button></div>
            </div>
            <p className="py-4">{text}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-blue-600">@{username}</p>
          <p className="text-sm text-gray-700">{parseDate()}</p>
        </div>
    </div>
  )
}

export default IdeaCard