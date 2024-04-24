import heartImage from '../assets/heart.png'; // Import the heart image file

export default function ScoreTable({ score, lifeCount }) {
  return (
    <>
      <div className="absolute top-5 left-[85%] text-3xl font-bold text-green-700">
        <p>Score: {score}</p>
        {/* Use map to create an array of JSX elements */}
        <div className='flex flex-row gap-4'>
        {lifeCount.map((index) => (
          <div key={index}>
            <img width="30px" height="30px" src={heartImage} alt="" />
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
