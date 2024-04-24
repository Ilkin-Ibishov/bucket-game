import React, { useState, useEffect, useRef } from "react";
import Ball from "./components/Ball";
import Bucket from "./components/Bucket";
import ScoreTable from "./components/ScoreTable";
import backgroundPhoto from "./assets/backgroundSky.jpg"
function PreApp({setStart, setGameScore}){
  const bucketX = useRef()
  const [ballY, setBallY] = useState(50);
  const [randomX, setRandomX] = useState(50)
  const [score, setScore] = useState(0)
  const [lifeCount, setLifeCount] = useState(['life01', 'life02', 'life03']);
  useEffect(() => {
    const interval = setInterval(() => {
      setBallY((prevBallY) => prevBallY + 0.4 + score/20);
    }, 20);
    console.log("aaa", ballY);
    return () => clearInterval(interval);
  }, [ballY]);
  useEffect(() => {
    if (ballY >= 95) {
      if(lifeCount.length === 1 && (randomX<bucketX.current.getCoordinateX() || randomX>bucketX.current.getCoordinateX() + 8)){
        setGameScore(score)
        setStart("Lost")
      }else if(randomX>bucketX.current.getCoordinateX() && randomX<bucketX.current.getCoordinateX() + 8){
        setScore(prevScore=> prevScore+1)
      }else{
        setLifeCount(prevLifeCount => prevLifeCount.slice(0, -1));
      }
      setBallY(10);
      setRandomX(Math.random()*80 + 10)
    }
    
  }, [ballY]);
  console.log(randomX);
  return (
    
      <div className=" w-screen h-screen flex justify-center ">
        <div className="w-[80%] h-[90%] relative mt-10"  style={{ backgroundImage: `url(${backgroundPhoto})`, backgroundSize: 'cover' }}>
        <Ball coordinateY={ballY} coordinateX={randomX} />
        <Bucket ref={bucketX} />
        <ScoreTable score={score} lifeCount={lifeCount} />
      </div>
      </div>
  );
}

export default PreApp;