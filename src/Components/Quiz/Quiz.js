import React, { useEffect, useState } from "react";

import Ques1 from "../QuestionImages/Ques1.jpg";
import Ques2 from "../QuestionImages/Ques2.jpg";
import Ques3 from "../QuestionImages/Ques3.jpg";
import Ques4 from "../QuestionImages/Ques4.jpg";
import Ques5 from "../QuestionImages/Ques5.jpg";
import Ques6 from "../QuestionImages/Ques6.jpg";
import Ques7 from "../QuestionImages/Ques7.jpg";
import Ques8 from "../QuestionImages/Ques8.jpg";
import Ques9 from "../QuestionImages/Ques9.jpg";
import Ques10 from "../QuestionImages/Ques10.jpg";
import "./Quiz.css";
import { useAuth } from "../../Context copy/QuizHolder";

const Images = [
  Ques1,
  Ques2,
  Ques3,
  Ques4,
  Ques5,
  Ques6,
  Ques7,
  Ques8,
  Ques9,
  Ques10,
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const { setStart, setExit } = useAuth();
  useEffect(() => {
    const currstep = +localStorage.getItem("currentstep");
    if (currstep === 0) {
      setExit(false);
      setStart(true);
    } else if (currstep) {
      setCurrent(currstep);
    }
  }, []);
  return (
    <div className="boxdiv">
      <Box current={current} next={setCurrent} />
    </div>
  );
};

const Box = ({ current, next }) => {
  const { quizes, correct, setCorrect, setExit } = useAuth();
  const [ans, setAns] = useState("");

  const saveNext = () => {
    if (quizes[current].correct === quizes[current][ans]) {
      setCorrect(correct + 1);
    } else {
      return alert("Incorrect ans");
    }
    setAns("");
    if (current + 1 === quizes.length) {
      localStorage.setItem("currentstep", 55);

      setExit(true);
    } else {
      next(current + 1); //to increment ques number
      localStorage.setItem("currentstep", current + 1);
    }
  };
  // console.log({current, next });
  return (
    <div className="queBox">
      <div className="levels">Level: {current + 1}</div>
      <img
        width="fitContent"
        alt="testimage"
        height="300"
        src={Images[current]}
        style={{ alignItems: "center", padding: "20px", margin: "auto" }}
      />
      <div className="insideQbox">
        <div className="p-2 text-3x1">{quizes[current].Question}</div>
        <div className="outer">
          <div className="optiondiv" onClick={() => setAns("a")}>
            {quizes[current].a}
          </div>
          <div className="optiondiv" onClick={() => setAns("b")}>
            {quizes[current].b}
          </div>
          <div className="optiondiv" onClick={() => setAns("c")}>
            {quizes[current].c}
          </div>{" "}
          <div className="optiondiv" onClick={() => setAns("d")}>
            {quizes[current].d}
          </div>
        </div>
      </div>
      <div className="flex jutify-between">
        <div className="resetdiv" onClick={() => setAns("")}>
          Reset
        </div>
        <div className="savenextdiv" onClick={saveNext}>
          Save & Next
        </div>
        <div
          className="exitdiv"
          onClick={() => {
            localStorage.setItem("currentstep", 55);
            setExit(true);
          }}
        >
          Exit
        </div>
      </div>
    </div>
  );
};

export default Quiz;
