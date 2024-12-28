import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2'
import Card3 from '../Cards/Card3'
import Card4 from '../Cards/Card4'
import Card5 from '../Cards/Card5'
import Card6 from '../Cards/Card6'

const Cards = () => {
  return (
    <div className='hidden-on-phone'>
      <div className="relative min-h-screen bg-[#14072b] flex">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <Card1 />
        <div>
          <Card2 />
          <Card3 />
        </div>
      </div>
      <div className="relative min-h-screen bg-[#14072b] flex mt-[-250px]">
        <div>
          <Card4 />
          <Card5 />
        </div>
        <Card6 />
      </div>
    </div>
  )
}

export default Cards
