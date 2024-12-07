import './App.css'
import { TopUI } from "./Components/Layout/TopUI";
import { ModePanel } from "./Components/Layout/ModePanel";
export function App() {
  return (
    <div className="layout">
      <TopUI />
      <ModePanel />
    </div>
  )
}


