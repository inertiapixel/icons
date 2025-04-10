import React from "react";

export const FileReportIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74174)">
<path d="M13 17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17C21 15.9391 20.5786 14.9217 19.8284 14.1716C19.0783 13.4214 18.0609 13 17 13C15.9391 13 14.9217 13.4214 14.1716 14.1716C13.4214 14.9217 13 15.9391 13 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13V17H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V7C12 7.26522 12.1054 7.51957 12.2929 7.70711C12.4804 7.89464 12.7348 8 13 8H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H12L17 8V10M17 13V17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74174">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
