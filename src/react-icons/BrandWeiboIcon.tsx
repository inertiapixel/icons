import React from "react";

export const BrandWeiboIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81186)">
<path d="M19 14.127C19 17.2 15.498 20 11 20C6.874 20 3 17.776 3 14.435C3 12.655 3.984 10.698 5.7 8.86803C8.062 6.35803 10.893 5.18103 12.251 6.63003C12.666 7.07003 13.003 8.02003 13 8.69203C15 7.07703 17.308 9.07903 16.5 11.385C17.76 11.942 19 11.923 19 14.127Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4H16C17.3261 4 18.5979 4.52678 19.5355 5.46447C20.4732 6.40215 21 7.67392 21 9V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81186">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
