import "../styles/CreditCard.css";

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    return (
      <div className="CC">
       <div>{type}</div>
       <div>{number}</div>
       <div>
        <div><p>Expires</p>{expirationMonth} {expirationYear}</div>
       </div>
      </div>
    );
  }

export default CreditCard;