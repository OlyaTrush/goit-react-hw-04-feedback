import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import { countTotalFeedback, countPositiveFeedbackPercentage } from '../utils';
import  Notification  from "./Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 saveFeedback = grade => {
    this.setState(prevState => ({ [grade]: prevState[grade] + 1 }));
  };

  render() {
    const options = Object.keys(this.state);
    const total = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);
    return (
      <div>
        <Section
          title={'Please leave feedback'}
        >
          <FeedbackOptions
            clickFeedback = {this.saveFeedback}
            options= {options}
          />
          <section>
            <h2>Statistics</h2>
            {total ? (
              <>
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={total}
                  countPositiveFeedbackPercentage={positivePercentage}
                />
              </>
            ) : <Notification message="There is no feedback" />}
          </section>
        </Section>
      </div>
    );
  }
}
