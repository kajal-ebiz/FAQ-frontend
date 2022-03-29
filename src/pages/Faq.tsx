import { useEffect, useState } from 'react'
import message_icon_blue from '../assets/images/message_icon_blue.png'
import message_icon_green from '../assets/images/message_icon_green.png'
import { getFaq } from '../services/faq'
import FaqCard from '../components/FaqCard'

interface FaqAttributes {
  id: number
  question: string
  answer: string
  createdAt?: Date
  updatedAt?: Date
}

const Faq = () => {
  const [faqData, setFaqData] = useState<FaqAttributes[]>([])
  const [searchText, setSearchText] = useState<string>()
  const [searchLoader, setSearchLoader] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async (data?: string) => {
    try {
      setSearchLoader(true)
      const res = await getFaq({ filter: data })
      setSearchLoader(false)
      if (res.data.response_type === 'success') {
        const tempFaqData: FaqAttributes[] = [...res.data.data]
        setFaqData(tempFaqData)
      }
    } catch (e) {
      setSearchLoader(false)
    }
  }

  const searchFunction = async () => {
    getData(searchText)
  }

  return (
    <div className='faq-page-wrapper pb-[50px]'>
      <div className='top-banner bg-[#f7fbfe] text-center pt-[100px] pr-[15px] pb-[100px] pl-[15px] w-full overflow-hidden relative'>
        <div className='inner-wrapper w-[800px] max-w-full ml-[auto] mr-[auto]'>
          <img
            className='img-icon img-1 absolute top-[10%] left-[2%] w-[70px]'
            src={message_icon_blue}
            alt='message_icon_blue'
          />
          <img
            className='img-icon img-2 absolute top-[32%] left-[12%] w-[90px]'
            src={message_icon_green}
            alt='message_icon_green'
          />
          <img
            className='img-icon img-3 absolute top-[73%] left-[5%] w-[70px]'
            src={message_icon_green}
            alt='message_icon_green'
          />
          <img
            className='img-icon img-4 absolute top-[10%] right-[2%] w-[90px]'
            src={message_icon_green}
            alt='message_icon_green'
          />
          <img
            className='img-icon img-5 absolute top-[53%] left-[24%] w-[70px]'
            src={message_icon_blue}
            alt='message_icon_blue'
          />
          <img
            className='img-icon img-6 absolute top-[32%] right-[12%] w-[90px]'
            src={message_icon_blue}
            alt='message_icon_blue'
          />
          <img
            className='img-icon img-7 absolute top-[73%] right-[5%] w-[70px]'
            src={message_icon_blue}
            alt='message_icon_blue'
          />
          <img
            className='img-icon img-8 absolute top-[53%] right-[24%] w-[70px]'
            src={message_icon_green}
            alt='message_icon_green'
          />
          <h1 className='main_title mb-[10px] text-[40px] relative z-[2]'>Frequently Asked Question</h1>
          <p className='text-[16px] text-[grey] leading-[26px] relative z-[2]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className='search-box w-[600px] relative ml-[auto] mr-[auto] mt-[-32px]'>
        <input
          type='search'
          name='search'
          placeholder='Search you question here...'
          className='search-input w-full pt-[20px] pr-[140px] pb-[20px] pl-[56px] text-[#000] text-[16px] rounded-[7px] border border-solid border-[#5568fe33] '
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type='submit'
          name=''
          className={`search-btn flex items-center justify-center bg-[#5568fe] pt-[12px] pb-[12px] pl-[30px] pr-[30px] absolute right-[8px] text-[#fff] rounded-[7px] border border-solid border-[#5568fe] text-[16px] font-medium tracking-[1px] cursor-poinrter hover:bg-[#3145e1] hover:border hover:border-solid hover:border-[#3145e1] ${
            searchLoader ? 'search-loader' : ''
          }`}
          disabled={searchLoader}
          onClick={(e) => searchFunction()}
        >
          <div className='process mr-[10px]'></div>
          Search
        </button>
      </div>

      <div className='faq-cn-wrapper mt-[80px]'>
        <div className='container w-[930px] ml-[auto] mr-[auto] pl-[15px] pr-[15px] max-w-full'>
          {faqData &&
            faqData.length > 0 &&
            faqData.map((faq: FaqAttributes) => {
              return <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Faq
