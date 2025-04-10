import React from "react";

export const BedOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83956)">
<path d="M7 7C6.60444 7 6.21776 7.1173 5.88886 7.33706C5.55996 7.55682 5.30362 7.86918 5.15224 8.23463C5.00087 8.60009 4.96126 9.00222 5.03843 9.39018C5.1156 9.77814 5.30608 10.1345 5.58579 10.4142C5.86549 10.6939 6.22186 10.8844 6.60982 10.9616C6.99778 11.0387 7.39992 10.9991 7.76537 10.8478C8.13082 10.6964 8.44318 10.44 8.66294 10.1111C8.8827 9.78224 9 9.39556 9 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 17V14H18M14 14H2" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 8V17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V14H14M18 14H22V12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83956">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
