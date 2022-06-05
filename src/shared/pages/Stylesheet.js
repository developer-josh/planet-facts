import React from "react";
import Button from "../components/Button/Button";

function Stylesheet() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-10 bg-primary text-white">
      {/* Typography */}
      <div className="flex flex-col items-center justify-center w-fit h-fit gap-2">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id,
        </p>
      </div>

      {/* Palette */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-10">
        <span className="w-[100px] h-[50px] p-2 bg-white" />
        <span className="w-[100px] h-[50px] p-2 bg-primary border-2 border-white/10" />
        <span className="w-[100px] h-[50px] p-2 bg-lightGray" />
        <span className="w-[100px] h-[50px] p-2 bg-red" />
        <span className="w-[100px] h-[50px] p-2 bg-darkGray" />
        <span className="w-[100px] h-[50px] p-2 bg-lightBlue" />
        <span className="w-[100px] h-[50px] p-2 bg-darkBlue" />
        <span className="w-[100px] h-[50px] p-2 bg-sunYellow" />
        <span className="w-[100px] h-[50px] p-2 bg-lightOrange" />
        <span className="w-[100px] h-[50px] p-2 bg-purple" />
        <span className="w-[100px] h-[50px] p-2 bg-darkOrange" />
        <span className="w-[100px] h-[50px] p-2 bg-green" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center justify-center w-fit h-fit gap-3 my-10">
        <span className="text-sm italic">
          Active background color changes on each page
        </span>
        <Button number="01">Regular</Button>
        <Button number="01" activeBgColor="active:bg-lightBlue">
          Active
        </Button>
        <Button number="01">Hover</Button>
      </div>
    </div>
  );
}

export default Stylesheet;
