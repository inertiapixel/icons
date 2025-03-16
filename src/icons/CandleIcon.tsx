import * as React from "react";
import type { SVGProps } from "react";
const SvgCandleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#candle-icon_svg__a)">
      <path d="M14 10h-4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2M11.253 2.334l-1.55 1.737c-1.042 1.277-.898 3.097.296 4.166a3 3 0 0 0 4.195-4.28l-1.452-1.624a1 1 0 0 0-1.49.001" />
    </g>
    <defs>
      <clipPath id="candle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCandleIcon;
