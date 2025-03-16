import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCodepenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-codepen-icon_svg__a)"
    >
      <path d="m3 15 9 6 9-6-9-6z" />
      <path d="m3 9 9 6 9-6-9-6zM3 9v6M21 9v6M12 3v6M12 15v6" />
    </g>
    <defs>
      <clipPath id="brand-codepen-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandCodepenIcon;
