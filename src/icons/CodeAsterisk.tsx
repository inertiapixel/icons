import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeAsterisk = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#code-asterisk_svg__a)"
    >
      <path d="M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2M12 11.875l3-1.687M12 11.875v3.375M12 11.875l-3-1.687M12 11.875l3 1.688M12 8.5v3.375M12 11.875l-3 1.688M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
    </g>
    <defs>
      <clipPath id="code-asterisk_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCodeAsterisk;
