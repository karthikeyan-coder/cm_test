import { useEffect, useRef, useState } from 'react';
import Tenor from 'react-tenor'
import './App.css';
// import tenor from "tenorjs";
import "react-tenor/dist/styles.css";
export function OutsideClickHandler(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;
  const [showgif, setShowgif] = useState(false);

  // const Tenort = tenor.client({
  //   Key: "9BI7JLQZ2HXK", // https://tenor.com/developer/keyregistration
  //   Filter: "off", // "off", "low", "medium", "high", not case sensitive
  //   Locale: "en_US", // Your locale here, case-sensitivity depends on input
  //   MediaFilter: "minimal", // either minimal or basic, not case sensitive
  //   DateFormat: "D/MM/YYYY - H:mm:ss A" // Change this accordingly
  // });

  // const Tenort = null
  // useEffect(() => {
  //   Tenort.Trending.GIFs("2")
  //     .then((Results) => {
  //       Results.forEach((Post) => {
  //         console.log(`Item #${Post.id} (${Post.created}) @ ${Post.url}`);
  //       });
  //     })
  //     .catch(console.log);
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) {
    return null;
  }

 
  return (
    <div ref={ref} className='info-box'>
      <div className="addons">
        <div className="addons-1"> Tag Friends</div>
        <div className="addons-2"> Check in</div>
        <div><button className="addons-3" onClick={() => setShowgif(true)}>Gif</button>  </div>
        {showgif ? (
          <div className='gif'>
            <div className='close' onClick={()=>setShowgif(false)}>x</div>
            <Tenor
              contentFilter="high"
              token="9BI7JLQZ2HXK"
              onSelect={(result) => setShowgif(false)}
            />
          </div>
        ) : null}
        <div className="addons-4"> Tag Event</div>
        <div className='postbutton'>
          <button className='button'>post</button>
        </div>
      </div>
    </div>);
}