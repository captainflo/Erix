import '../../css/strain.css';

const strain = ({ strain }) => {
  return (
    <div className="card-strain">
      <div className="card-strain-image">
        <img src={strain.image} alt="strain-photo" />
      </div>
      <div className="strain-type">{strain.type}</div>
      <div className="content-strain">
        <h4>{strain.name}</h4>
        <p>{strain.subtitle}</p>
      </div>
    </div>
  );
};

export default strain;
