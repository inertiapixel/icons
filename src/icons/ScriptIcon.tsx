import React from "react";

export const ScriptIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64454)">
<path d="M17 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17C3 16.2044 3.31607 15.4413 3.87868 14.8787C4.44129 14.3161 5.20435 14 6 14H17C16.2044 14 15.4413 14.3161 14.8787 14.8787C14.3161 15.4413 14 16.2044 14 17C14 17.7956 14.3161 18.5587 14.8787 19.1213C15.4413 19.6839 16.2044 20 17 20ZM17 20H18C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64454">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
