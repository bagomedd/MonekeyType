interface AboutProps {
    className: string;
}
export default function About({ className }: AboutProps) {
    return (
        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="inherit" height="inherit" viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M207 462 c-33 -36 -8 -92 40 -92 25 0 53 30 53 57 0 46 -62 69 -93
35z"/>
                <path d="M140 300 c0 -38 2 -40 30 -40 l30 0 0 -80 0 -80 -30 0 c-28 0 -30 -2
-30 -40 l0 -40 110 0 110 0 0 40 c0 38 -2 40 -30 40 l-30 0 0 120 0 120 -80 0
-80 0 0 -40z"/>
            </g>
        </svg>


    );
}