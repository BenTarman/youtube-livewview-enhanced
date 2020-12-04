import store from '../store'
import { addLiveChat } from '../reducers/livechat'

const parseLivechatAndCommitToStore = livechatNode => {
  console.log('add to redux store here')

  // Author avatar image node
  const authorPhotoNode = livechatNode.querySelector('#author-photo img')

  // Author name text
  const authorName = livechatNode.querySelector('#author-name').innerText

  // Get Chat badge (image next to author that sometimes shows), will be null if not exist
  // TODO: i think can be more than one theoretically will look into more.
  const chatBadge = livechatNode.querySelector('#chat-badges img')

  // Get live chat message
  const chatMessage = livechatNode.querySelector('#message').innerHTML

  const liveChatObject = {
    authorPhotoNode,
    authorName,
    chatBadge,
    chatMessage
  }

  // Append the livechat to our redux store.
  store.dispatch(addLiveChat(liveChatObject))
}

export default parseLivechatAndCommitToStore
