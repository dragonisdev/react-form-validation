import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yun!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img className="rounded-full w-[120px] h-[120px]" src="/me.jpg" alt="profile icon" />
    <h1>{greeting}</h1>

    <h2 className="text-4xl font-bold text-center pt-4 leading-[3rem]">A frontend developer <br/>
    specialized in React</h2>
  </FullScreenSection>
);

export default LandingSection;
