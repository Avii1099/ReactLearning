import PropTypes from 'prop-types';

export default function ErrorDialog({ message }) {
  return (
    <div className="fixed top-20 right-5 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md">
      {message}
    </div>
  );
}

ErrorDialog.propTypes = {
  message: PropTypes.string.isRequired,
};
