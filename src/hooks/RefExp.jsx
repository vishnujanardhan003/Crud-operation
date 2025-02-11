import React, { useRef, useState} from "react";
import video from './vishnu.mp4';

const RefExp = () => {
    const [play, setPlay] = useState(true);
    let videoRef = useRef();
    console.log(videoRef);
    let playORpause=()=>{
        if(play ===true){
            videoRef.current.play();
            setPlay(false);
            console.log(play);
        }else{
            videoRef.current.pause();
            setPlay(true);
            console.log(play);
        }
    }
    return (
      <div>
          <video src={video} ref={videoRef} onClick={playORpause}>video</video>
      </div>
    )
}

export default RefExp