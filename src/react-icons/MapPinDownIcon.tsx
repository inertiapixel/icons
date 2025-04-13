import React from "react";

export const MapPinDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69452)">
<path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7361 21.3448C12.3735 21.4881 11.9769 21.5224 11.5951 21.4433C11.2133 21.3643 10.8629 21.1753 10.5871 20.8998L6.34306 16.6568C5.38181 15.6955 4.68137 14.5051 4.30787 13.198C3.93437 11.8909 3.90012 10.5101 4.20835 9.18611C4.51658 7.86208 5.15713 6.63844 6.06954 5.63068C6.98194 4.62292 8.1361 3.86429 9.42308 3.4264C10.7101 2.9885 12.0874 2.88579 13.4251 3.12795C14.7628 3.37012 16.0167 3.94917 17.0685 4.81045C18.1203 5.67173 18.9352 6.78683 19.4364 8.0505C19.9376 9.31416 20.1086 10.6847 19.9331 12.0328"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 22L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69452">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
