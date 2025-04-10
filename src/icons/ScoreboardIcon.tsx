import React from "react";

export const ScoreboardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64503)">
<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 3V5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3V5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10.5V13.5C15 13.8978 15.158 14.2794 15.4393 14.5607C15.7206 14.842 16.1022 15 16.5 15C16.8978 15 17.2794 14.842 17.5607 14.5607C17.842 14.2794 18 13.8978 18 13.5V10.5C18 10.1022 17.842 9.72064 17.5607 9.43934C17.2794 9.15804 16.8978 9 16.5 9C16.1022 9 15.7206 9.15804 15.4393 9.43934C15.158 9.72064 15 10.1022 15 10.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9H7.5C7.89782 9 8.27936 9.15804 8.56066 9.43934C8.84196 9.72064 9 10.1022 9 10.5C9 10.8978 8.84196 11.2794 8.56066 11.5607C8.27936 11.842 7.89782 12 7.5 12M7.5 12H7M7.5 12C7.89782 12 8.27936 12.158 8.56066 12.4393C8.84196 12.7206 9 13.1022 9 13.5C9 13.8978 8.84196 14.2794 8.56066 14.5607C8.27936 14.842 7.89782 15 7.5 15H6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64503">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
