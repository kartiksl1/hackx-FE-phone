import React from "react";
import Image from "next/image";
import Top from "@/public/Top app bar.svg";
import Logo from "@/public/signaturepage1.svg";
function Page() {
  return (
    <div>
      <div className=" m-4 ">
        <div className="text-[#171d1e] text-[28px] font-semibold leading-9 mb-4">
          Data consent
        </div>
        <div className="text-[#454745] text-base font-normal leading-normal tracking-wide">
          In order to offer you the loan and benefits in the Quick Loan
          dashboard, Quick Loan Limited needs your approval to access the
          following information from your financial accounts through the account
          aggregator
        </div>
      </div>
      <div className="w-[393px] h-[53px] px-8 py-2 bg-[#d0ff66] justify-center items-center gap-2.5 inline-flex">
        <div>
          <span className="text-black text-sm font-normal leading-tight tracking-tight">
            Secure data sharing powered by{" "}
          </span>
          <span className="text-black text-sm font-bold leading-tight tracking-tight">
            Silent Compute
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center py-8">
        <div className="text-black text-xl font-normal leading-tight tracking-tight">
          Select Accounts to share
        </div>
        <Image src={Logo} alt="" />
      </div>
      <div className="px-4 mt-4">
      <div className="text-[#454745] text-base font-normal leading-normal tracking-wide">Enter the security code we sent to<br/>******731</div>

      </div>
    </div>
  );
}

export default Page;
