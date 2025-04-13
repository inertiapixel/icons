import React from "react";

export const RecycleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65341)">
<path d="M12 17L10 19L12 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 19H19C19.3186 18.9836 19.6287 18.8912 19.9043 18.7305C20.1799 18.5698 20.4131 18.3456 20.5843 18.0764C20.7556 17.8073 20.86 17.501 20.8888 17.1833C20.9177 16.8656 20.8701 16.5456 20.75 16.25L20.2 15.25"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.53431 11.0015L7.80231 8.26953L5.07031 9.00153"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.80447 8.26953L3.30447 16.0635C3.15952 16.3476 3.08459 16.6622 3.08596 16.9811C3.08732 17.3001 3.16493 17.614 3.31231 17.8968C3.45969 18.1797 3.67257 18.4231 3.93318 18.607C4.1938 18.7908 4.4946 18.9096 4.81047 18.9535L5.95148 18.9775"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4648 11L18.1968 11.732L18.9288 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.1947 11.7328L13.6947 3.9388C13.5211 3.67123 13.286 3.44907 13.0091 3.29083C12.7322 3.1326 12.4214 3.04289 12.1028 3.02919C11.7841 3.01549 11.4668 3.07819 11.1773 3.21207C10.8878 3.34595 10.6346 3.54712 10.4387 3.7988L9.84766 4.7748"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65341">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
