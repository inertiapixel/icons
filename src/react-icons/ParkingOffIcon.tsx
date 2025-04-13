import React from "react";

export const ParkingOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67058)">
<path d="M8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V16M19.418 19.41C19.056 19.775 18.554 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.446 4.225 4.944 4.59 4.582"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16V9M12 8H13C13.3354 7.99998 13.6655 8.08433 13.9598 8.24529C14.2541 8.40624 14.5032 8.63863 14.6841 8.92107C14.8651 9.20351 14.9721 9.52692 14.9953 9.86155C15.0185 10.1962 14.9572 10.5313 14.817 10.836M12 12H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67058">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
