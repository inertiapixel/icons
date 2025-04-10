import React from "react";

export const ColumnRemoveIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78044)">
<path d="M6 4H10C10.2652 4 10.5196 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5V19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10L20 14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 14L20 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78044">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
