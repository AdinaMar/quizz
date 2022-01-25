import "./Result.css"
import { useEffect } from "react";
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom"

const Result = ({name, score}) => {
  let navigate = useNavigate();

   useEffect(() => {
     if(!name) {
         navigate("/");
     }

   }, [name, navigate])

    return(
        <div className="result">
            <span className="title">Final Score : {score}</span>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{alignSelf: "center", marginTop: 20}}
            href="/"
            > Go To HomePage

            </Button>

        </div>
    )
}
export default Result;