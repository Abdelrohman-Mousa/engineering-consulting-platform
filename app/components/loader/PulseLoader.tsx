type PulseLoaderProps = {
    size?: number; // حجم الدائرة
    color?: string; // اللون
};

const PulseLoader = ({ size = 8, color = "#ffffff" }: PulseLoaderProps) => {
    return (
        <div className="flex gap-1 items-center justify-center">
      <span
          style={{ width: size, height: size, backgroundColor: color }}
          className="rounded-full animate-pulse"
      ></span>

            <span
                style={{ width: size, height: size, backgroundColor: color, animationDelay: "0.2s" }}
                className="rounded-full animate-pulse"
            ></span>

            <span
                style={{ width: size, height: size, backgroundColor: color, animationDelay: "0.4s" }}
                className="rounded-full animate-pulse"
            ></span>
        </div>
    );
};

export default PulseLoader;