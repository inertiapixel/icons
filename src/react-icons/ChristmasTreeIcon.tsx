import React from "react";

export const ChristmasTreeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79381)">
<path d="M12 3L16 7L14 8L18 12L15 13L19 17H5L9 13L6 12L10 8L8 7L12 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17V20C14 20.2652 13.8946 20.5196 13.7071 20.7071C13.5196 20.8946 13.2652 21 13 21H11C10.7348 21 10.4804 20.8946 10.2929 20.7071C10.1054 20.5196 10 20.2652 10 20V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79381">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
