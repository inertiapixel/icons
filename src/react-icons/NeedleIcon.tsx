import React from "react";

export const NeedleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67578)">
<path d="M2.99838 20.999C2.33138 20.332 6.26038 14.763 14.7834 4.29003C15.0872 3.91695 15.4646 3.61051 15.8921 3.38984C16.3197 3.16918 16.7881 3.03903 17.2682 3.00752C17.7483 2.976 18.2297 3.04381 18.6824 3.2067C19.1351 3.36959 19.5494 3.62406 19.8993 3.95423C20.2493 4.2844 20.5274 4.68317 20.7163 5.12564C20.9052 5.56812 21.0009 6.04479 20.9973 6.52589C20.9938 7.007 20.8911 7.4822 20.6956 7.92183C20.5002 8.36146 20.2162 8.75607 19.8614 9.08103C9.28638 17.693 3.66538 21.666 2.99838 20.999Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 6.5L16.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67578">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
