import NextLink from '../NextLink'
import NextImage from '../NextImage'
const WorkCard = ({item}) => {
  return (
    <>
    <NextLink href={item?.url} target='_blank' className='block'>
         <figure className='mb-[34px] relative pb-[100%]'>
              <NextImage fill src={item.image} />
         </figure>
         <span className='mb-[10px] relative block font-medium before:absolute before:w-[5px] before:h-[5px] before:bg-[#000] before:left-0 before:top-[50%] before:translate-y-[-50%] pl-[12px]'>Website</span>
         <h3 className='ttl text-[22px] font-medium max-w-[350px]'>{item.title}</h3>
    </NextLink>
  
    </>
  )
}

export default WorkCard