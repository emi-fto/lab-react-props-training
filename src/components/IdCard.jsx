import "../styles/IdCard.css";

function IdCard({firstName, lastName, gender, height, birth, picture}) {
  return (
    <div className="IdCard">
      <div>
      <img src={picture} alt="Student Picture"/>
      </div>
      <div className="pDiv">
      <p>
        <b>First name:</b> {firstName}
      </p>
      <p>
        <b>Last name:</b> {lastName}
      </p>
      <p>
        <b>Gender:</b> {gender}
      </p>
      <p>
        <b>Height:</b> {height}
      </p>
      <p>
        <b>Birth:</b> {birth.toDateString()}
      </p>
      <br />
      </div>
    </div>
  );
}

export default IdCard;