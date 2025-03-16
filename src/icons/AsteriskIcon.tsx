import * as React from "react";
import type { SVGProps } from "react";
const SvgAsteriskIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#asterisk-icon_svg__a)"
    >
      <path d="m12 12 8-4.5M12 12v9M12 12 4 7.5M12 12l8 4.5M12 3v9M12 12l-8 4.5" />
    </g>
    <defs>
      <clipPath id="asterisk-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAsteriskIcon;
