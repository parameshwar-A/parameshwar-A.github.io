import type { SVGProps } from "react";

const Gannet = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 40 40">
    <text
      x="20"
      y="26"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="12"
      fontWeight="bold"
      fill="#1a1a1a"
    >
      Gannet
    </text>
  </svg>
);

export { Gannet };
