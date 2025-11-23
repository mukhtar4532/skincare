import { navData, navIcon } from "@/assets/assets";

export default function Navbar() {
  return (
    <div id="nav">
      <h1>Skincare</h1>
      <div className="navData">
        {navData.map((data) => (
          <p>{data}</p>
        ))}
      </div>
      <div className="navIcon">
        {navIcon.map((icon) => (
          <img src={icon} alt="Icon" />
        ))}
      </div>
    </div>
  );
}
