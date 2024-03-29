import CardCart from "@component/Card/CardCart";
import EachRender from "@lib/EachRender";
import CartType from "@type/cart.type";

const ListCart = ({ carts }: { carts: CartType[] }) => {
  return (
    <div id="list__cart" className="container-padding">
      <EachRender
        of={carts}
        render={(cart: CartType) => (
          <CardCart
            key={cart.id}
            id={cart.id}
            image={cart.image}
            title={cart.title}
            price={cart.price}
          />
        )}
      />
    </div>
  );
};

export default ListCart;
