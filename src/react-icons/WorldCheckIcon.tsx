import React from "react";

export const WorldCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59736)">
<path d="M20.9454 12.9903C21.1434 11.2008 20.8003 9.39313 19.9603 7.80075C19.1203 6.20837 17.822 4.90452 16.2332 4.05771C14.6444 3.2109 12.8382 2.86005 11.0479 3.05051C9.25765 3.24096 7.56566 3.96397 6.19059 5.12609C4.81553 6.2882 3.82061 7.83601 3.3344 9.56948C2.8482 11.303 2.89307 13.1424 3.4632 14.8501C4.03334 16.5578 5.10254 18.0553 6.53262 19.149C7.9627 20.2427 9.68794 20.8823 11.4854 20.9853"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H17.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.7316 6.57544 15.5552 10.8525 14.811 15.001"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19L17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59736">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
