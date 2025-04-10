import React from "react";

export const CrystalBallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77543)">
<path d="M6.73 17.0189C5.5056 15.9468 4.63727 14.5269 4.24091 12.9485C3.84454 11.37 3.93899 9.7083 4.51164 8.18497C5.08429 6.66163 6.10791 5.34918 7.4459 4.42276C8.78388 3.49633 10.3726 3 12 3C13.6274 3 15.2161 3.49633 16.5541 4.42276C17.8921 5.34918 18.9157 6.66163 19.4884 8.18497C20.061 9.7083 20.1555 11.37 19.7591 12.9485C19.3627 14.5269 18.4944 15.9468 17.27 17.0189" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17H7C6.46957 17 5.96086 17.2107 5.58579 17.5858C5.21071 17.9609 5 18.4696 5 19Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7C10.2044 7 9.44129 7.31607 8.87868 7.87868C8.31607 8.44129 8 9.20435 8 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77543">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
