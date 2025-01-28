import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
const ViewPaste = () => {
  const{id} = useParams();
  const allPastes = useSelector((state)=>state.paste.pastes);

  const paste = allPastes.find((p)=>p._id === id);

  if (!paste) {
    return <div className="error">Paste not found. Please check the URL or try again later.</div>;
  }
  return (
    <div>    
    <div className= "field">
    <input className = "inputField"
    // className="p-2 rounded-2xl mt-2"
      type="text" placeholder="Enter your paste here"
      value ={paste.title}
      disabled
      onChange={(e) => setTitle(e.target.value)}/>
</div>
  <div>
    <textarea className= "text"
      value={paste.content}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your paste here"
      disabled
    />
  </div>
</div>
  )
}

export default ViewPaste