import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { SubLeftContainer } from "./Components/SubLeftContainer";
import SubRightContainer from "./Components/SubRightContainer";

const App = () => {
  return (
    <>
      <div
        className="overflow-hidden bg-white flex flex-col w-full"
        id="CodingAssignmentRoot"
      >
        <Navbar />
        <div
          className="overflow-hidden bg-[#172746] flex flex-col pt-px"
          id="ContentContainer"
        >
          <div
            className="bg-[url(https://file.rendit.io/n/nxARhtsb0ecjUpSAIO4m.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-row justify-between items-start pl-[144px] pr-24 py-12"
            id="BackGround"
          >
            <div className="w-1 h-12 origin-top-left rotate-[45deg] bg-white absolute top-[723.957763671875px] left-48 rounded-lg" />
            <SubLeftContainer />
            <SubRightContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
