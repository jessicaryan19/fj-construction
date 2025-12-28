export default function ThreePointStarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="119" viewBox="0 0 119 119" fill="none" {...props}>
            <g opacity="0.5" filter="url(#filter0_ii_255_4550)">
                <mask id="mask0_255_4550" className="mask-type-alpha" maskUnits="userSpaceOnUse" x="21" y="25" width="60" height="67">
                    <path d="M73.7237 26.6094C75.5559 24.768 78.6649 26.4114 78.1754 28.9624L72.5632 58.2062C72.4878 58.599 72.503 59.0039 72.6075 59.3901L80.3869 88.1334C81.0655 90.6407 78.0878 92.5116 76.1233 90.8121L53.6035 71.33C53.301 71.0682 52.9428 70.8789 52.5561 70.7763L23.774 63.1418C21.2632 62.4759 21.1319 58.9616 23.5859 58.1101L51.7178 48.3485C52.0958 48.2173 52.4389 48.0018 52.721 47.7182L73.7237 26.6094Z" fill="white" />
                </mask>
                <g mask="url(#mask0_255_4550)">
                    <rect x="74.1187" y="124.204" width="98.2835" height="98.2835" transform="rotate(-152.14 74.1187 124.204)" fill="url(#paint0_linear_255_4550)" />
                </g>
            </g>
            <defs>
                <filter id="filter0_ii_255_4550" x="19.1836" y="23.1906" width="63.0568" height="70.0302" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-2.63259" dy="-2.63259" />
                    <feGaussianBlur stdDeviation="1.75506" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_255_4550" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2.63259" dy="2.63259" />
                    <feGaussianBlur stdDeviation="0.877531" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_innerShadow_255_4550" result="effect2_innerShadow_255_4550" />
                </filter>
                <linearGradient id="paint0_linear_255_4550" x1="149.148" y1="199.672" x2="67.0984" y2="143.29" gradientUnits="userSpaceOnUse">
                    <stop offset="0.00439468" stopColor="#334B2C" />
                    <stop offset="1" stopColor="#9EB4AB" />
                </linearGradient>
            </defs>
        </svg>
    )
}