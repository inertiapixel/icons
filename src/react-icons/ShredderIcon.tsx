import React from "react";

export const ShredderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63694)">
<path d="M4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10H19C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11V14C20 14.2652 19.8946 14.5196 19.7071 14.7071C19.5196 14.8946 19.2652 15 19 15H5C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10V6C17 5.46957 16.7893 4.96086 16.4142 4.58579C16.0391 4.21071 15.5304 4 15 4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V10M12 15V20M16 15V17M8 15V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63694">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
