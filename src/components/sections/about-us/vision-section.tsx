export default function VisionSection() {
    return (
        <div className="relative bg-white">
            <div
                className="absolute inset-0 blur-3xl"
                style={{
                    background: 'radial-gradient(circle at center, var(--secondary) 0%, transparent 70%)'
                }}
            />
            <div className="relative container flex flex-col items-center text-primary py-20">
                <div className="flex flex-col w-full gap-2">
                    <h1 className="font-medium">We believe</h1>
                    <h1 className="uppercase">Great Projects</h1>
                </div>
                <div className="flex flex-col w-full items-end gap-2">
                    <h1 className="font-medium">are built through</h1>
                    <h1 className="underline">strong collaboration.</h1>
                </div>

                <h1 className="uppercase text-7xl py-20">Our Vision Is</h1>

                <div className="relative w-3/4 aspect-2/1 flex items-center justify-center">
                    <svg 
                        className="absolute inset-0 w-full h-full" 
                        viewBox="0 0 800 400"
                        preserveAspectRatio="none"
                    >
                        <ellipse
                            cx="400"
                            cy="200"
                            rx="390"
                            ry="190"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                        />
                    </svg>
                
                    <div className="relative z-10 px-24 py-10">
                        <h1 className="font-medium text-center">
                            To create a network of <u>trusted partners</u> that share the same goal, delivering <u>outstanding result</u> with integrity and efficiency.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
