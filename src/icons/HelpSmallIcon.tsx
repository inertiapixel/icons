import React from "react";

export const HelpSmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_72129)">
<path d="M12 16V16.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.9998C12.4498 13.0011 12.8868 12.8508 13.2407 12.5732C13.5945 12.2956 13.8444 11.9068 13.95 11.4696C14.0557 11.0324 14.0109 10.5724 13.8229 10.1638C13.6349 9.75524 13.3147 9.42195 12.914 9.21776C12.5162 9.01397 12.0611 8.95079 11.6228 9.03848C11.1845 9.12618 10.7888 9.3596 10.5 9.70076" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72129">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
