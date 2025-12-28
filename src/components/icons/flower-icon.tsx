interface IconProps extends React.SVGProps<SVGSVGElement> {
    type?: 'primary' | 'white'
}

export default function FlowerIcon({
    type = "primary",
    ...props
}: IconProps) {
    if (type === "white") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" {...props} >
                <g filter="url(#filter0_ii_210_1312)">
                    <mask id="mask0_210_1312" className="mask-type-alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="60" height="60">
                        <path
                            d="M30 0C31.9491 0 33.5293 7.30813 33.5293 16.3232C33.5293 18.3253 33.4503 20.2433 33.3076 22.0156C34.4599 20.6615 35.7602 19.2496 37.1758 17.834C43.5505 11.4592 49.8356 7.40889 51.2139 8.78711C52.592 10.1654 48.5417 16.4505 42.167 22.8252C40.7519 24.2403 39.34 25.5394 37.9863 26.6914C39.7582 26.5489 41.6755 26.4707 43.6768 26.4707C52.6921 26.4707 60 28.0508 60 30C60 31.9492 52.6921 33.5293 43.6768 33.5293C41.6755 33.5293 39.7582 33.4501 37.9863 33.3076C39.3401 34.4598 40.7518 35.7596 42.167 37.1748C48.5416 43.5495 52.5918 49.8343 51.2139 51.2129C49.8355 52.5912 43.5506 48.5409 37.1758 42.166C35.7602 40.7504 34.46 39.3385 33.3076 37.9844C33.4503 39.7567 33.5293 41.6747 33.5293 43.6768C33.5293 52.6919 31.9491 60 30 60C28.051 59.9995 26.4707 52.6916 26.4707 43.6768C26.4707 41.6755 26.5498 39.7581 26.6924 37.9863C25.5405 39.3398 24.2411 40.7511 22.8262 42.166C16.4515 48.5407 10.1664 52.591 8.78809 51.2129C7.40987 49.8347 11.4593 43.5495 17.834 37.1748C19.2492 35.7596 20.6609 34.4597 22.0146 33.3076C20.2426 33.4502 18.3248 33.5293 16.3232 33.5293C7.30807 33.5292 0 31.9492 0 30C0 28.0508 7.30807 26.4708 16.3232 26.4707C18.3244 26.4707 20.2419 26.5489 22.0137 26.6914C20.6603 25.5395 19.2488 24.24 17.834 22.8252C11.4592 16.4504 7.40977 10.1654 8.78809 8.78711C10.1667 7.40914 16.4515 11.4593 22.8262 17.834C24.241 19.2489 25.5404 20.6602 26.6924 22.0137C26.5498 20.2419 26.4707 18.3245 26.4707 16.3232C26.4707 7.30843 28.051 0.000492435 30 0Z"
                            fill="#FEFEFE" />
                    </mask>
                    <g mask="url(#mask0_210_1312)">
                        <rect x="-5.39978" y="-11.4004" width="77.7" height="77.7" fill="#FEFEFE" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_ii_210_1312" x="-1.8" y="-1.8" width="63" height="63"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-1.8" dy="-1.8" />
                        <feGaussianBlur stdDeviation="1.2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_210_1312" />
                        <feColorMatrix in="SourceAlpha" type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1.8" dy="1.8" />
                        <feGaussianBlur stdDeviation="0.6" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow_210_1312"
                            result="effect2_innerShadow_210_1312" />
                    </filter>
                </defs>
            </svg>
        )
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
            <g filter="url(#filter0_ii_210_1150)">
                <mask id="mask0_210_1150" className="mask-type-alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                    width="40" height="40">
                    <path
                        d="M20 0C21.2994 0 22.3525 4.87265 22.3525 10.8828C22.3525 12.2187 22.2985 13.4982 22.2031 14.6807C22.972 13.7769 23.8393 12.8336 24.7842 11.8887C29.0334 7.63947 33.2232 4.93953 34.1426 5.85742C35.0614 6.77624 32.3612 10.967 28.1113 15.2168C27.1669 16.1613 26.2237 17.0273 25.3203 17.7959C26.5027 17.7007 27.7825 17.6475 29.1182 17.6475C35.1282 17.6475 40 18.7005 40 20C40 21.2995 35.1282 22.3525 29.1182 22.3525C27.7825 22.3525 26.5027 22.2983 25.3203 22.2031C26.2238 22.9719 27.1667 23.8386 28.1113 24.7832C32.3612 29.0331 35.0615 33.2237 34.1426 34.1426C33.2231 35.0605 29.0335 32.3605 24.7842 28.1113C23.8393 27.1665 22.9721 26.223 22.2031 25.3193C22.2985 26.5018 22.3525 27.7813 22.3525 29.1172C22.3525 35.1274 21.2994 40 20 40C18.7006 39.9999 17.6475 35.1273 17.6475 29.1172C17.6475 27.7817 17.7006 26.5025 17.7959 25.3203C17.0274 26.2236 16.1611 27.167 15.2168 28.1113C10.9674 32.3606 6.77755 35.0608 5.8584 34.1426C4.93958 33.2238 7.63982 29.033 11.8896 24.7832C12.8343 23.8386 13.7771 22.9719 14.6807 22.2031C13.4982 22.2984 12.2187 22.3525 10.8828 22.3525C4.87255 22.3525 0 21.2995 0 20C0 18.7005 4.87255 17.6475 10.8828 17.6475C12.2187 17.6475 13.4982 17.7007 14.6807 17.7959C13.7773 17.0272 12.8341 16.1612 11.8896 15.2168C7.63975 10.9669 4.93951 6.77631 5.8584 5.85742C6.77758 4.93905 10.9673 7.63927 15.2168 11.8887C16.1609 12.8328 17.0274 13.7757 17.7959 14.6787C17.7007 13.4968 17.6475 12.218 17.6475 10.8828C17.6475 4.87272 18.7006 0.000126138 20 0Z"
                        fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_210_1150)">
                    <rect x="-3.59998" y="-7.60004" width="51.8" height="51.8"
                        fill="url(#paint0_linear_210_1150)" />
                </g>
            </g>
            <defs>
                <filter id="filter0_ii_210_1150" x="-1.2" y="-1.2" width="42" height="42"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1.2" dy="-1.2" />
                    <feGaussianBlur stdDeviation="0.8" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_210_1150" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1.2" dy="1.2" />
                    <feGaussianBlur stdDeviation="0.4" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_innerShadow_210_1150"
                        result="effect2_innerShadow_210_1150" />
                </filter>
                <linearGradient id="paint0_linear_210_1150" x1="13.2" y1="6.59996" x2="32.9" y2="45.8"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#334B2C" />
                    <stop offset="1" stopColor="#9EB4AB" />
                </linearGradient>
            </defs>
        </svg>
    )
}