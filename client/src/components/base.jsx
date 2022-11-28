import { Component } from "react";
import Question from "./question";

//game
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            score: 0,
            current: null,
            answers: [],
            live: false,
            options: []
        }
    }

    //if correct answer is clicked, add to score
    send = clicked => {
        console.log(clicked)
        let newScore = this.state.score;
        if (this.state.current.correct_answer === clicked) {
            newScore += 1
        }
        this.setState({ live: false, score: newScore })
    }
    //get current question, randomize answers for sending to card
    generateTriviaCard = question => {
        const randomNum = Math.floor(Math.random() * 4);
        if (question === null) {
            return;
        }

        let falseArr = [...question.incorrect_answers];
        falseArr.splice(randomNum, 0, question.correct_answer);
        return falseArr;

    };
    //populate current question & update question list if necessary
    
    newQuestion = async () => {
        let list = this.state.questionList
        if (list.length === 0) {
            list = await this.getQuestions();
        }
        const newQuestion = list[0];
        const newAnswers = this.generateTriviaCard(newQuestion);
        list.splice(0, 1);
        this.setState({ current: newQuestion, questionList: list, answers: newAnswers, live: true })


    };
    //calls question from api    
    getQuestions = async () => {
        const r = await fetch("https://opentdb.com/api.php?amount=2&difficulty=easy&type=multiple")
        const response = await r.json();
        return response.results;
    }

    //get questions at game start
    async componentDidMount() {
        const list = await this.getQuestions();
        this.setState({ questionList: list, live: true });
        this.newQuestion();
    }
    //error catching
    componentDidCatch(err, info) {
        console.log('logfile')
        console.error(err, info)
    }
    static getDerivedStateFromError(error) {
        return {
            current: null
        }
    }

    render() {
        return (
            <section>
                <section>
                    Scoreboard Here
                </section>
                <section>{this.state.score}</section>
                {this.state.current != null &&
                    <Question answers={this.state.answers} send={this.send} question={this.state.current.question || ""} live={this.state.live}>
                    </Question>
                }
                {!this.state.live && this.state.current != null &&
                    <section>
                        <button onClick={this.newQuestion}>
                            Next Question
                        </button>
                        {this.state.current.correct_answer}
                    </section>
                }
            </section>
        )
    }

};

export default Game;