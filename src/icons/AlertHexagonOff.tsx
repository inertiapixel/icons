import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertHexagonOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alert-hexagon-off_svg__a)"
    >
      <path d="m18.36 18.386-5.268 3.333a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.5V8.216c0-.81.443-1.554 1.158-1.947l1.317-.777M8.01 3.999l2.898-1.71a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7.399 1.13 1.144 1.125 1.949v7.284c0 .414-.116.812-.326 1.155M12 7v1M12 8v.01M3 3l18 18M12 16h.01" />
    </g>
    <defs>
      <clipPath id="alert-hexagon-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlertHexagonOff;
