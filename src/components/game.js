import React from 'react';
import Header from './header';
import InfoSection from './info-section';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
	}

	restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }


	render() {
		const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

		return (
      <div>
        <Header onRestartGame={() => this.restartGame()}/>
        <main role="main">
          <InfoSection />
        </main>
      </div>
    );
  }
}	