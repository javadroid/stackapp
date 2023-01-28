import { useEffect, useRef, useState } from "react";
import { TabList, DonorTab, CenterTab } from "../Tab";
// import ReCAPTCHA from "react-google-recaptcha";
import { XIcon } from "@heroicons/react/outline";

export default function Tabs({
  closeModal,
  openLoginModalFunc,
  closeLoginModalFunc,
}) {
  // const [captchaRef, setCaptchaRef] = useState(true);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex  space-x-3 ">
          <div className="flex w-full space-x-3 border-b">
            {TabList.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="pt-2 text-center md:text-left pb-3 w-full focus:text-red-500"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <button type="button" className="justify-center" onClick={closeModal}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-red-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <div>
          <DonorTab
            activeTabIndex={activeTabIndex}
            closeModal={closeModal}
            openLoginModalFunc={openLoginModalFunc}
          />
        </div>
        <div>
          <CenterTab
            activeTabIndex={activeTabIndex}
            closeModal={closeModal}
            openLoginModalFunc={openLoginModalFunc}
          />
        </div>
      </div>
    </div>
  );
}
