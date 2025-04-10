import React from "react";

export const MopedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67966)">
<path d="M16 17C16 17.5304 16.2107 18.0391 16.5858 18.4142C16.9609 18.7893 17.4696 19 18 19C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17C20 16.4696 19.7893 15.9609 19.4142 15.5858C19.0391 15.2107 18.5304 15 18 15C17.4696 15 16.9609 15.2107 16.5858 15.5858C16.2107 15.9609 16 16.4696 16 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17V12H6C5.20435 12 4.44129 12.3161 3.87868 12.8787C3.31607 13.4413 3 14.2044 3 15V16H13C13.3706 14.9292 14.0369 13.9852 14.9218 13.2773C15.8067 12.5694 16.8739 12.1265 18 12V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9H9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67966">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
