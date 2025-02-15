import { Text } from 'rebass'
import styled, { keyframes } from 'styled-components/macro'

export const Wrapper = styled.div`
  position: relative;
  padding: 16px;
  background: ${({ theme }) => theme.bg7};
  border: 1px solid ${({ theme }) => theme.bg3};
  box-shadow: 0px 17px 29px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-top: 26px;
`

export const ClickableText = styled(Text)`
  :hover {
    cursor: pointer;
  }
  color: ${({ theme }) => theme.primary6};
`
export const MaxButton = styled.button<{ width: string }>`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bg11};
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 500;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({ theme }) => theme.primary6};
  :hover {
    border: 1px solid ${({ theme }) => theme.primary8};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary8};
    outline: none;
  }
`

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

const loadingAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const LoadingRows = styled.div`
  display: grid;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  & > div {
    animation: ${loadingAnimation} 1.5s infinite;
    animation-fill-mode: both;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.bg1} 25%,
      ${({ theme }) => theme.bg2} 50%,
      ${({ theme }) => theme.bg1} 75%
    );
    background-size: 400%;
    border-radius: 12px;
    height: 2.4em;
    will-change: background-position;
  }
  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`
