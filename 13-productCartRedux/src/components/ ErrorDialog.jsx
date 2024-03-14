import PropTypes from 'prop-types';
import { CircleX } from 'lucide-react';
export default function ErrorDialog({ message }) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 p-4 fixed top-20 right-5 bg-red-200"
    >
      <div className="flex items-start gap-4">
        <span className="text-red-600">
          <CircleX />
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-red-900">{message}</strong>

          <p className="mt-1 text-sm text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
}

ErrorDialog.propTypes = {
  message: PropTypes.string.isRequired,
};
