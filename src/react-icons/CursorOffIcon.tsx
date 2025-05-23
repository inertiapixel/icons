import React from "react";

export const CursorOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77077)">
<path d="M9 4C9.79565 4 10.5587 4.31607 11.1213 4.87868C11.6839 5.44129 12 6.20435 12 7V8M12 17C12 17.7956 11.6839 18.5587 11.1213 19.1213C10.5587 19.6839 9.79565 20 9 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7V8M12 12V17C12 17.7956 12.3161 18.5587 12.8787 19.1213C13.4413 19.6839 14.2044 20 15 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77077">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
