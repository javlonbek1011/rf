// next
import Link from "next/link";
import otzif from "@/app/otzif/page";

// new type for props
interface HoverCompanyProps {
  isHoverCompany: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const HoverComapany: React.FC<HoverCompanyProps> = ({
  isHoverCompany,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`${isHoverCompany !== true ? "hidden" : "block"} absolute top-5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li className="rounded-[8px] border-2 bg-white p-3 text-[14px]">
          <Link href="../vocation">Вакансии</Link>
          <br />
          <Link href="../otzif">Отзывы</Link>
          <br />
          <Link href="../sertification">Сертификаты</Link>
          <br />
         
        </li>
      </ul>
    </div>
  );
};

export default HoverComapany;
