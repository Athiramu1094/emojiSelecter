import React, { useState } from 'react'; 
import EmojiPicker from 'emoji-picker-react';
import './App.css'


function App() {
const [clickedEmoji, setClickedEmoji] = useState("")
function onClickEmoji(emojiDAta){  
const {emoji} = emojiDAta 
setClickedEmoji(emoji)
console.log(emoji)
}

return (
<div className='emoji-container'>
<span>Your Emoji {clickedEmoji}</span>
<EmojiPicker onEmojiClick={onClickEmoji} />
</div>
)
}

export default App
