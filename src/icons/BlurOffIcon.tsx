import * as React from "react";
import type { SVGProps } from "react";
const SvgBlurOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#blur-off-icon_svg__a)"
    >
      <path d="M12 3v5m0 4v8M5.64 5.632A9 9 0 0 0 18.36 18.37m1.68-2.318A9 9 0 0 0 7.966 3.954M16 12h5M13 9h7M12 6h6M12 18h6M12 15h3m4 0h1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="blur-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlurOffIcon;
