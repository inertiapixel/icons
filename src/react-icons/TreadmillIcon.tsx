import React from "react";

export const TreadmillIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60989)">
<path d="M10 3C10 3.26522 10.1054 3.51957 10.2929 3.70711C10.4804 3.89464 10.7348 4 11 4C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14L7 15L7.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V15L9 12.077L9.75 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V8L10 7L12.5 9.5L15 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 22C21 21.7348 20.8946 21.4804 20.7071 21.2929C20.5196 21.1054 20.2652 21 20 21H4C3.73478 21 3.48043 21.1054 3.29289 21.2929C3.10536 21.4804 3 21.7348 3 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 21L19 10L21 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60989">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
