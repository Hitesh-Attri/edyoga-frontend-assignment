import React from "react";

const SubRightContainer = () => {
  return (
    <div
      className="bg-white self-end relative flex flex-col mt-4 gap-1 px-5 py-8 rounded-lg"
      id="Form1"
    >
      <div className="self-center flex flex-row justify-between w-[278px] items-center">
        <div
          className="overflow-hidden bg-[#0096ff] flex flex-col w-10 shrink-0 h-10 items-center py-2 rounded-[1000px]"
          id="Icon"
        >
          <div className="text-center text-2xl font-sans font-semibold tracking-[-0.36] leading-[18px] text-white w-1/2 h-full">
            1
          </div>
        </div>
        <div
          className="overflow-hidden bg-[#0096ff] flex flex-col w-10 shrink-0 h-10 items-center py-2 rounded-[1000px]"
          id="Icon1"
        >
          <div className="text-center text-2xl font-sans font-semibold tracking-[-0.36] leading-[18px] text-white w-1/2 h-full">
            2
          </div>
        </div>
      </div>
      <div className="self-start flex flex-row justify-between w-[302px] items-center mb-6 ml-24">
        <div
          className="text-center whitespace-nowrap font-sans tracking-[-0.16] text-[#3c4852] w-12 shrink-0"
          id="Text5"
        >
          Sign Up
        </div>
        <div
          className="text-center font-sans tracking-[-0.16] text-[#3c4852] w-16 shrink-0"
          id="Text6"
        >
          Subscribe
        </div>
      </div>
      <div
        className="text-center text-2xl font-sans font-semibold leading-[30.1px] text-[#3c4852] mb-5 mx-px"
        id="Text7"
      >
        Select your subcription plan
      </div>
      <div
        className="border-solid border-[#bebebe] bg-[#e7e7e7] flex flex-row justify-between mb-2 items-center px-4 border-2 rounded"
        id="TextField"
      >
        <div className="self-start flex flex-row mb-4 gap-3 w-1/2 items-center">
          <button
            className="overflow-hidden self-end flex flex-col w-8 shrink-0 items-center p-1"
            id="RadioButton"
          >
            <div className="bg-[url(https://file.rendit.io/n/L3mmENmU1hZZ6ZyIWP3r.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-6 h-6 shrink-0 items-center py-1">
              <img
                src="https://file.rendit.io/n/i5BITfF8vsLNWxnl8Gwy.svg"
                className="w-4"
              />
            </div>
          </button>
          <div className="flex flex-col mb-2 gap-2 w-[172px]">
            <div
              className="overflow-hidden bg-[#f77171] flex flex-col items-center ml-px mr-12 px-8 py-px rounded-br rounded-bl"
              id="Tag"
            >
              <div className="text-center whitespace-nowrap text-xs font-sans font-medium leading-[14.4px] text-white w-full">
                Offer expired
              </div>
            </div>
            <div
              className="text-center whitespace-nowrap font-sans font-semibold leading-[19.2px] text-[#bebebe]"
              id="Text8"
            >
              12 Months Subscription{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-16 shrink-0 items-center">
          <div className="flex flex-col w-8 shrink-0 items-end">
            <div
              className="text-center text-xs font-sans font-semibold leading-[14.4px] text-[#bebebe] self-stretch mr-2 h-[53.33%]"
              id="Text9"
            >
              Total
            </div>
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#bebebe] w-3"
              id="Text11"
            >
              ₹8
            </div>
          </div>
          <div className="flex flex-col gap-px w-6 shrink-0">
            <div
              className="text-center font-sans font-semibold leading-[19.2px] text-[#bebebe]"
              id="Text10"
            >
              ₹99
            </div>
            <div
              className="text-center text-xs font-sans font-medium leading-[12px] text-[#bebebe] ml-2 h-[36.36%]"
              id="Text12"
            >
              /mo
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-solid border-[#47ba68] bg-[#d7eddd] flex flex-row justify-between items-center mb-2 mx-px px-4 border-2 rounded"
        id="TextField1"
      >
        <div className="self-start flex flex-row gap-3 w-1/2 items-center mt-0 mb-4">
          <button
            className="overflow-hidden self-end flex flex-col w-8 shrink-0 items-center p-1"
            id="RadioButton1"
          >
            <img
              src="https://file.rendit.io/n/4iFbuI0Vmb5yUVkDgLaX.svg"
              className="w-6"
            />
          </button>
          <div className="flex flex-col mb-2 gap-2 w-[172px]">
            <div
              className="overflow-hidden bg-[#47ba68] flex flex-col items-center ml-px mr-12 px-6 py-px rounded-br rounded-bl"
              id="Tag1"
            >
              <div className="text-center text-xs font-sans font-medium leading-[14.4px] text-white w-full">
                Recommended
              </div>
            </div>
            <div
              className="text-center whitespace-nowrap font-sans font-semibold leading-[19.2px] text-[#3c4852]"
              id="Text13"
            >
              12 Months Subscription{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-16 shrink-0 items-center">
          <div className="flex flex-row gap-2 w-16 items-center">
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#3c4852] w-6 shrink-0 h-[84.21%]"
              id="Text14"
            >
              Total
            </div>
            <div
              className="text-center font-sans font-semibold leading-[19.2px] text-[#3c4852] w-1/2"
              id="Text15"
            >
              ₹179
            </div>
          </div>
          <div className="self-end flex flex-row gap-2 w-12 items-center">
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#3c4852] w-2/5"
              id="Text16"
            >
              ₹15
            </div>
            <div
              className="text-center text-xs font-sans font-medium leading-[12px] text-[#bebebe] w-2/5 h-[85.71%]"
              id="Text17"
            >
              /mo
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-solid border-[#bebebe] flex flex-row justify-between h-16 shrink-0 items-center mb-2 mx-px px-4 border-2 rounded"
        id="TextField2"
      >
        <div className="flex flex-row gap-3 w-2/5 items-center">
          <button
            className="overflow-hidden flex flex-col w-8 shrink-0 items-center p-1"
            id="RadioButton2"
          >
            <img
              src="https://file.rendit.io/n/L3mmENmU1hZZ6ZyIWP3r.svg"
              className="w-6"
            />
          </button>
          <div
            className="text-center whitespace-nowrap font-sans font-semibold leading-[19.2px] text-[#3c4852] w-40"
            id="Text18"
          >
            6 Months Subscription{" "}
          </div>
        </div>
        <div className="flex flex-col w-16 shrink-0 items-center">
          <div className="flex flex-row gap-2 w-16 items-center">
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#3c4852] w-6 shrink-0 h-[84.21%]"
              id="Text19"
            >
              Total
            </div>
            <div
              className="text-center font-sans font-semibold leading-[19.2px] text-[#3c4852] w-1/2"
              id="Text20"
            >
              ₹149
            </div>
          </div>
          <div className="self-end flex flex-row gap-2 w-12 items-center">
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#3c4852] w-2/5"
              id="Text21"
            >
              ₹25
            </div>
            <div
              className="text-center text-xs font-sans font-medium leading-[12px] text-[#bebebe] w-2/5 h-[85.71%]"
              id="Text22"
            >
              /mo
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-solid border-[#bebebe] flex flex-row justify-between h-16 shrink-0 items-center mb-5 mx-px px-4 border-2 rounded"
        id="TextField3"
      >
        <div className="flex flex-row gap-3 w-2/5 items-center">
          <button
            className="overflow-hidden flex flex-col w-8 shrink-0 items-center p-1"
            id="RadioButton3"
          >
            <img
              src="https://file.rendit.io/n/L3mmENmU1hZZ6ZyIWP3r.svg"
              className="w-6"
            />
          </button>
          <div
            className="text-center whitespace-nowrap font-sans font-semibold leading-[19.2px] text-[#3c4852] w-40"
            id="Text23"
          >
            3 Months Subscription{" "}
          </div>
        </div>
        <div className="flex flex-row w-16 shrink-0 items-center">
          <div className="flex flex-col w-8 shrink-0 items-end">
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#3c4852] self-stretch mr-2 h-[53.33%]"
              id="Text24"
            >
              Total
            </div>
            <div
              className="text-center text-xs font-sans leading-[14.4px] text-[#3c4852] w-3/5"
              id="Text26"
            >
              ₹33
            </div>
          </div>
          <div className="flex flex-col gap-px w-6 shrink-0">
            <div
              className="text-center font-sans font-semibold leading-[19.2px] text-[#3c4852]"
              id="Text25"
            >
              ₹99
            </div>
            <div
              className="text-center text-xs font-sans font-medium leading-[12px] text-[#bebebe] ml-2 h-[36.36%]"
              id="Text27"
            >
              /mo
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-solid border-[#bebebe] overflow-hidden bg-white flex flex-col gap-3 h-[181px] shrink-0 mb-6 mx-px py-4 border-t-2 border-b-0 border-x-0"
        id="SummaryContainer"
      >
        <div className="flex flex-row justify-between items-center mb-1 mx-6">
          <div
            className="text-center whitespace-nowrap font-sans leading-[19.2px] text-[#3c4852] w-32 shrink-0"
            id="Text28"
          >
            Subscription Fee
          </div>
          <div
            className="text-center font-sans font-medium tracking-[0.48] leading-[16px] text-[#3c4852] w-16 shrink-0"
            id="Text29"
          >
            ₹18,500
          </div>
        </div>
        <div
          className="border-solid border-[#e76528] bg-[linear-gradient(135deg,_rgba(222,_67,_19,_0.2)_0%,rgba(222,_67,_19,_0.2)_1%,rgba(222,_67,_19,_0.2)_3%,rgba(222,_68,_20,_0.2)_6%,rgba(223,_69,_21,_0.2)_11%,rgba(223,_72,_22,_0.2)_17%,rgba(224,_75,_24,_0.2)_23%,rgba(225,_80,_27,_0.2)_30%,rgba(227,_86,_31,_0.2)_38%,rgba(229,_94,_36,_0.2)_47%,rgba(231,_104,_43,_0.2)_55%,rgba(235,_117,_51,_0.2)_64%,rgba(238,_132,_60,_0.2)_73%,rgba(243,_149,_71,_0.2)_83%,rgba(248,_169,_84,_0.2)_91%,rgba(254,_193,_99,_0.2)_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between h-20 shrink-0 items-center pt-3 px-5 border-2 rounded-lg"
          id="Alert1"
        >
          <div className="flex flex-col gap-2 w-1/2 items-start">
            <div
              className="text-center whitespace-nowrap font-sans font-semibold leading-[19.2px] text-[#de4313] w-3/5"
              id="Text30"
            >
              Limited time offer
            </div>
            <div className="self-stretch flex flex-row ml-px gap-2 items-center">
              <img
                src="https://file.rendit.io/n/FELTFIMsRQ77Szva1Nsc.svg"
                className="w-5 shrink-0"
              />
              <div
                className="text-center whitespace-nowrap text-sm font-sans leading-[16.8px] text-[#de4313] w-48"
                id="Text32"
              >
                Offer valid till 25th March 2023{" "}
              </div>
            </div>
          </div>
          <div
            className="text-center whitespace-nowrap font-sans font-semibold tracking-[0.48] leading-[16px] text-[#3c4852] self-start mt-px w-16 shrink-0"
            id="Text31"
          >
            - ₹18,401
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mx-6">
          <div
            className="text-center whitespace-nowrap font-sans font-semibold leading-[19.2px] text-[#3c4852]"
            id="LeftText1"
          >
            Total{" "}
            <div className="contents" id="LeftText">
              (Incl. of 18% GST)
            </div>
          </div>
          <div
            className="text-center text-2xl font-sans font-bold tracking-[0.72] leading-[24px] text-[#3c4852] w-16 shrink-0"
            id="RightText"
          >
            ₹149
          </div>
        </div>
      </div>
      <button
        className="flex flex-row gap-4 items-center mb-6 mx-px"
        id="ButtonContainer"
      >
        <button
          className="border-solid border-[#f77171] flex flex-col justify-center w-1/2 h-12 items-center border-2 rounded"
          id="SecondaryButton"
        >
          <div
            className="text-center font-sans font-bold uppercase text-[#f77171] w-16"
            id="Text33"
          >
            cancel
          </div>
        </button>
        <button
          className="bg-[#47ba68] flex flex-col justify-center w-1/2 h-12 items-center rounded"
          id="PrimaryButton1"
        >
          <div
            className="text-center whitespace-nowrap font-sans font-bold uppercase text-white w-1/2"
            id="Text34"
          >
            proceed to pay
          </div>
        </button>
      </button>
      <img
        src="https://file.rendit.io/n/DOGNsZ3WUxr8mzXE6zzK.png"
        className="self-start ml-px"
      />
    </div>
  );
};

export default SubRightContainer;
