import React from "react";

export const HammerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72492)">
<path d="M11.4145 10L4.03146 17.418C3.83581 17.6123 3.68053 17.8435 3.57457 18.0981C3.46861 18.3527 3.41406 18.6257 3.41406 18.9015C3.41406 19.1773 3.46861 19.4503 3.57457 19.7049C3.68053 19.9595 3.83581 20.1907 4.03146 20.385C4.42683 20.7783 4.96181 20.999 5.51946 20.999C6.07711 20.999 6.61209 20.7783 7.00746 20.385L14.4145 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.1209 15.2928L20.7069 12.7068C20.8944 12.5193 20.9997 12.265 20.9997 11.9998C20.9997 11.7347 20.8944 11.4804 20.7069 11.2928L13.1209 3.70685C12.9334 3.51938 12.6791 3.41406 12.4139 3.41406C12.1487 3.41406 11.8944 3.51938 11.7069 3.70685L9.12091 6.29285C8.93344 6.48038 8.82812 6.73468 8.82812 6.99985C8.82812 7.26501 8.93344 7.51932 9.12091 7.70685L16.7069 15.2928C16.8944 15.4803 17.1487 15.5856 17.4139 15.5856C17.6791 15.5856 17.9334 15.4803 18.1209 15.2928Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72492">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
