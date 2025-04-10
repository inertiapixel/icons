import React from "react";

export const BlenderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83689)">
<path d="M9 10H6C5.73478 10 5.48043 9.89464 5.29289 9.70711C5.10536 9.51957 5 9.26522 5 9V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H16.802C16.9485 3.99998 17.0932 4.03214 17.2259 4.09422C17.3586 4.1563 17.476 4.24677 17.5699 4.35924C17.6638 4.47171 17.7318 4.60343 17.7691 4.74509C17.8065 4.88674 17.8122 5.03487 17.786 5.179L16 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4L10 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15H15C15.7956 15 16.5587 15.3161 17.1213 15.8787C17.6839 16.4413 18 17.2044 18 18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20V18C8 17.2044 8.31607 16.4413 8.87868 15.8787C9.44129 15.3161 10.2044 15 11 15Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V3H14V4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 18V18.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83689">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
