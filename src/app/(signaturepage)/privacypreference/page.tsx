import React from "react";
import Image from "next/image";
import Top from "@/public/Top app bar.svg";
import Logo from "@/public/signaturepage1.svg";

interface PrivacyPreferenceProps {
  backgroundImage?: any;
  children: React.ReactNode;
}

const PrivacyPreference: React.FC<PrivacyPreferenceProps> = ({
  backgroundImage,
  children,
}) => {
  return (
    <div className="relative max-w-md">
      <div
        className="p-4 rounded-2xl flex items-start gap-3.5 bg-white/90"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <label className="flex items-start gap-3.5 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <div className="flex flex-col gap-2">{children}</div>
        </label>
      </div>
    </div>
  );
};

function Page() {
  return (
    <div>
      <div className=" m-4 ">
        <div className="text-[#171d1e] text-[28px] font-semibold leading-9 mb-4">
          Select your privacy preference
        </div>
        <div className="text-[#454745] text-base font-normal leading-normal tracking-wide">
          Consent should be easy. Hence we are making it simple to understand
          how you’d like for us to use your data.
        </div>
      </div>
      <div className="w-[393px] h-[53px] px-8 py-2 bg-[#d0ff66] justify-center items-center gap-2.5 inline-flex">
        <div>
          <span className="text-black text-sm font-normal leading-tight tracking-tight">
            Super simple consent framework powered by{" "}
          </span>
          <span className="text-black text-sm font-bold leading-tight tracking-tight">
            Silent Compute
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center py-8">
        <div className="text-black text-xl font-normal leading-tight tracking-tight">
          <PrivacyPreference backgroundImage={"@/public/fort"}>
            <div className="text-[#002203] text-sm font-bold leading-none">
              Fort Knox
            </div>
            <div className="text-black text-sm leading-tight">
              Data locked down! I'm all about privacy—think high walls, moats,
              and a vigilant knight on duty.
            </div>
          </PrivacyPreference>
          <PrivacyPreference backgroundImage={"@/public/fort"}>
            <div className="text-[#002203] text-sm font-bold  leading-[14px]">
              Secret Garden
            </div>
            <div className="w-[262px] text-black text-sm font-normal leading-[16.80px]">
              Some data’s private, some I don’t mind sharing. Think of it as a
              garden with a neat little fence around it.
            </div>
          </PrivacyPreference>
          <PrivacyPreference backgroundImage={""}>
            <div className="text-[#002203] text-sm font-bold  leading-[14px]">
              Wide Open Spaces
            </div>
            <div className="w-[262px] text-black text-sm font-normal leading-[16.80px]">
              I'm cool with sharing! My data is like a friendly neighbourhood
              park—open and inviting.
            </div>
          </PrivacyPreference>
        </div>
      </div>
    </div>
  );
}

export default Page;
