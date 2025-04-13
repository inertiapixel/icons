import React from "react";

export const DragDrop2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75146)">
<path d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V4.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4V4.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V4.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4V4.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8V8.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75146">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
