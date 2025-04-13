import React from "react";

export const SortDescendingShapesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63332)">
<path d="M4 15L7 18L10 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4L13.5 10H20.5L17 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63332">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
