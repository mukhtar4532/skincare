export default function Hero() {
  return (
    <div id="hero">
      <div className="div1">
        <p>
          Transform your skincare routine with premium products that restore,
          protect, and enhance your nautural glow every day.
        </p>
        <div className="headDiv">
          <h1>
            <span className="px-5">Glowwww</span> Naturally
          </h1>
        </div>
        <img src="./src/assets/prodImg1.svg" alt="Image Not Found" />
      </div>

      <div className="div2">
        <div className="imgDiv">
          <img src="./src/assets/mainImg1.svg" alt="Image Not Found" />

          <div className="imgDiv1">
            <img src="./src/assets/prodImg1.svg" alt="Image Not Found" />
            <p>While giving you an invigorating cleansing experience.</p>
          </div>
        </div>
        <div className="headDiv2">
          <h1>skincare</h1>
        </div>
        <button className="shopBtn">Shop Now</button>
      </div>
    </div>
  );
}
