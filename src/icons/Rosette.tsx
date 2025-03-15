import * as React from "react";
import type { SVGProps } from "react";
const SvgRosette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rosette_svg__a)">
      <path
        fill="currentColor"
        d="M12.01 2.012a3.2 3.2 0 0 1 2.113.797l.154.145.698.698c.192.19.442.31.71.34l.135.009h1a3.2 3.2 0 0 1 3.195 3.018l.005.182v1c0 .27.092.533.258.743l.09.1.697.698a3.2 3.2 0 0 1 .147 4.382l-.145.154-.698.698a1.2 1.2 0 0 0-.34.71l-.009.135v1a3.2 3.2 0 0 1-3.018 3.195l-.182.005h-1a1.2 1.2 0 0 0-.743.258l-.1.09-.698.697a3.2 3.2 0 0 1-4.382.147l-.154-.145-.698-.698a1.2 1.2 0 0 0-.71-.341L8.2 20.02h-1a3.2 3.2 0 0 1-3.195-3.018L4 16.82v-1a1.2 1.2 0 0 0-.258-.743l-.09-.1-.697-.698a3.2 3.2 0 0 1-.147-4.382l.145-.154.698-.698a1.2 1.2 0 0 0 .341-.71L4 8.2v-1l.005-.182a3.2 3.2 0 0 1 3.013-3.013L7.2 4h1a1.2 1.2 0 0 0 .743-.258l.1-.09.698-.697a3.2 3.2 0 0 1 2.27-.944"
      />
    </g>
    <defs>
      <clipPath id="rosette_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRosette;
