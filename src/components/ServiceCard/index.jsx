import NextImage from '../NextImage'
const ServiceCard = ({item}) => {
  return (
    <div className='px-[32px] py-[26px] bg-[#fff] pb-[41px]'>
         <span className='icon w-[69px] h-[69px] rounded-full bg-[#F0F0F0] flex items-center justify-center'>
             <NextImage src={item.icon} width={24} height={24}/>
         </span>
         <h2 className='text-[23px] font-medium ttl mt-[68px] leading-[1.4] mb-[0] max-w-[80%]'>{item.title}</h2>
    </div>
  )
}
export default ServiceCard;