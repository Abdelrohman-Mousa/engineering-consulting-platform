import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="relative flex items-center justify-center">

                {/* Outer Glow */}
                <div className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-2xl animate-pulse"></div>

                {/* Spinning Ring */}
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

                {/* Inner Dot */}
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full"></div>

            </div>
        </div>
    );
};

export default Loader;