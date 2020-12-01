import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import {
  BOTTOM_RIGHT_DROP_SOURCE,
  TOP_RIGHT_DROP_SOURCE,
  TOP_LEFT_DROP_SOURCE,
  LEFT_SIDE_DROP_SOURCE
} from '../../utils/Constants'

/* eslint-disable indent */
const OverlayContainer = styled.div`
  height: ${({ isSidePanel }) => (isSidePanel ? '100%' : '200px')};
  width: 200px;
  position: absolute;
  ${({ position }) =>
    position === TOP_RIGHT_DROP_SOURCE || position === BOTTOM_RIGHT_DROP_SOURCE
      ? css`
          right: 0;
          ${position === TOP_RIGHT_DROP_SOURCE
            ? css`
                top: 0;
              `
            : css`
                bottom: 0;
              `};
        `
      : css`
          left: 0;
          ${position === TOP_LEFT_DROP_SOURCE || position === LEFT_SIDE_DROP_SOURCE
            ? css`
                top: 0;
              `
            : css`
                bottom: 0;
              `};
        `}

  background-color: rgba(
    ${props => props.theme.fullscreen.overlayColor.r},
    ${props => props.theme.fullscreen.overlayColor.g},
    ${props => (props.isSidePanel ? props.theme.fullscreen.overlayColor.b : 0)},
    ${props => props.theme.fullscreen.opacity}
  );
`
/* eslint-enable indent */

const DropOverlay = ({ position, isSidePanel, children }) => {
  return (
    <OverlayContainer position={position} isSidePanel={isSidePanel}>
      {children}
    </OverlayContainer>
  )
}

DropOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string.isRequired,
  isSidePanel: PropTypes.bool.isRequired
}

export default DropOverlay
