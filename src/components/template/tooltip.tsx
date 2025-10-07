import { FaInfoCircle } from "react-icons/fa";

type TooltipIndicatorProps = {
    message: string;
};
export function Tooltip({ message }: TooltipIndicatorProps) {
    return (
        <div className="relative inline-block group">
            <button className="cursor-pointer text-zinc-500 hover:text-zinc-900">
                <FaInfoCircle />
            </button>

            <div
                className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-300 ease-in-out"
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
            </div>
        </div>
    )
};