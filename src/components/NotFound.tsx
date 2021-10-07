import styled from "styled-components";

export default function NotFound() {
  return (
    <NoutFoundDiv>
      <H1>NOT FOUND</H1>
    </NoutFoundDiv>
  );
}
const H1 = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
const NoutFoundDiv = styled.div`
  position: relative;
`;
