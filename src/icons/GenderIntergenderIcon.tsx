import React from "react";

export const GenderIntergenderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_72943)">
<path d="M13.5 11.5L20 18V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 13.5L18 20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4C10.3261 4 11.5979 4.52678 12.5355 5.46447C13.4732 6.40215 14 7.67392 14 9C14 10.3261 13.4732 11.5979 12.5355 12.5355C11.5979 13.4732 10.3261 14 9 14C7.67392 14 6.40215 13.4732 5.46447 12.5355C4.52678 11.5979 4 10.3261 4 9C4 7.67392 4.52678 6.40215 5.46447 5.46447C6.40215 4.52678 7.67392 4 9 4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20L16 18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72943">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
