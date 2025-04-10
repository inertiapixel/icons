import React from "react";

export const MagnetIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57770)">
<path d="M21 9V13C21 15.3869 20.0518 17.6761 18.364 19.364C16.6761 21.0518 14.3869 22 12 22C9.61305 22 7.32387 21.0518 5.63604 19.364C3.94821 17.6761 3 15.3869 3 13V9H10V13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13V9H21ZM18 2C18.7956 2 19.5587 2.31607 20.1213 2.87868C20.6839 3.44129 21 4.20435 21 5V7H14V5C14 4.20435 14.3161 3.44129 14.8787 2.87868C15.4413 2.31607 16.2044 2 17 2H18ZM7 2C7.79565 2 8.55871 2.31607 9.12132 2.87868C9.68393 3.44129 10 4.20435 10 5V7H3V5C3 4.20435 3.31607 3.44129 3.87868 2.87868C4.44129 2.31607 5.20435 2 6 2H7Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57770">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
