import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Inside } from "./components/Inside";

function App() {
  return (
    <div className="App">
      <Header>
        <Inside />
      </Header>
      <SideBar />
    </div>
  );
}

export default App;
