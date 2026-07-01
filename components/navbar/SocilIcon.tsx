import Image from "next/image";
import Facebook from "../../public/facebook.png";
import github from "../../public/github.png";
import Inatragram from "../../public/Instagram.webp";
import linkedIn from "../../public/linkedin.webp";

function SocialIcon() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 ">
      <div className="border border-gray-300 bg-[#3b5998] rounded-md p-2 ">
        <Image src={Facebook} alt="Facebook" width={24} height={24} />
      </div>
      <div className="border border-gray-300 bg-[#0077b5] rounded-md p-2 ">
        <Image src={linkedIn} alt="LinkedIn" width={24} height={24} />
      </div>
      <div className="border border-gray-300 bg-[#24292e] rounded-md p-2 ">
        <Image src={github} alt="GitHub" width={24} height={24} />
      </div>
      <div className="border border-gray-300 bg-[#e1306c] rounded-md p-2 ">
        <Image src={Inatragram} alt="Instagram" width={24} height={24} />
      </div>
    </div>
  );
}

export default SocialIcon;
