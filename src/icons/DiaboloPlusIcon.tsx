import * as React from "react";
import type { SVGProps } from "react";
const SvgDiaboloPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#diabolo-plus-icon_svg__a)"
    >
      <path d="M4 6c0 .796.843 1.559 2.343 2.121S9.878 9 12 9s4.157-.316 5.657-.879S20 6.796 20 6s-.843-1.559-2.343-2.121S14.122 3 12 3s-4.157.316-5.657.879S4 5.204 4 6" />
      <path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3q.255 0 .508-.006M18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
      <path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="diabolo-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiaboloPlusIcon;
