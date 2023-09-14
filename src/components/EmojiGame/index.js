/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, gameInProgress: true}

  resetGame = () => {
    this.setState({clickedEmojisList: [], gameInProgress: true})
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiCardDetails={eachEmoji}
            key={eachEmoji.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, gameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojisListLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
      console.log(clickedEmojisList)
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {clickedEmojisList, topScore, gameInProgress} = this.state
    const shuffledEmojisList = this.getShuffledEmojisList()
    console.log(shuffledEmojisList)

    return (
      <>
        <NavBar
          currentScore={clickedEmojisList.length}
          topScore={topScore}
          gameInProgress={gameInProgress}
        />

        <div className="emoji-game-container">
          {gameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </>
    )
  }
}

export default EmojiGame
