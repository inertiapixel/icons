import React from "react";

export const RowInsertTopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64786)">
<path d="M4 18V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H19C19.2652 13 19.5196 13.1054 19.7071 13.2929C19.8946 13.4804 20 13.7348 20 14V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 7H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64786">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
