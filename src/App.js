
import TopBar from './Comp/TopBar';
import SideBar from './Comp/SideBar';
import ServerBar from './Comp/ServerBar';
import RightBar from './Comp/RightBar';

function App() {
  return (
    <div className="flex bg-gray-700 w-screen h-screen">
      <TopBar/>
      <SideBar/>
      <ServerBar/>
      <RightBar/>
    </div>
  );
}

export default App;
