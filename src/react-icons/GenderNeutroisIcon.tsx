import React from "react";

export const GenderNeutroisIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72933)">
<path d="M12 10C13.3261 10 14.5979 10.5268 15.5355 11.4645C16.4732 12.4021 17 13.6739 17 15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5979 19.4732 13.3261 20 12 20C10.6739 20 9.40215 19.4732 8.46447 18.5355C7.52678 17.5979 7 16.3261 7 15C7 13.6739 7.52678 12.4021 8.46447 11.4645C9.40215 10.5268 10.6739 10 12 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72933">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
