import * as React from "react";
import type { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bug_svg__a)">
      <path
        fill="currentColor"
        d="M12 4a4 4 0 0 1 3.995 3.8L16 8a1 1 0 0 1 .428.096l3.033-1.938a1 1 0 1 1 1.078 1.684l-3.015 1.931c.276.712.437 1.464.476 2.227h3a1 1 0 0 1 0 2h-3v1c0 .515-.065 1.027-.195 1.525l2.708 1.616a1.002 1.002 0 0 1-.268 1.83 1 1 0 0 1-.758-.112l-2.514-1.501A6 6 0 0 1 13 20.918V15a1 1 0 0 0-2 0v5.917a6 6 0 0 1-3.973-2.56L4.513 19.86a1 1 0 0 1-1.026-1.718l2.708-1.616A6 6 0 0 1 6 15v-1H3a1 1 0 0 1 0-2h3.001v-.055a7 7 0 0 1 .474-2.173l-3.014-1.93a1 1 0 1 1 1.078-1.684l3.032 1.939.024-.012.068-.027.019-.005.016-.006.032-.008.04-.013.034-.007.034-.004.045-.008.015-.001.015-.002L8 8a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2"
      />
    </g>
    <defs>
      <clipPath id="bug_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBug;
