import React from "react";

export const SmokingNoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63526)">
<path d="M8 13V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5V5.5C16 6.03043 16.2107 6.53914 16.5858 6.91421C16.9609 7.28929 17.4696 7.5 18 7.5C18.5304 7.5 19.0391 7.71071 19.4142 8.08579C19.7893 8.46086 20 8.96957 20 9.5V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13H20C20.2652 13 20.5196 13.1054 20.7071 13.2929C20.8946 13.4804 21 13.7348 21 14V16C21 16.28 20.885 16.533 20.7 16.714M17 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16V14C3 13.7348 3.10536 13.4804 3.29289 13.2929C3.48043 13.1054 3.73478 13 4 13H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63526">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
