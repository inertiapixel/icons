import * as React from "react";
import type { SVGProps } from "react";
const SvgAsteriskSimpleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#asterisk-simple-icon_svg__a)"
    >
      <path d="M12 12V3M12 12 3 9.5M12 12l9-2.5M12 12l6 8.5M12 12l-6 8.5" />
    </g>
    <defs>
      <clipPath id="asterisk-simple-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAsteriskSimpleIcon;
