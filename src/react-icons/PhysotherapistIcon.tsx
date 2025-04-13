import React from "react";

export const PhysotherapistIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66415)">
<path d="M9 15L8 12L12 10L16 11H19.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19C5 18.7348 4.89464 18.4804 4.70711 18.2929C4.51957 18.1054 4.26522 18 4 18C3.73478 18 3.48043 18.1054 3.29289 18.2929C3.10536 18.4804 3 18.7348 3 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 6C11 6.26522 11.1054 6.51957 11.2929 6.70711C11.4804 6.89464 11.7348 7 12 7C12.2652 7 12.5196 6.89464 12.7071 6.70711C12.8946 6.51957 13 6.26522 13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 20H15L16 16L20 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 20H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66415">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
