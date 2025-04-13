import React from "react";

export const Share2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64102)">
<path d="M8 9H7C6.46957 9 5.96086 9.21071 5.58579 9.58579C5.21071 9.96086 5 10.4696 5 11V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V11C19 10.4696 18.7893 9.96086 18.4142 9.58579C18.0391 9.21071 17.5304 9 17 9H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 6L12 3L15 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64102">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
