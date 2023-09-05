
import { jsx, Image } from 'theme-ui';
import { Link } from './link';
import logo from '../assets/images/logo.png';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo.src} alt="ravelo" style={{ width: "90px", height: "80px" }} />
      {/* <h4>RAVELO</h4> */}
    </Link>
  );
}
