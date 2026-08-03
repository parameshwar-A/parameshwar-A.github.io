import type { SVGProps } from "react";

const C = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="#ffffff"
    />
    <text
      x="4"
      y="19"
      fontFamily="Arial, sans-serif"
      fontSize="22"
      fontWeight="bold"
      fill="#1a1a1a"
    >
      C
    </text>
  </svg>
);

export { C };
