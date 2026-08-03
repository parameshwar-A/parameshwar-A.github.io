import type { SVGProps } from "react";

const Sskv = (props: SVGProps<SVGSVGElement>) => (
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
      SSKV
    </text>
  </svg>
);

export { Sskv };
