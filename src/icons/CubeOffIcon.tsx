import * as React from "react";
import type { SVGProps } from "react";
const SvgCubeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cube-off-icon_svg__a)"
    >
      <path d="M20.83 16.81c.11-.248.17-.52.17-.801V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.009a2.02 2.02 0 0 0-2 0L7.988 3.99M5.441 5.45 4 6.274c-.619.354-1 1.01-1 1.718v8.017c0 .71.381 1.363 1 1.718l7 4.008a2.02 2.02 0 0 0 2 0l5.544-3.174M12 22V12M14.531 10.539 20.73 6.96M3.27 6.96 12 12M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cube-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeOffIcon;
