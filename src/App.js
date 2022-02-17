import logo from './logo.svg';
import './App.css';
import react, { useState, useRef, useEffect } from 'react'
import { AiOutlineLike, AiOutlineEdit, } from 'react-icons/ai'
import { BiPhotoAlbum, BiCommentDetail } from 'react-icons/bi'
import { MdOutlineLiveTv } from 'react-icons/md'
import { OutsideClickHandler } from './OutsideClickHandler';

function App() {
  const [inputShow, setInputShow] = useState(false)
  const inputref = useRef()
  const handleClickOutside = e => {
    if (!inputref.current.contains(e.target)) {
      setInputShow('none');
    }
  };
  const handleClickInside = () => setInputShow('flex');

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  return (
    <>
      <div className="container">
        <div className="post">
          <div className="header">
            <div className="header-child"><AiOutlineEdit />Compose Post</div>
            <div className="header-child1"><BiPhotoAlbum />Photo/Video Album</div>
            <div className="header-child1"><MdOutlineLiveTv />Live Video</div>
          </div>
          <div className="input">
            <input ref={inputref} className="inputbox" onClick={() => setInputShow(true)} placeholder='whats on your mind'></input>
          </div>
          {/* <div style={{display : `${inputShow}`}} className="addons">
            <div className="addons-1"> Tag Friends</div>
            <div className="addons-2"> Check in</div>
            <div className="addons-3"> Gif</div>
            <div className="addons-4"> Tag Event</div>
            <div className='postbutton'>
              <button className='button'>post</button>
            </div>
          </div> */}
          <OutsideClickHandler show={inputShow} onClickOutside={() => setInputShow(false)} />
        </div>
        <div className="feeds">
          <div className='feedBorder'>
            <div className='feedstext'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </div>
            <div className='feedimage'> <img alt='img' src='https://picsum.photos/340/200' /> </div>
            <div className='feedsFooter'>
              <div className='like'><AiOutlineLike style={{ marginTop: '5px' }} />Like</div>
              <div className='comment'><BiCommentDetail style={{ marginTop: '5px', marginRight: '3px' }} />Comment</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
