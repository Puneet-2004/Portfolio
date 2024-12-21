interface CertificateCardProps {
    title: string;
    date: string;
  }
  
  const CertificateCard: React.FC<CertificateCardProps> = ({ title, date }) => {
    return (
      <div className="border p-4 rounded mb-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">{date}</p>
      </div>
    );
  };
  
  export default CertificateCard;
  