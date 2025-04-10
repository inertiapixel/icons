import React from "react";

export const Error404Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74801)">
<path d="M3 7V11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7V17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8V16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17H13C13.2652 17 13.5196 16.8946 13.7071 16.7071C13.8946 16.5196 14 16.2652 14 16V8C14 7.73478 13.8946 7.48043 13.7071 7.29289C13.5196 7.10536 13.2652 7 13 7H11C10.7348 7 10.4804 7.10536 10.2929 7.29289C10.1054 7.48043 10 7.73478 10 8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7V11C17 11.2652 17.1054 11.5196 17.2929 11.7071C17.4804 11.8946 17.7348 12 18 12H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 7V17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74801">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
