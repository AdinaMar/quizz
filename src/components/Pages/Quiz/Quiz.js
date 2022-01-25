import { useEffect, useState } from "react";
import "./Quiz.css"
import Question from "../../Questions/Question";
import { CircularProgress } from "@material-ui/core";

const Quiz = ({name, score, questions, setQuestions, setScore}) => {
   const [options, setOptions] = useState();
   const [currQues, setCurrQues] = useState(0);
   
   
   
   
    useEffect(() =>{
       
   
   setOptions(
       questions && handleShuffle([questions[currQues]?.correct_answer,
    ...questions[currQues]?.incorrect_answers,
])
);
}, [currQues, questions]);


const handleShuffle = (options) =>{
    return options.sort(()=>Math.random() - 0.5);
};
    return (
        <div className="quiz">
<span className="subtitle"> Welcome {name} </span>
     
        {questions ? ( 
        <>
        <div className="quizInfo">
            <span>{questions[currQues].difficulty}</span>
            <span>Score : {score}</span>
        </div>
        
        <Question 
        currQues={currQues}
        setCurrQues={setCurrQues}
        questions={questions}
        options={options}
        correct={questions[currQues]?.correct_answer}
        score={score}
        setScore={setScore}
        />
        </> 
         )  : ( <CircularProgress style={{margin:100}} color="inherit" size={150} thickness={1}/> )}
         
       </div>
    );
};
export default Quiz;