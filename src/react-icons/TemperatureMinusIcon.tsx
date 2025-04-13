import React from "react";

export const TemperatureMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61957)">
<path d="M8 13.5C7.23743 13.9403 6.64145 14.6199 6.30448 15.4334C5.96752 16.2469 5.9084 17.1488 6.1363 17.9994C6.3642 18.8499 6.86638 19.6015 7.56496 20.1375C8.26353 20.6736 9.11946 20.9641 10 20.9641C10.8805 20.9641 11.7365 20.6736 12.435 20.1375C13.1336 19.6015 13.6358 18.8499 13.8637 17.9994C14.0916 17.1488 14.0325 16.2469 13.6955 15.4334C13.3586 14.6199 12.7626 13.9403 12 13.5V5C12 4.46957 11.7893 3.96086 11.4142 3.58579C11.0391 3.21071 10.5304 3 10 3C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21072 3.96086 8 4.46957 8 5V13.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 9H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61957">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
