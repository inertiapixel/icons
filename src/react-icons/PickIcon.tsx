import React from "react";

export const PickIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66404)">
<path d="M13.0004 8L3.6174 17.418C3.42174 17.6123 3.26647 17.8435 3.16051 18.0981C3.05455 18.3527 3 18.6257 3 18.9015C3 19.1773 3.05455 19.4503 3.16051 19.7049C3.26647 19.9595 3.42174 20.1907 3.6174 20.385C4.01277 20.7783 4.54774 20.999 5.1054 20.999C5.66305 20.999 6.19802 20.7783 6.5934 20.385L16.0004 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3H13.586C13.8512 3.00006 14.1055 3.10545 14.293 3.293L20.707 9.707C20.8946 9.89449 20.9999 10.1488 21 10.414V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17C18.4696 17 17.9609 16.7893 17.5858 16.4142C17.2107 16.0391 17 15.5304 17 15V12L12 7H9C8.46957 7 7.96086 6.78929 7.58579 6.41421C7.21071 6.03914 7 5.53043 7 5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66404">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
