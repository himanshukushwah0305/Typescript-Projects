import React, { memo, useEffect, useRef, useState } from "react";
import './style.css';

interface ResultProps {
  result: string;
}
type OutResult = string;

const Output = ({ result }: ResultProps) => {
  const [outResult, setOutResult] = useState<OutResult>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const tempVideo = require('../../assets/thala.mp4')

  useEffect(() => {
    const checkString = () => {
      const isLetters = /^[a-zA-Z]+$/.test(result);
      const isNumbers = /^[0-9]+$/.test(result);
      
      if(result === ""){
        setOutResult("")
      }else if (isLetters) {
        setOutResult(
          result.length === 7 ? "Thala For a Reason" : "Not a Thala"
        );
      } else if (isNumbers) {
        const digits = result.split("").map(Number);
        let sum = digits.reduce(
          (acc: number, curr: number): number => acc + curr,
          0
        );
        while (sum > 9) {
          sum = sum
            .toString()
            .split("")
            .map(Number)
            .reduce((acc: number, curr: number): number => acc + curr, 0);
        }
        setOutResult(sum === 7 ? "Thala For a Reason" : "Not a Thala");
      } else {
        setOutResult("Invalid String...");
      }

      const videoElement = videoRef.current;
      if(videoElement){
        if(outResult === "Thala For a Reason"){
          videoElement.play();
          videoElement.style.display = "block"
        }
      }
    };
    checkString();
  }, [result, outResult]);

  return (
    <>
      <p>{outResult}</p>
      <video
        ref={videoRef}
        style={{ display: 'none' }}
        src= {tempVideo}
        width={360}
        height={240}
      >Not Support
      </video>
    </>
  );
};
export default memo(Output);
