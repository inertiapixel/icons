import * as React from "react";
import type { SVGProps } from "react";
const SvgSpade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#spade_svg__a)">
      <path
        fill="currentColor"
        d="M11.327 2.26a1396 1396 0 0 0-4.923 4.504c-.626.6-1.213 1.21-1.774 1.843a6.53 6.53 0 0 0-.314 8.245l.14.177c1.011 1.205 2.56 1.755 4.055 1.574l.246-.037-.707 2.118A1 1 0 0 0 9 22h6l.117-.007a1 1 0 0 0 .83-1.31l-.687-2.065.104.02c1.588.25 3.261-.387 4.32-1.785a6.53 6.53 0 0 0-.312-8.243 32 32 0 0 0-1.76-1.83l-4.937-4.518a1 1 0 0 0-1.349-.002"
      />
    </g>
    <defs>
      <clipPath id="spade_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpade;
