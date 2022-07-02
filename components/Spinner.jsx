import Image from "next/image";
import spinner from "/public/images/spinner.gif";

export default function Spinner() {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src={spinner}
        alt="loading ..."
      />
    </>
  );
}
