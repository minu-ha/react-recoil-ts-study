import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [counter, setCounter] = useState();

  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
};

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: 1px solid ${({ borderColor }) => borderColor};
`;

export default Circle;
