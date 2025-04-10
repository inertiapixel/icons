import React from "react";

export const CirclePlus2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78884)">
<path d="M20.9849 12.5216C21.0906 10.7006 20.6405 8.89054 19.6943 7.33117C18.7481 5.77179 17.3504 4.53673 15.6864 3.78962C14.0224 3.04251 12.1707 2.81862 10.3766 3.14762C8.58255 3.47663 6.93078 4.34299 5.64018 5.63191C4.34958 6.92084 3.48107 8.57149 3.14974 10.3651C2.81841 12.1588 3.03989 14.0108 3.78484 15.6757C4.52978 17.3407 5.76303 18.74 7.32118 19.6882C8.87932 20.6365 10.6888 21.0889 12.5099 20.9856" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78884">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
