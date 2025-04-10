import React from "react";

export const Crop32Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58271)">
<path d="M18 6C18.7956 6 19.5587 6.31607 20.1213 6.87868C20.6839 7.44129 21 8.20435 21 9V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V9C3 8.20435 3.31607 7.44129 3.87868 6.87868C4.44129 6.31607 5.20435 6 6 6H18Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58271">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
