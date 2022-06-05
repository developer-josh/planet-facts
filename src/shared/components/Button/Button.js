import React from "react";

// activeBgColor prop must be passed as complete tailwind class. Ex: active:bg-lightBlue
// tailwind does not support partial classes
function Button({ number, activeBgColor, ...props }) {
  return (
    <button
      className={`${"flex flex-row items-center justify-start border-[1px] border-lightGray/40 uppercase w-[350px] h-[48px] px-8 gap-6 font-bold text-white hover:border-none active:border-none hover:bg-darkGray"} ${activeBgColor}`}
    >
      <span className="opacity-50 tracking-widest">{number}</span>
      {props.children}
    </button>
  );
}

export default Button;
