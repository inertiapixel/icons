import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shield-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11.883 2.007 11.997 2l.118.007.06.008.06.013.111.034a1 1 0 0 1 .217.112l.104.082.255.218a11 11 0 0 0 7.19 2.537l.341-.01a1 1 0 0 1 1.005.717 13 13 0 0 1-9.208 16.25 1 1 0 0 1-.502 0A13 13 0 0 1 2.54 5.718a1 1 0 0 1 1.005-.717 11 11 0 0 0 7.531-2.527l.263-.225.096-.075a1 1 0 0 1 .217-.112l.112-.034q.06-.014.12-.021"
      />
    </g>
    <defs>
      <clipPath id="shield-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldIcon;
