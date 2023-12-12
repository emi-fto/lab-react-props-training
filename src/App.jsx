import "./styles/App.css";
import IdCard from "./components/IdCard.jsx"
import Greetings from "./components/Greetings.jsx"
import CreditCard from "./components/CreditCard.jsx"

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
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />      
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
    </div>
  );
}

export default App;
