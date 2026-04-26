import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-[#060340]">
            <div className="relative w-40 h-40">

                {/* Grid */}
                <div className="absolute inset-0 border border-black opacity-20"></div>

                {/* Outer Border */}
                <div className="absolute inset-0 border-2 border-blue-400 animate-pulse"></div>

                {/* Rotating Square */}
                <div className="absolute inset-4 border border-blue-300 animate-spin"></div>

                {/* Inner Pulse */}
                <div className="absolute inset-8 border border-blue-200 animate-ping"></div>

            </div>
        </div>
    );
};

export default Loader;