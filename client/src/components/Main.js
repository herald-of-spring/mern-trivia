import { useState, useEffect } from 'react';

function App() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        url()
    }, []);

    const url = async () => {
        const r = await fetch("https://opentdb.com/api.php?amount=2&difficulty=easy&type=multiple")

        const response = await r.json();
        console.log(response);
        setQuestions(response.results);
    }

    return (
        <div className="App">
            <div>
                {questions.map((question) => {

                return (
                    <div key={question.question}>
                        <header>{question.question}</header>
                        <ul>
                            <li>{question.correct_answer}</li>
                            <li>{question.incorrect_answers[0]}</li>
                            <li>{question.incorrect_answers[1]}</li>
                            <li>{question.incorrect_answers[2]}</li>
                        </ul>
                    </div>
                )
                })}

            </div>
        </div>
    );
}
export default App;