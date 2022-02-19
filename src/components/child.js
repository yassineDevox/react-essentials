import { useEffect, useState } from "react";

export default function Child() {
  const [counter, setCounter] = useState(0);

  const Decrement = () => setCounter(counter - 1);

  const Increment = () => setCounter(counter + 1);

  //component did mount + component did updated
  useEffect(() => {
    console.log("comp did mount + did up");
  });

  //component did mount
  useEffect(() => {
    console.log("component did mount ");
    //--will unmount 
    return ()=>{
        console.log("see you soon bro 👨‍🦱 !")
    }
  }, []);

  //track counter (still have component did mount)
  useEffect(() => {
    if (counter != 0) {
      console.log("counter changed");
    }
  }, [counter]);


  return (
    <div className="text-center">
      <button className="btn btn-primary" 
      onClick={Decrement}>
        -
      </button>
      <div>{counter}</div>
      <button className="btn btn-primary" onClick={Increment}>
        +
      </button>
    </div>
  );
}
