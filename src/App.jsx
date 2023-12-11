import "./styles/App.css";
import IdCard from "./components/IdCard.jsx"

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard 
      firstName="John" 
      lastName="Doe" 
      gender="male" 
      height="1.78m" 
      birth={new Date("1992-07-14")} 
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard 
      firstName="Obrien" 
      lastName="Delores" 
      gender="female" 
      height="1.72m" 
      birth={new Date("1988-05-11")} 
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
