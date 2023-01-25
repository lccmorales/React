import PropTypes from 'prop-types';

export const Button = ({ description, isLoading, action }) => {
  return (
    <button className='btn btn-primary' disabled={ isLoading } onClick={ action }>
      { description }
    </button>
  );
};

Button.propTypes = {
  description: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};
