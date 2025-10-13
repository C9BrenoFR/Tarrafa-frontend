import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FaInfoCircle } from "react-icons/fa";

type TooltipIndicatorProps = {
  message: string | null;
};

export function Tooltip({ message }: TooltipIndicatorProps) {
  const [visible, setVisible] = useState(false);
  const iconRef = useRef<HTMLButtonElement | null>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const showTooltip = () => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX + rect.width / 2,
      });
      setVisible(true);
    }
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <>
      <button
        ref={iconRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="cursor-pointer text-zinc-500 hover:text-zinc-900 border-none"
      >
        <FaInfoCircle />
      </button>

      {visible &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: coords.top - 40,
              left: coords.left,
              transform: "translateX(-50%)",
              zIndex: 99,
            }}
            className="transition-all duration-300 ease-in-out"
          >
            <div
              className="relative px-2 py-2 text-xs text-white bg-gray-900 rounded-lg bg-opacity-90 border border-gray-700/50 shadow-xl"
            >
              <div className="w-full text-nowrap text-center">
                <p>{message}</p>
              </div>

              <div
                className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 border-r border-b border-gray-700/50 transform rotate-45"
              ></div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
