import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {

  const pastes = useSelector((state)=>state.paste.pastes);
  const [searchTerm , setSearchTerm]= useState('');

  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div>
      <input className='search'
        type='search'
        placeholder='Search Paste'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <div className='pastes'>{
        filteredData.length > 0 && 
        filteredData.map((paste)=>{
        return(
          <div className='paste' key={paste?._id}>
          <div className='title'> 
          {paste.title}
          </div>
          <div className='content'>
          {paste.content}
          </div>
          <div className='buttons'>
            <button className='button'>
            <a href={`/?pasteId=${paste?._id}`}>
              Edit
              </a>
            </button>
            <button className='button'>
            <a href={`/pastes/${paste?._id}`}>
              View
              </a>
            </button>
            <button onClick={() =>handleDelete(paste?._id)} className='button'>
              Delete
            </button>
            <button onClick={()=>{navigator.clipboard.writeText(paste?.content)
            toast.success("Copied to clipboard")}} className='button'>
              Copy
            </button>
            <button className="button">
                    <a
                      href={`whatsapp://send?text=${encodeURIComponent(
                        paste?.content
                      )}`}
                    >
                      Share 
                    </a>
                  </button>

          </div>
          <div>
            {paste.createdAt}
            </div>
          </div>
        )}
        )
      }
    </div>
    </div>
  );
};

export default Paste;