import './App.css';
import AddUsers from './components/AddUser';
import User from './components/User';
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <AddUsers />
      <User />
    </div>
  );
}

export default App;
