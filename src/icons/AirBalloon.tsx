import * as React from "react";
import type { SVGProps } from "react";
const SvgAirBalloon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#air-balloon_svg__a)"
    >
      <path d="M10 20a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM12 16c3.314 0 6-4.686 6-8A6 6 0 1 0 6 8c0 3.314 2.686 8 6 8" />
      <path d="M10 9c0 1.857.21 3.637.586 4.95C10.96 15.263 11.47 16 12 16s1.04-.738 1.414-2.05C13.79 12.637 14 10.857 14 9s-.21-3.637-.586-4.95C13.04 2.738 12.53 2 12 2s-1.04.737-1.414 2.05C10.21 5.363 10 7.143 10 9" />
    </g>
    <defs>
      <clipPath id="air-balloon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAirBalloon;
