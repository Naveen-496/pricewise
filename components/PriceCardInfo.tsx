import Image from "next/image";

type Props = { 
  title: string;
  value: string;
  borderColor: string;
  iconSrc: string;
}

const PriceCardInfo = ( {title, value, borderColor, iconSrc}: Props) => {
  return (
    <div className={`price-info_card border-l-[${borderColor}]`}>
      <p className="text-base text-black-100">{title}</p>

      <div className="flex gap-1">
         <Image 
         src={iconSrc}
         alt={title}
         width={24}
         height={24}
         />
         <p className="text-2xl font-bold text-secondary">{value}</p>
      </div>

    </div>
  )
}

export default PriceCardInfo