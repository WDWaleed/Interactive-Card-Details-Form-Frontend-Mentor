const Cards = ({ name, cardNumber, month, year, CVC }) => {
  return (
    <section className="bg-main-mobile w-[375px] lg:bg-main-desktop bg h-[240px] mx-auto relative ">
      <img
        src="/public/images/bg-card-back.png"
        alt="Backside of Card"
        className="w-[300px] aspect-[1.83/1] absolute top-8 right-4"
      />
      <img
        src="/public/images/bg-card-front.png"
        alt="Frontside of Card"
        className="w-[300px] aspect-[1.83/1] absolute -bottom-12 left-4 shadow-fxl"
      />
      <p
        id="cardNumber"
        className="text-custom text-LightGrayishViolet absolute left-10 bottom-4 tracking-widest font-medium"
      >
        {cardNumber ? cardNumber : "0000 0000 0000 0000"}
      </p>

      <p
        id="cardholder-name"
        className="text-sm text-LightGrayishViolet absolute left-10 -bottom-8 font-medium"
      >
        {name ? name : "WDWaleed"}
      </p>

      <p
        id="expiry-date"
        className="text-sm text-LightGrayishViolet absolute right-20 -bottom-8 font-medium"
      >
        {month && year ? `${month}/${year}` : "00/00"}
      </p>

      <p
        id="cvc"
        className="text-sm text-LightGrayishViolet absolute right-14 top-[6.4rem] font-medium"
      >
        {CVC ? CVC : "000 "}
      </p>
    </section>
  );
};
export default Cards;
