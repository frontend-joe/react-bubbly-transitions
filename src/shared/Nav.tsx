import { BubblyLink } from "../library/src";

const MyBubblyLink = ({ to = "", text = "" }) => (
  <BubblyLink to={to} colorStart="#8f44fd" colorEnd="#ffffff">
    {text}
  </BubblyLink>
);

export const Nav = () => (
  <nav className="animate-in" style={{ animationDelay: "800ms" }}>
    <MyBubblyLink to="/" text="Docs" />
    <MyBubblyLink to="/about" text="About" />
    <MyBubblyLink to="/contact" text="Contact" />
  </nav>
);
