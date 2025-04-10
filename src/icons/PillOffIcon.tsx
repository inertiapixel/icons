import React from "react";

export const PillOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66346)">
<path d="M10.4967 6.50449L12.4967 4.50449C13.4281 3.59167 14.6822 3.08332 15.9863 3.08991C17.2905 3.09649 18.5393 3.61748 19.4615 4.53967C20.3837 5.46185 20.9047 6.7107 20.9113 8.01484C20.9178 9.31899 20.4095 10.573 19.4967 11.5045L17.4967 13.5045M15.4967 15.5045L11.4967 19.5045C10.5652 20.4173 9.31117 20.9257 8.00703 20.9191C6.70289 20.9125 5.45403 20.3915 4.53185 19.4693C3.60967 18.5471 3.08868 17.2983 3.08209 15.9941C3.07551 14.69 3.58386 13.4359 4.49668 12.5045L8.49668 8.50449" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 8.5L15.5 15.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66346">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
