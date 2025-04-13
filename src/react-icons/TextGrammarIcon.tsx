import React from "react";

export const TextGrammarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61826)">
<path d="M14 9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12C17.7956 12 18.5587 11.6839 19.1213 11.1213C19.6839 10.5587 20 9.79565 20 9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.5587 6.31607 17.7956 6 17 6C16.2044 6 15.4413 6.31607 14.8787 6.87868C14.3161 7.44129 14 8.20435 14 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V7C4 6.60603 4.0776 6.21593 4.22836 5.85195C4.37913 5.48797 4.6001 5.15726 4.87868 4.87868C5.15726 4.6001 5.48797 4.37913 5.85195 4.22836C6.21593 4.0776 6.60603 4 7 4C7.39397 4 7.78407 4.0776 8.14805 4.22836C8.51203 4.37913 8.84274 4.6001 9.12132 4.87868C9.3999 5.15726 9.62087 5.48797 9.77164 5.85195C9.9224 6.21593 10 6.60603 10 7V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20L16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61826">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
