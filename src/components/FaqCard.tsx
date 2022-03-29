import { useState } from 'react'

interface FaqCardAttributes {
  question: string
  answer: string
}

const FaqCard = ({ question, answer }: FaqCardAttributes) => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div
      className={`border border-solid border-[#e8e8e8] rounded-[20px] mb-[25px] bg-[#f9f9f9] relative faq-box ${
        toggle ? 'active' : ''
      }`}
    >
      <button className='close-btn w-[26px] h-[26px] border-0 bg-[#999] absolute top-[22px] right-[17px] rounded-full p-[0px] hidden'></button>
      <h2
        className='faq-title pt-[24px] pr-[52px] pb-[24px] pl-[25px] bg-[transparent] m-[0px] text-[22px] text-[#515151] relative cursor-pointer'
        onClick={(e) => setToggle(!toggle)}
      >
        {question}
      </h2>
      <div className='faq-content' style={{ display: toggle ? 'block' : 'none' }}>
        <div className='inner-wrapper pt-[0px] pr-[25px] pb-[20px] pl-[20px] text-[grey] leading-[26px] text-[16px]'>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}
export default FaqCard
