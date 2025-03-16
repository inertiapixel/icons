import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#key-off-icon_svg__a)"
    >
      <path d="m10.172 6.159 2.316-2.316a2.876 2.876 0 0 1 4.069 0l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.33 2.33M14.931 14.948a2.86 2.86 0 0 1-1.486-.79l-.301-.302-6.558 6.558a2 2 0 0 1-1.239.578L5.172 21H4a1 1 0 0 1-.993-.883L3 20v-1.172a2 2 0 0 1 .467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144-.301-.301a2.86 2.86 0 0 1-.794-1.504M15 9h.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="key-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKeyOffIcon;
