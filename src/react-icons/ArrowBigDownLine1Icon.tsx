import React from "react";

export const ArrowBigDownLine1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85527)">
<path d="M14.9998 12H18.5858C18.7836 12 18.9769 12.0587 19.1413 12.1686C19.3057 12.2785 19.4339 12.4346 19.5095 12.6173C19.5852 12.8 19.605 13.0011 19.5664 13.195C19.5279 13.389 19.4327 13.5671 19.2928 13.707L12.7068 20.293C12.5193 20.4805 12.265 20.5858 11.9998 20.5858C11.7347 20.5858 11.4804 20.4805 11.2928 20.293L4.70685 13.707C4.56704 13.5671 4.47183 13.389 4.43327 13.195C4.3947 13.0011 4.4145 12.8 4.49017 12.6173C4.56584 12.4346 4.69398 12.2785 4.85839 12.1686C5.0228 12.0587 5.2161 12 5.41385 12H8.99985V6H14.9998V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85527">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
