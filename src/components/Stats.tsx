import { StatGroup, Container, Divider } from "@chakra-ui/react";
import React from "react";
import { VIEWPORT_WIDTH } from "../constants";
import { StatBox } from "./StatBox";

interface StatsProps {
  productiveTime: string;
}

export const Stats: React.FC<StatsProps> = ({ productiveTime }) => {
  const max_width = `${
    (140 / 100) * Number(VIEWPORT_WIDTH.substr(0, VIEWPORT_WIDTH.length - 2))
  }px`;
  return (
    <Container
      maxW={max_width}
      as="footer"
      role="contentinfo"
      my="2vh"
      px={{ base: "4", md: "8" }}
    >
      <Divider mt={6} mb={6} />
      <StatGroup>
        <StatBox
          title="Spent"
          value={productiveTime}
          type="increase"
          percentage="23.36%"
        />
        <StatBox
          title="Clicked"
          value="45"
          type="decrease"
          percentage="9.05%"
        />
        <StatBox
          title="Code length"
          value="7.444 lines"
          type="increase"
          percentage="12.26%"
        />

        <StatBox
          title="Bugs squashed"
          value="4"
          type="decrease"
          percentage="124.05%"
        />
      </StatGroup>
    </Container>
  );
};
