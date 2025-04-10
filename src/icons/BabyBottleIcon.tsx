import React from "react";

export const BabyBottleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_84583)">
<path d="M5 10H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H9C8.46957 22 7.96086 21.7893 7.58579 21.4142C7.21071 21.0391 7 20.5304 7 20V9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84583">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
