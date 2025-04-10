import React from "react";

export const LadleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71057)">
<path d="M3 14V15C3 16.5913 3.63214 18.1174 4.75736 19.2426C5.88258 20.3679 7.4087 21 9 21C10.5913 21 12.1174 20.3679 13.2426 19.2426C14.3679 18.1174 15 16.5913 15 15V6C15 5.20435 15.3161 4.44129 15.8787 3.87868C16.4413 3.31607 17.2044 3 18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16C8.337 16 7.7 15.964 7.104 15.898L6.604 15.834C4.481 15.526 3 14.821 3 14C3 13.18 4.482 12.474 6.603 12.166L7.103 12.102C7.73298 12.0332 8.36627 11.9992 9 12C9.663 12 10.3 12.036 10.896 12.102L11.396 12.166C13.519 12.474 15 13.179 15 14C15 14.82 13.518 15.526 11.397 15.834L10.897 15.898C10.267 15.9668 9.63373 16.0008 9 16Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71057">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
