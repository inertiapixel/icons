import React from "react";

export const TemperatureIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61921)">
<path d="M10 13.5C9.23743 13.9403 8.64145 14.6199 8.30448 15.4334C7.96752 16.2469 7.9084 17.1488 8.1363 17.9994C8.3642 18.8499 8.86638 19.6015 9.56496 20.1375C10.2635 20.6736 11.1195 20.9641 12 20.9641C12.8805 20.9641 13.7365 20.6736 14.435 20.1375C15.1336 19.6015 15.6358 18.8499 15.8637 17.9994C16.0916 17.1488 16.0325 16.2469 15.6955 15.4334C15.3586 14.6199 14.7626 13.9403 14 13.5V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5V13.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 9H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61921">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
