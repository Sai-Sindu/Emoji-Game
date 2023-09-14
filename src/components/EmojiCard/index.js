// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiCardDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button">
        <img src={emojiUrl} alt={emojiName} onClick={onClickEmoji} />
      </button>
    </li>
  )
}

export default EmojiCard
