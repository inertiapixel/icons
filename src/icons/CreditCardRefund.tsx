import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardRefund = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#credit-card-refund_svg__a)"
    >
      <path d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18M7 15h.01M11 15h2M16 19h6M19 16l-3 3 3 3" />
    </g>
    <defs>
      <clipPath id="credit-card-refund_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCreditCardRefund;
