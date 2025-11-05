import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaInfoCircle } from "react-icons/fa";
import { createPopper } from "@popperjs/core";

type TooltipIndicatorProps = {
  message: string | null;
};

export function Tooltip({ message }: TooltipIndicatorProps) {
  const [visible, setVisible] = useState(false);
  const iconRef = useRef<HTMLButtonElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const popperInstanceRef = useRef<ReturnType<typeof createPopper> | null>(null);

  useEffect(() => {
    if (visible && iconRef.current && tooltipRef.current) {
      popperInstanceRef.current = createPopper(iconRef.current, tooltipRef.current, {
        placement: "top",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
          {
            name: "preventOverflow",
            options: {
              padding: 8,
            },
          },
        ],
      });
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [visible]);

  // Função para fechar o popup quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        visible &&
        iconRef.current &&
        tooltipRef.current &&
        !iconRef.current.contains(event.target as Node) &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  const togglePopup = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        ref={iconRef}
        onClick={togglePopup}
        className="cursor-pointer text-zinc-500 hover:text-zinc-900 border-none focus:outline-none"
      >
        <FaInfoCircle />
      </button>

      {visible &&
        createPortal(
          <div
            ref={tooltipRef}
            className="z-[999] px-2 py-2 text-sm text-white bg-gray-900 rounded-lg bg-opacity-90 border border-gray-700/50 shadow-xl max-w-[220px] break-words whitespace-normal"
          >
            <div className="w-full text-center">
              <p>{message}</p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
