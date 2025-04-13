import React from "react";

export const PlaneArrivalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66282)">
<path d="M15.1572 11.8113L19.9872 13.1063C20.2445 13.171 20.4863 13.2862 20.6986 13.4453C20.9109 13.6043 21.0895 13.804 21.2239 14.0327C21.3582 14.2615 21.4458 14.5146 21.4814 14.7775C21.517 15.0404 21.4999 15.3077 21.4312 15.564C21.3625 15.8202 21.2435 16.0602 21.0811 16.27C20.9188 16.4798 20.7163 16.6552 20.4855 16.786C20.2547 16.9167 20.0002 17.0003 19.7368 17.0318C19.4733 17.0633 19.2063 17.042 18.9512 16.9693L4.46219 13.0873L3.11719 6.51528L6.01519 7.29128L7.42919 9.74128L10.3272 10.5173L10.2072 3.23828L13.1052 4.01528L15.1572 11.8113Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66282">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
