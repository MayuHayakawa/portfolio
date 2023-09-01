import { myToolkits } from '../constants/index';

const Toolkit = () => {
  return (
    <section>
      <div className="section-container">
        <h1 className="section-title">Tool kit &#x1f4bb;</h1>
        <div className='my-8 px-60 max-md:px-40 max-sm:px-8 grid grid-cols-5 gap-2'>
          {myToolkits.map((tool) => (
            <div
              key={tool.label}
              className="flex flex-col items-center"
            >
              <div className="text-5xl max-sm:text-3xl">{tool.icon}</div>
              <div className="text-primary-500 text-sm max-sm:text-xs">{tool.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toolkit;