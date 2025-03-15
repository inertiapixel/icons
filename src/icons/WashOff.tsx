import * as React from "react";
import type { SVGProps } from "react";
const SvgWashOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wash-off_svg__a)"
    >
      <path d="m3 6 1.721 10.329A2 2 0 0 0 6.694 18h10.612q.314-.001.6-.092m1.521-2.472L21 6" />
      <path d="M3.484 8.965q.252.031.514.035c.79.01 1.54-.178 2-.5.461-.32 1.21-.507 2-.5m4.92.92c.428-.084.805-.228 1.08-.419.461-.322 1.21-.508 2-.5.79-.008 1.54.178 2 .5.461.32 1.21.508 2 .5.17 0 .34-.015.503-.035M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wash-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWashOff;
