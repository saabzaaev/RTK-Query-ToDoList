import { useState } from "react"
import { useDeleteUserMutation, useEditUserMutation, useGetDataQuery, usePostUserMutation } from "./reducer/todoSlice/todoSlice"


function App()
{
  const [name ,setName] = useState("")
  const [idx ,setIdx] = useState(null)

  const {data} = useGetDataQuery()

  const [deleteUser] = useDeleteUserMutation()
  const [postUser] = usePostUserMutation()
  const [editUser] = useEditUserMutation()

  const [saveButton ,setSaveButton] = useState(false)

  return (
    <main>
      {
        saveButton ?
        (
          <button className="bg-blue-500 text-white text-[20px] rounded-md p-[10px_50px]" onClick={() => {editUser({name:name , status:true , id:idx}) , setSaveButton(false) ,setName("")}}>Save</button>
        ):
        (
          <button className="bg-blue-500 text-white text-[20px] rounded-md p-[10px_50px]" onClick={() => postUser({name:name , status:false})}>Post</button>
        )
      }
      <input className="border-[2px] border-gray-500" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {
        data?.map(el => 
        (
          <div className="flex flex-col gap-2 border-[2px] border-black rounded-md p-[10px]">
            <p>{el?.name}</p>
            <button onClick={() => deleteUser(el.id)}>Delete</button>
            <button onClick={() => {setName(el.name) ,setSaveButton(true) ,setIdx(el.id)}}>Edit</button>
          </div>
        )
        )
      }
    </main>
  )
}

export default App
