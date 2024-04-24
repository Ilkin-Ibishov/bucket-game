import { useState } from "react"
import PreApp from "./preApp"
import RunScreen from "./RunScreen"
export default function App(){
    const [isStart, setStart] = useState(false)
    const [gameScore, setGameScore] = useState(0)
    const handleStartGame = () =>{
        setStart("Start")
    }

    return <>
    <div className=" flex justify-center h-screen">
    {!isStart?<RunScreen text="Start Game" onStart={handleStartGame} />:undefined}
    {isStart==="Lost"?<RunScreen score={gameScore} text="You Lost. Want to start again?" onStart={handleStartGame} />:undefined}
    {isStart === "Start"?<PreApp setGameScore={setGameScore} setStart={setStart} />:undefined}
    </div>
    </>
}