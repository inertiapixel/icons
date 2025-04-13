import React from "react";

export const BrandYatseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81106)">
<path d="M7.00191 3L12.0019 5.876V10.964L16.1989 8.234L21.0019 10.965L11.7209 16.443L9.33791 17.853L7.00391 19.23L4.00391 21V15.435L7.00391 13.664L7.00191 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81106">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
