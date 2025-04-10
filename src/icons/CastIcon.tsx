import React from "react";

export const CastIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_79907)">
<path d="M3 19H3.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19C7 17.9391 6.57857 16.9217 5.82843 16.1716C5.07828 15.4214 4.06087 15 3 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 19C11 16.8783 10.1571 14.8434 8.65685 13.3431C7.15656 11.8429 5.12173 11 3 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9992 19H17.9992C18.7949 19 19.5579 18.6839 20.1205 18.1213C20.6831 17.5587 20.9992 16.7956 20.9992 16V8C20.9992 7.20435 20.6831 6.44129 20.1205 5.87868C19.5579 5.31607 18.7949 5 17.9992 5H5.99922C5.3837 5.00584 4.78487 5.20088 4.28398 5.55866C3.78309 5.91644 3.40437 6.41965 3.19922 7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79907">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
