import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertSquareRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alert-square-rounded_svg__a)">
      <path
        fill="currentColor"
        d="m11.999 2 .642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617.005.642-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017-.642.005-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617L2 12.324v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017Q11.672 2 11.999 2m.01 13-.127.007a1 1 0 0 0 0 1.986l.117.007.127-.007a1 1 0 0 0 0-1.986zm-.01-8a1 1 0 0 0-.993.883L10.999 8v4l.007.117a1 1 0 0 0 1.986 0l.007-.117V8l-.007-.117A1 1 0 0 0 11.999 7"
      />
    </g>
    <defs>
      <clipPath id="alert-square-rounded_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlertSquareRounded;
