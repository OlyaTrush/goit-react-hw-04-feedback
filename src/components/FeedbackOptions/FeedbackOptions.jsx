import PropTypes from 'prop-types';


 const FeedbackOptions = ({ options, clickFeedback}) => (
    <>
       {options.map(item => (
        <li key={item}>
          <button onClick={() => clickFeedback(item)}>
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        </li>
      ))}
    </>
)
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    clickFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };