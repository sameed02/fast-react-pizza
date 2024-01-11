import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton.jsx';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton
        to="-1"
        className=" text-sm text-blue-500 hover:text-blue-500 hover:underline"
      >
        &larr; Go back
      </LinkButton>
    </div>
  );
}

export default Error;
