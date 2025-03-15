import * as React from "react";
import type { SVGProps } from "react";
const SvgAssemblyOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#assembly-off_svg__a)"
    >
      <path d="m8.703 4.684 2.326-1.385a2.06 2.06 0 0 1 2 0l6 3.573H19a2 2 0 0 1 1 1.747v6.536c0 .248-.046.49-.132.715m-2.156 1.837-4.741 3.029a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.156V8.619A2 2 0 0 1 5.029 6.87l1.157-.69" />
      <path d="M11.593 7.59c.295-.132.637-.12.921.04l3 1.79H15.5c.312.182.503.517.5.878V12m-1.152 2.86-2.363 1.514a1 1 0 0 1-.97 0l-3-1.922A1 1 0 0 1 8 13.576v-3.278c0-.364.197-.7.514-.877l.568-.34M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="assembly-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAssemblyOff;
