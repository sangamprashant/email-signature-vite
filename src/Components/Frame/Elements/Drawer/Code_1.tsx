import { useState } from 'react'
import { AppContentImage } from '../../../../assets/images'
import { ImageRender } from '../Templates/ReuseComponents/AppContentMouseEvent'


const Code_1 = () => {
    const [active, setActive] = useState(0)

    const Buttons = [
        {
            title: "Signature", component: <ImageRender link={AppContentImage["name"]} />
        },
        {
            title: "Signoff", component: <ImageRender link={AppContentImage["kind-regards"]} />
        },
        {
            title: "Draw", component: <ImageRender link={AppContentImage["name"]} />
        },
    ]

    return (
        <>
        <h5 className='text-3xl bold'>SignOff</h5>
            <div className="grid grid-cols-3 gap-2">
                {Buttons.map((b, i) => (
                    <div key={i} className='flex flex-col'>
                        <p className='text-gray-400 mb-1'>{b.title}</p>
                        <button onClick={() => setActive(i)}>
                            <div className={`border p-1 rounded border-${active !== i ? "gray-200" : "blue-400"} h-16 flex justify-center items-center`}>{b.component}</div>
                        </button>
                    </div>
                ))}
            </div>
            {active}
        </>
    )
}

export default Code_1
