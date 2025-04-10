import React from "react";

export const RowRemoveIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64781)">
<path d="M20 6V10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11H5C4.73478 11 4.48043 10.8946 4.29289 10.7071C4.10536 10.5196 4 10.2652 4 10V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16L14 20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20L14 16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64781">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
