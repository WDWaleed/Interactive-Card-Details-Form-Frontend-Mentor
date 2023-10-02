const Cards = ({ name, cardNumber, month, year, CVC }) => {
  return (
    <section className="relative mx-auto h-[240px] w-[375px] bg-[url('/images/bg-main-mobile.png')] xl:float-left xl:ml-0 xl:h-full xl:max-w-[483px] xl:basis-[483px] xl:bg-[url('/images/bg-main-desktop.png')] ">
      <div
        id="cardBack"
        className=" absolute right-4 top-8 shadow-2xl xl:right-0 xl:top-[360px] xl:translate-x-1/2"
      >
        <img
          src="images/bg-card-back.png"
          alt="Backside of Card"
          className="aspect-[1.83/1] w-[300px]"
        />
        <p
          id="cvc"
          className="absolute right-8 top-[4.4rem] text-sm font-medium text-LightGrayishViolet"
        >
          {CVC ? CVC : "000 "}
        </p>
      </div>
      <div
        id="cardFront"
        className="absolute -bottom-12 left-4 aspect-[1.83/1] w-[300px] shadow-2xl xl:left-full xl:top-40 xl:-translate-x-2/3  "
      >
        <img
          src="images/card-logo.svg"
          alt="logo"
          className="absolute left-5 top-4 h-[33px] w-[60px]"
        />
        <img
          src="images/bg-card-front.png"
          alt="Frontside of Card"
          className="aspect-[1.83/1] w-[300px]"
        />
        <p
          id="cardNumber"
          className="absolute bottom-14 left-6 text-custom font-medium tracking-widest text-LightGrayishViolet"
        >
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </p>

        <p
          id="cardholder-name"
          className="absolute bottom-5 left-6 text-sm font-medium text-LightGrayishViolet"
        >
          {name ? name : "WDWaleed"}
        </p>

        <p
          id="expiry-date"
          className="absolute bottom-5 right-6 text-sm font-medium text-LightGrayishViolet"
        >
          {month && year ? `${month}/${year}` : "00/00"}
        </p>
      </div>
    </section>
  );
};
export default Cards;
