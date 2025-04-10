import React from "react";

export const StepIntoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62424)">
<path d="M12 3V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 11L12 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11L12 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20C11 20.2652 11.1054 20.5196 11.2929 20.7071C11.4804 20.8946 11.7348 21 12 21C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62424">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
