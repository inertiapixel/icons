import React from "react";

export const CropPortraitIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58259)">
<path d="M16 3C16.7956 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6V18C19 18.7956 18.6839 19.5587 18.1213 20.1213C17.5587 20.6839 16.7956 21 16 21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7956 5 18V6C5 5.20435 5.31607 4.44129 5.87868 3.87868C6.44129 3.31607 7.20435 3 8 3H16Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58259">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
