import React from "react";

export const AirTrafficControlIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_86152)">
<path d="M11 3H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.99653 6H18.0005C18.3124 5.99993 18.6199 6.07279 18.8986 6.21275C19.1773 6.35271 19.4194 6.5559 19.6055 6.80609C19.7917 7.05628 19.9168 7.34653 19.9708 7.65367C20.0248 7.96081 20.0062 8.27632 19.9165 8.575L18.1165 14.575C17.9929 14.987 17.7397 15.3481 17.3945 15.6048C17.0494 15.8615 16.6307 16.0001 16.2005 16H7.79653C7.36639 16.0001 6.94768 15.8615 6.60254 15.6048C6.25739 15.3481 6.0042 14.987 5.88053 14.575L4.08053 8.575C3.99088 8.27632 3.97231 7.96081 4.02631 7.65367C4.08031 7.34653 4.20538 7.05628 4.39154 6.80609C4.5777 6.5559 4.81979 6.35271 5.09846 6.21275C5.37714 6.07279 5.68468 5.99993 5.99653 6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 6L10 16V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 6L14 16V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86152">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
