import * as React from "react";
import type { SVGProps } from "react";
const SvgCarambolaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#carambola-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.286 21.09q-1.69 0-5.288-2.615-3.596 2.618-5.288 2.616-2.726 0-.495-6.8-9.389-6.775 2.135-6.775h.076Q10.212 2 12 2q1.786 0 3.574 5.516h.076q11.526 0 2.133 6.774 2.23 6.802-.497 6.8"
      />
    </g>
    <defs>
      <clipPath id="carambola-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarambolaIcon;
