import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container">
        <a href="">
          <div className="">
            <div className="content">
              <div className="name">
                <h2>Pizza</h2>
              </div>
              <div className="description">
                <p>
                  Pão, Blend 130g, 2 fatias de queijo cheddar, Costela, 2 aneis
                  de cebola empanada, cebola crispy, maionese, molho bauer.
                </p>
              </div>
              <div className="price">
                <p>R$25</p>
              </div>
            </div>
            <div className="image">
              <Image
                src={"/image/pizza.jpg"}
                alt="Bauer Costela"
                width={100}
                height={100}
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
