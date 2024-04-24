import { useState, useEffect, forwardRef, useImperativeHandle  } from "react";

const Bucket = forwardRef((props, ref) =>{
    const [coordinateX, setCoordinateX] = useState(50)
    const leftPercentage = coordinateX + "%"
    useImperativeHandle(ref, () => ({
        getCoordinateX: () => coordinateX
      }));
    const classCss = {
        paddingLeft: "4%", /* w-16 */
        paddingRight: "4%",
        marginBottom: "1%",
        height: "1rem", /* h-4 */
        backgroundColor: `#1F9D${coordinateX}`, /* bg-green-800 */
        position: "absolute", /* absolute */
        bottom: 0, /* bottom-0 */
        left: leftPercentage
      }
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowRight") {
            setCoordinateX((prevX) => prevX + 2);
          }else if(event.key === "ArrowLeft"){
            setCoordinateX((prevX) => prevX - 2);
          }
        };
        
        window.addEventListener("keydown", handleKeyDown);
      }, []);
      console.log(coordinateX)
    return <>
    <div style={classCss} className=" rounded-full border-white border-2">
    </div>
    </>
})

export default Bucket;