import { descriptionData } from "@/assets/assets";

export default function Description() {
  return (
    <div id="description">
      <div className="para">
        <p>
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with advanced science, our
          collection ensures every skin type can achieve a radiant, healthy
          glow. Embrace your beauty with confidence every day. Experience the
          ultimate in skincare with our expertly formulated products, crafted to
          nourish, protect, and rejuvenate your skin.
        </p>
      </div>

      <div className="combine">
        <div className="left">
          <div className="left1">
            <button>
              <div></div>
              <p className="text-sm md:text-lg">Why Our Products</p>
            </button>
            <h2>your skin deserves the best care.</h2>
            <p className="subPara">
              Discover a curated collection of skincare products designed to
              rejuvenate, protect, and pamper your skin. Explore our rage
              crafted with love backed by science, and inspired by nature.
            </p>
          </div>

          <div className="left2">
            {descriptionData.map((description) => (
              <div className="left2A">
                <p className="left2Ap">{description.srNo}</p>
                <div className="left2B">
                  <h2>{description.heading}</h2>
                  <p>{description.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="imgDiv">
            <img
              src="./src/assets/mainImg2.svg"
              alt="Image Not Found"
              className="mainImg2"
            />

            <div className="imgDiv1">
              <img
                src="./src/assets/mainImgBadge.svg"
                alt="Image Not Found"
                className="imgDiv1Icon"
              />
              <p>Best Skin Care Product Award Wining</p>
            </div>
          </div>
          <div className="sub">
            <p>since 2001</p>
            <p>learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
