import * as React from "react";
import type { SVGProps } from "react";
const SvgNetworkOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#network-off_svg__a)"
    >
      <path d="M6.526 6.535a6 6 0 0 0 7.942 7.933m2.247-1.76a6 6 0 0 0-8.427-8.425" />
      <path d="M12 3q2 .5 2 6 0 .506-.017.968m-.55 3.473Q12.934 14.767 12 15" />
      <path d="M12.002 3q-1.406.351-1.822 3.167m-.16 3.838q.173 4.544 1.982 4.995M6 9h3m4 0h5M3 20h7M14 20h7M10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 15v3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="network-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNetworkOff;
