import "../styles/IdCard.css";

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="Student Picture"/>
      <div className="pDiv">
      <p>
        <b>First name:</b> {props.firstName}
      </p>
      <p>
        <b>Last name:</b> {props.lastName}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Height:</b> {props.height}
      </p>
      <p>
        <b>Birth:</b> {props.birth.toDateString()}
      </p>
      <br />
      </div>
    </div>
  );
}

export default IdCard;