import React from "react";

export const MeterCubeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68499)">
<path d="M17 5H18.5C18.8978 5 19.2794 5.15804 19.5607 5.43934C19.842 5.72064 20 6.10218 20 6.5C20 6.89782 19.842 7.27936 19.5607 7.56066C19.2794 7.84196 18.8978 8 18.5 8M18.5 8H18M18.5 8C18.8978 8 19.2794 8.15804 19.5607 8.43934C19.842 8.72064 20 9.10218 20 9.5C20 9.89782 19.842 10.2794 19.5607 10.5607C19.2794 10.842 18.8978 11 18.5 11H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14C4 13.4696 4.21071 12.9609 4.58579 12.5858C4.96086 12.2107 5.46957 12 6 12H6.5C7.16304 12 7.79893 12.2634 8.26777 12.7322C8.73661 13.2011 9 13.837 9 14.5V18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15.5V14.5C9 13.837 9.26339 13.2011 9.73223 12.7322C10.2011 12.2634 10.837 12 11.5 12C12.163 12 12.7989 12.2634 13.2678 12.7322C13.7366 13.2011 14 13.837 14 14.5V18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68499">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
