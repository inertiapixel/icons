import React from "react";

export const NotificationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67464)">
<path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7C14 7.79565 14.3161 8.55871 14.8787 9.12132C15.4413 9.68393 16.2044 10 17 10C17.7956 10 18.5587 9.68393 19.1213 9.12132C19.6839 8.55871 20 7.79565 20 7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4C16.2044 4 15.4413 4.31607 14.8787 4.87868C14.3161 5.44129 14 6.20435 14 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67464">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
