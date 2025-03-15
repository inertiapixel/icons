import * as React from "react";
import type { SVGProps } from "react";
const SvgMarqueeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#marquee-off_svg__a)"
    >
      <path d="M4 6c0-.557.227-1.06.593-1.422M9 4h1.5M13.5 4H15M18 4a2 2 0 0 1 2 2M20 9v1.5M20 13.5V15M19.402 19.426A2 2 0 0 1 18 20M15 20h-1.5M10.5 20H9M6 20a2 2 0 0 1-2-2M4 15v-1.5M4 10.5V9M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="marquee-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMarqueeOff;
