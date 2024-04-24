import playButton from '../src/assets/play-button-arrowhead.png'

export default function RunScreen({text, onStart, score}){
    let scoreText = ""
    if(text==="You Lost. Want to start again?"){
        scoreText = <p className=' text-2xl py-4 font-semibold text-center text-white'>Your score was: {score}</p>
    }
    return<div className="w-[80%] h-[90%] bg-blue-500 mt-10 flex flex-col items-center gap-10">
    <div>
        <h1 className=" font-bold text-white text-3xl pt-20">{text}</h1>
        {scoreText&&scoreText}
    </div>
    <img width="150rem" height="150rem" className=" cursor-pointer" onClick={onStart} src={playButton} alt="" />
</div>
}