import styled, { css, keyframes } from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 310px;
  width: 285px;
  border: 1px solid #e5e5e5;
`
const glimmer = keyframes`
  0% {
    transform: rotate(10deg)
      translate(-200%, -50%)
  }

  100% {
    transform: rotate(10deg)
      translate(200%, -50%)
  }
`
const skeletonShimmer = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 200px;
  background: rgba('#190932', 0.05);
  animation: ${glimmer} 1.2s infinite linear;
`
export const Skeleton = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width || '120px'};
  height: ${(props) => props.height || '12px'};
  margin: ${(props) => props.margin || 0};
  border-radius: 3px;
  background: #e0daeb;

  &::before {
    ${skeletonShimmer}
  }
`
export const Row = styled.div`
  margin-top: 12px;

  .title {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.625rem;
    color: #222d39;
  }

  .subtitle {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #222d39;
    margin-top: 1rem;
    margin-left: 24px;
  }

  .text {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1rem;
    color: #222d39;
    margin-left: 27px;
    margin-top: 0.8rem;
  }
`
export const Image = styled.div`
  margin-top: 35px;
`
