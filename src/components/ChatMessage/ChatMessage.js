import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

// TODO: making this wrapper prematurally, eventually will have a "mode" prop on redux store that the local theme lookup will rely on.
const localTheme = props => props.theme.fullscreen.chatMessage

const Container = styled.div`
  display: inline-block;
  background-color: ${props => rgba(localTheme(props).containerColor, localTheme(props).opacity)};
  padding: ${props => localTheme(props).padding};
  border-radius: ${props => localTheme(props).borderRadius};
  font-size: ${props => localTheme(props).fontSize};
`

const Message = styled.div`
  img {
    height: ${props => localTheme(props).fontSize};
    width: ${props => localTheme(props).fontSize};
  }
`
const MessageWrapper = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-right: 1.25px;
  }
`

const AuthorImg = styled.div`
  img {
    border-radius: 50%;
  }
`

const AuthorName = styled.div`
  font-weight: ${props => localTheme(props).authorName.fontWeight};
`

const ChatMessage = ({ avatarSrc, authorName, chatMessage }) => {
  return (
    <Container>
      <MessageWrapper>
        <AuthorImg>
          <img src={avatarSrc} alt="" />
        </AuthorImg>
        <AuthorName>{authorName}</AuthorName>
        <Message dangerouslySetInnerHTML={{ __html: chatMessage }} />
      </MessageWrapper>
    </Container>
  )
}

ChatMessage.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  chatMessage: PropTypes.node.isRequired
}

export default ChatMessage
