import React from "react";

export const SnowboardingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_63514)">
<path d="M15 3C15 3.26522 15.1054 3.51957 15.2929 3.70711C15.4804 3.89464 15.7348 4 16 4C16.2652 4 16.5196 3.89464 16.7071 3.70711C16.8946 3.51957 17 3.26522 17 3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19L11 16.5L10.5 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L15 15L10.5 12L14 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9L8.5 6H14L16 10L19 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17C3.399 18.154 3.899 18.805 4.5 18.951C10.5 20.415 15.272 21.213 18 21.878C19.333 22.203 20.333 21.878 21 20.902" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63514">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
