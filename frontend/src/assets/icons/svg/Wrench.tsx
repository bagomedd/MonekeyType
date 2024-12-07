interface WrenchProps {
    className: string;
    // fillColor: string;
}
export default function Wrench({ className, /*fillColor*/ }: WrenchProps) {
    return (

        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M342 550 c-43 -38 -44 -41 -40 -93 3 -53 3 -53 -67 -135 -50 -58 -77
-81 -93 -82 -35 0 -82 -52 -82 -90 0 -43 47 -90 90 -90 38 0 90 47 90 82 0 16
26 49 83 106 76 76 85 82 123 82 67 0 89 25 103 116 12 72 12 78 -7 97 -20 19
-20 19 -40 -26 -11 -25 -23 -55 -27 -66 -8 -25 -17 -26 -54 -6 -41 21 -43 37
-11 85 16 24 27 47 24 52 -12 19 -52 5 -92 -32z m-162 -370 c11 -11 20 -24 20
-30 0 -13 -37 -50 -50 -50 -13 0 -50 37 -50 50 0 6 9 19 20 30 11 11 25 20 30
20 6 0 19 -9 30 -20z"/>
            </g>
        </svg>


    );
};
