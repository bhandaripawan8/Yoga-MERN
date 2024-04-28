import WhyChooseContent from './WhyChooseContent'
import WhyChooseLogo from './WhyChooseLogo'

const WhyChoose = () => {
  return (
    <div className='mt-[50px] grid grid-cols-4'>
      <div className='col-span-3'>
      <WhyChooseContent/>
      </div>
      <div className='col-span-1'>   
      <WhyChooseLogo/>
      </div>
    </div>
  )
}

export default WhyChoose