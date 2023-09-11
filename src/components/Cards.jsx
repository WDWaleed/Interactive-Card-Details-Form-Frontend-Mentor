

const Cards = ({ name, cardNumber, month, year, CVC }) => {
  return (
    <section className="bg-[url('/images/bg-main-mobile.png')] w-[375px] xl:bg-[url('/images/bg-main-desktop.png')] h-[240px] mx-auto relative xl:h-full xl:float-left xl:ml-0 xl:max-w-[483px] xl:basis-[483px] ">
      <div
        id="cardBack"
        className="w-[300px] aspect-[1.83/1] absolute top-8 right-4 shadow-2xl xl:top-[360px] xl:right-0 xl:translate-x-1/2"
      >
        <img src="images/bg-card-back.png" alt="Backside of Card" />
        <p
          id="cvc"
          className="text-sm text-LightGrayishViolet absolute right-8 top-[4.4rem] font-medium"
        >
          {CVC ? CVC : "000 "}
        </p>
      </div>
      <div
        id="cardFront"
        className="w-[300px] aspect-[1.83/1] absolute -bottom-12 left-4 shadow-2xl  xl:top-40 xl:left-full xl:-translate-x-2/3"
      >
        <img
          src="images/card-logo.svg"
          alt="logo"
          className="absolute top-4 left-5 w-[60px] h-[33px]"
        />
        <img src="images/bg-card-front.png" alt="Frontside of Card" />
        <p
          id="cardNumber"
          className="text-custom text-LightGrayishViolet absolute left-6 bottom-14 tracking-widest font-medium"
        >
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </p>

        <p
          id="cardholder-name"
          className="text-sm text-LightGrayishViolet absolute left-6 bottom-5 font-medium"
        >
          {name ? name : "WDWaleed"}
        </p>

        <p
          id="expiry-date"
          className="text-sm text-LightGrayishViolet absolute right-6 bottom-5 font-medium"
        >
          {month && year ? `${month}/${year}` : "00/00"}
        </p>
      </div>
    </section>
  );
};
export default Cards;
