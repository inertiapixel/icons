import React from "react";

export const HelmetIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72154)">
<path d="M11.9991 4C13.8602 4.00018 15.6755 4.5773 17.195 5.6519C18.7145 6.7265 19.8634 8.24573 20.4837 10.0004C21.104 11.7551 21.1651 13.6589 20.6585 15.4497C20.1519 17.2405 19.1027 18.8302 17.6551 20H6.34315C4.89564 18.8302 3.84637 17.2405 3.3398 15.4497C2.83324 13.6589 2.8943 11.7551 3.51458 10.0004C4.13485 8.24573 5.28384 6.7265 6.80333 5.6519C8.32281 4.5773 10.1381 4.00018 11.9991 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0019 9H11.2019C11.0497 9.00019 10.8996 9.03511 10.763 9.10209C10.6263 9.16906 10.5068 9.26634 10.4134 9.3865C10.3201 9.50666 10.2554 9.64654 10.2243 9.79548C10.1931 9.94443 10.1964 10.0985 10.2339 10.246C10.7409 12.246 11.8299 13.664 13.5019 14.5C15.5019 15.5 17.8349 16 20.5019 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72154">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
