
interface ZenProps {
    className: string;
    // fillColor: string;
}
export default function Zen({ className, /*fillColor*/ }: ZenProps) {
    return (

        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90.000000 90.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M427 833 c-4 -3 -7 -51 -7 -106 l0 -100 -73 -86 c-232 -274 -287
-343 -287 -361 0 -11 9 -29 20 -40 19 -19 33 -20 370 -20 337 0 351 1 370 20
40 40 43 35 -267 401 -61 71 -73 92 -73 121 0 34 2 36 63 58 64 24 87 37 87
50 0 7 -166 70 -186 70 -6 0 -14 -3 -17 -7z m107 -362 c42 -49 76 -92 76 -95
0 -4 -23 5 -50 19 -47 24 -52 24 -80 10 -29 -15 -30 -15 -45 15 l-16 30 -50
-26 c-28 -14 -53 -24 -54 -22 -5 5 126 158 135 158 4 0 42 -40 84 -89z"/>
            </g>
        </svg>



    );
};
