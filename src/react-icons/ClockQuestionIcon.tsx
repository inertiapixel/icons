import React from "react";

export const ClockQuestionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78456)">
<path d="M20.975 11.3296C20.834 9.44129 20.1009 7.64557 18.8802 6.198C17.6594 4.75043 16.0132 3.72476 14.1758 3.26698C12.3384 2.80919 10.4034 2.9426 8.64624 3.64822C6.88905 4.35384 5.39918 5.59573 4.38867 7.19713C3.37816 8.79854 2.89849 10.6779 3.01793 12.5677C3.13736 14.4575 3.84982 16.2615 5.05391 17.7229C6.258 19.1844 7.89236 20.2288 9.72441 20.7076C11.5565 21.1863 13.4929 21.0751 15.258 20.3896"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.9998C19.4483 18.9983 19.8832 18.8466 20.235 18.5687C20.5868 18.2909 20.8352 17.903 20.9406 17.4673C21.0459 17.0315 21.0019 16.5731 20.8158 16.1652C20.6297 15.7574 20.3122 15.4238 19.914 15.2178C19.5162 15.014 19.0611 14.9508 18.6228 15.0385C18.1845 15.1262 17.7888 15.3596 17.5 15.7008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78456">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
