'use client'

const AddIdea = ({label, handleClick}) => {
  return (
    <button onClick={handleClick} className="bg-blue-600 text-white font-medium py-2 px-8 rounded-full">{label}</button>
  )
}

export default AddIdea