type CircularProgressProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
};

export default function CircularProgress({
  percentage,
  size = 130,
  strokeWidth = 10,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const dashOffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div
      className="
        relative
        flex
        aspect-square
        w-24
        items-center
        justify-center
        sm:w-28
        md:w-32
        lg:w-32.5
        xl:w-36
      "
      style={{
        maxWidth: size,
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full -rotate-90"
      >
        {/* Background Ring */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth={strokeWidth}
        />

        {/* Progress Ring */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E3B336"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{
            transition: "stroke-dashoffset 0.8s ease",
          }}
        />
      </svg>

      {/* Percentage */}

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="
            font-serif
            font-semibold
            text-white
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-4xl
            xl:text-5xl
          "
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}