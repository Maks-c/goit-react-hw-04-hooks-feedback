import {useState} from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notfication";
//==============================================
import AppWrapper from "./AppStyle";


const App = () => {

    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const countPositiveFeedbackPercentage = () => {
        const percentage = (good * 100) / total;
        return Math.round(percentage)
    }


    const onLeaveFeedback = (e) => {
        const name=e.target.name
        switch (name){
            case 'good':
                setGood(prevState => prevState + 1)
                break
            case 'bad':
                setBad(prevState => prevState + 1)
                break
            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break
            default:
                return;
        }
    };

    const total = good + neutral + bad
 
    const percentage = countPositiveFeedbackPercentage()

    return <AppWrapper>
        <Section title='Please leave feedback'>
            <FeedbackOptions
                options={{good,neutral,bad}}
                onLeaveFeedback={onLeaveFeedback}
            />
        </Section>

        <Section title='Statistics'>
            {total > 0 ? <Statistics good={good}
                                     bad={bad}
                                     neutral={neutral}
                                     total={total}
                                     percentage={percentage}
            /> : <Notification message='There is no feedback'/>}
        </Section>

    </AppWrapper>

}

export default App





