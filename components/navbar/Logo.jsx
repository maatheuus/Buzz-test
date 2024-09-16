import { Frame } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="#" aria-label="home icon">
      <Frame />
    </Link>
  );
}

export default Logo;
