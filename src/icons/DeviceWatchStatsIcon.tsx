import React from "react";

export const DeviceWatchStatsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75655)">
<path d="M6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H15C15.7956 6 16.5587 6.31607 17.1213 6.87868C17.6839 7.44129 18 8.20435 18 9V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H9C8.20435 18 7.44129 17.6839 6.87868 17.1213C6.31607 16.5587 6 15.7956 6 15V9Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18V21H15V18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 6V3H15V6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14V10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75655">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
