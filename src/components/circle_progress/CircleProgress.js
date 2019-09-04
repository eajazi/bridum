import React from 'react';

const CircleProgress = ({
  progress,
  text,
  responsive,
  size,
  bgColor,
  lineWidth,
  progressColor,
  roundedStroke,
  animate,
  animationDuration,
  onAnimationEnd,
  textStyle,
  textColor
}) => {
  const radius = 175;
  const diameter = Math.round(Math.PI * radius * 2);
  const getOffset = (val = 0) =>
    Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

  const svgSize = responsive ? '100%' : size;
  const strokeLinecap = roundedStroke ? 'round' : 'butt';
  const strokeDashoffset = getOffset(progress);
  const transition = animate
    ? `stroke-dashoffset ${animationDuration} ease-out`
    : undefined;

  const renderText = () => {
    return (
      <text
        className="date-countdown-circle-text"
        style={textStyle}
        fill={textColor}
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {text}
      </text>
    );
  };

  return (
    <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
      <circle
        stroke={bgColor}
        cx="175"
        cy="175"
        r="175"
        strokeWidth={lineWidth}
        fill="none"
      />
      <circle
        stroke={progressColor}
        transform="rotate(-90 175 175)"
        cx="175"
        cy="175"
        r="175"
        strokeDasharray="1100"
        strokeWidth={lineWidth}
        strokeDashoffset="1100"
        strokeLinecap={strokeLinecap}
        fill="none"
        style={{ strokeDashoffset, transition }}
        onTransitionEnd={onAnimationEnd}
      />
      {renderText()}
    </svg>
  );
};

export default CircleProgress;
