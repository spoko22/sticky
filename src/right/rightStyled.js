import styled from 'styled-components';

export const RightWrapper = styled.div`
    background-color: yellow;
    width: 40%;
    float: right;
    height: 100%;
`;
export const Paragraph = styled.p`
    max-width: 100%;
`;

export const FloatingRightWrapper = styled(RightWrapper)`
    position: fixed;
    top: 0;
    right: ${({right}) => right}px;
    width: ${({width}) => width}px;
    transform: translateY(${({y}) => y > 0 ? y: 0}px);
    -webkit-transform: translateY(${({y}) => y > 0 ? y: 0}px);
`
