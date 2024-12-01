import { Logo } from "@icons/SvgAll";

export function TopUI() {
    return (
        <header className="top-ui">

            <a className="logo-link">
                <Logo
                    className={"logo"}
                    fillColor={"#E2B714"}
                />
                <h1 className="logo-text"> monkeytype </h1>
            </a>
            <a className="button-link start-test">
                1234
            </a>
            <a className="button-link leaderboards">
                lorem100
            </a>
            <a className="button-link about">
                467
            </a>
            <a className="button-link settings">
                settings
            </a>


        </header>
    );
};