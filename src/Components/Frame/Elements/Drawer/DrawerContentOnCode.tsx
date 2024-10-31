import { useAppContext } from '../../../../context'
import Code_05_Youtube from './Code_05_Youtube'
import Code_1 from './Code_1'
import Code_2_Disclaimer from './Code_2_Disclaimer'
import Code_3_Quote from './Code_3_Quote'
import Code_4_GreenFooter from './Code_4_GreenFooter'

const DrawerContentOnCode = () => {
    const { website } = useAppContext()

    const render = () => {
        switch (website.appPartControls.selectedCode) {
            case 1: return <Code_1 />
            case 2: return <Code_2_Disclaimer />
            case 3: return <Code_3_Quote />
            case 4: return <Code_4_GreenFooter />
            case 5: return <Code_05_Youtube />
            default: return <>No Template contact developers</>
        }
    }
    return (
        <>
            {render()}
        </>
    )
}

export default DrawerContentOnCode

