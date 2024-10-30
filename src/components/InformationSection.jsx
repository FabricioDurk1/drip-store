
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const InformationSection = ({ title, informations = [] }) => {
  return (
    <div className="information-section">
      <h4>{title}</h4>
      <ul>
        {informations.length > 0 ? (
          informations.map((info, index) => (
            <li key={index}>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))
        ) : (
          <li>No information available</li>
        )}
      </ul>
    </div>
  );
};

// Definir o tipo de props esperado
InformationSection.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default InformationSection;



