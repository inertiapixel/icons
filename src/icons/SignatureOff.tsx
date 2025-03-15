import * as React from "react";
import type { SVGProps } from "react";
const SvgSignatureOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#signature-off_svg__a)"
    >
      <path d="M3 17q5-5 5-8c0-.394-.017-.735-.05-1.033M6 6C5 6 3.968 7.085 4 9c.034 2.048 1.658 4.877 2.5 6C8 17 9 17.5 10 16l2-3q.5 4 3 4c.219 0 .708-.341 1.231-.742M20 16c.303.245.64.677 1 1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="signature-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignatureOff;
