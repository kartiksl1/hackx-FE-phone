import React from "react";

function PhoneScreen({ children }: { children: React.ReactNode }) {

  return (

    <div className="relative w-[360px] h-[720px] rounded-[24px] border border-solid overflow-hidden">
      {" "}
      {children}{" "}
    </div>
  );
}

export default PhoneScreen;
