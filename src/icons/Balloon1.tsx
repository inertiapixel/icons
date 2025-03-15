import * as React from "react";
import type { SVGProps } from "react";
const SvgBalloon1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#balloon-1_svg__a)"
    >
      <path d="M14 8a2 2 0 0 0-2-2" />
      <path d="M6 8a6 6 0 1 1 12 0c0 4.97-2.686 9-6 9s-6-4.03-6-9M12 17v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2" />
    </g>
    <defs>
      <clipPath id="balloon-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBalloon1;
