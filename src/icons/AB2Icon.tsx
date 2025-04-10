import React from "react";

export const AB2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_86603)">
<path d="M16 21H19C19.81 21 20.48 20.33 20.48 19.52L20.5 19.5C20.5 18.68 19.81 18 19 18H16V21Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15.0001H18.5C19.34 14.9901 20 15.6601 20 16.5001C20 17.3401 19.34 18.0001 18.5 18.0001H16V15.0001Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9V5C4 3.964 4.895 3 6 3C7.105 3 8 3.964 8 5V9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.98828 11.9805C2.98828 14.3674 3.93649 16.6566 5.62432 18.3444C7.31215 20.0323 9.60133 20.9805 11.9883 20.9805M20.9883 11.9805C20.9883 9.59352 20.0401 7.30433 18.3522 5.61651C16.6644 3.92868 14.3752 2.98047 11.9883 2.98047" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7H4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86603">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
