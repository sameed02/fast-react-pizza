import LinkButton from '../../ui/LinkButton.jsx';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className=" text-sm text-blue-500 hover:text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
