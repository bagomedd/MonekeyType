import { Clock, Wrench, Zen, Quotes, Words } from "@icons/SvgAll";
export function ModePanel() {
    return (
        <div className="mode-panel-layout">
            <div className="mode-panel">
                <button className="mode time">
                    <Clock className="svg  " />
                    <span className="text"> time </span>
                </button>
                <button className="mode time words">
                    <Words className="svg  " />
                    <span className="text "> words </span>
                </button>
                <button className="mode quotes">
                    <Quotes className="svg  " />
                    <span className="text  "> quotes </span>
                </button>
                <button className="mode zen choosen">
                    <Zen className="svg" />
                    <span className="text"> zen </span>
                </button>
                <button className="mode custom">
                    <Wrench className="svg  " />
                    <span className="text"> custom  </span>
                </button>
            </div>
        </div>
    )
}