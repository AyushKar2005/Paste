import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
// import { addToPastes, updateToPastes } from 'pasteSlice'; 
const Home = () => {
  const [title, setTitle] = useState("");
  const[value,setValue]=useState('');
  const[searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p)=>p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId])
  function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    

    if(pasteId){
      dispatch(updateToPastes(paste));
    }else{
      dispatch(addToPastes(paste))
    }

    setTitle('')
    setValue('')
    setSearchParams({})
  }
  return (
    <div>    
    <div className= "field">
    <input className = "inputField"
    // className="p-2 rounded-2xl mt-2"
      type="text" placeholder="Enter your paste here"
      value ={title}
      onChange={(e) => setTitle(e.target.value)}/>
    <button onClick={createPaste} className="button">
    {
      pasteId ? "Update My Paste" : "Create My Paste"
    }
    </button>
</div>
  <div>
    <textarea className= "text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your paste here"
    />
  </div>
</div>
  )
}

export default Home