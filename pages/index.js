import Link from "next/link";
import Image from "next/image";
const Index = () => {
  const my = [
    { v: "car", p: "surafel" },
    { v: "airplane", p: "surafel" },
    { v: "boat", p: "surafel" },
  ];
  return (
    <div>
      <h1>Home page</h1>
      <Image
        src="/images/ubuntu.png"
        width={500}
        height={500}
        alt="Picture of the author"
        // layout="fill"
        objectFit="cover"
        quality={100}
      />
      {my.map((vehicle) => (
        <div>
          {/* <Link as={`${vehicle.v}/${vehicle.p}`} href="/[vehicle]/[person]">
            <a>Navigate to my {vehicle.v}</a>
          </Link> */}
          <Link
            href={{
              pathname: "/[vehicle]/[person]",
              query: { vehicle: vehicle.v, person: vehicle.p },
            }}
          >
            <a>Navigate to my {vehicle.v}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Index;
