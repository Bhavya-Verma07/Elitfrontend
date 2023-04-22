// import "./App.css";
import Start from "./Start";
import Quiz from "./Quiz";
import Result from "./Result";
import { useAuth } from "../../Context copy/QuizHolder";
import { useEffect } from "react";

function App() {
  const { start, exit, setStart, setExit } = useAuth();
  useEffect(() => {
    const currstep = +localStorage.getItem("currentstep");
    if (currstep === 55) {
      setExit(false);
      setStart(true);

      localStorage.setItem("currentstep", 0);
    } else if (currstep === 0 || currstep) {
      setStart(true);
    }
  }, []);

  return (
    <>
      {exit === false ? (
        <>{start === true ? <Quiz /> : <Start />}</>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;
