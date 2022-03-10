const CertCard = ({ item }) => {
  return (
    <>
      <div className="cert-card">
        <img className="certificate-img" src={item.image} alt="certificate" />
        <p className="cert-name">{item.course}</p>
        <p className="web-name">{item.web}</p>
        <p className="year">{item.year}</p>
      </div>
    </>
  );
};

export default CertCard;
