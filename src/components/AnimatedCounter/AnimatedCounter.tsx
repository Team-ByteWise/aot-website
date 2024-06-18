import { useState, useEffect, CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { Typography } from "@mui/material";

interface AnimatedCounterProps {
  targetNumber: number;
  appendText?: string;
  fontSize: {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
  };
  fontWeight: string;
  sx?: CSSProperties;
  animationDuration?: number;
  color?: string;
}

const AnimatedCounter = ({
  targetNumber,
  appendText,
  fontSize,
  fontWeight,
  sx,
  animationDuration = 500,
  color= "text.primary",
}: AnimatedCounterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [, setNumber] = useState(0);

  const { number: animatedNumber } = useSpring({
    number: inView ? targetNumber : 0,
    from: { number: 0 },
    reset: false,
    config: { duration: animationDuration },
    onRest: () => setNumber(inView ? targetNumber : 0),
  });

  useEffect(() => {
    if (!inView) {
      setNumber(0);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Typography fontWeight={fontWeight} fontSize={fontSize} sx={sx} color={color}>
        <animated.span>{animatedNumber.to((n) => Math.floor(n))}</animated.span>
        {appendText}
      </Typography>
    </div>
  );
};

export default AnimatedCounter;
