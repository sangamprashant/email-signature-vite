import { useAppContext } from '../../../../context'
import Code_1 from './Code_1'

const DrawerContentOnCode = () => {
    const { website } = useAppContext()

    //if code is from 1-7 the no repeat
    // from 8-19 may have duplicate so the wil be diffrenciated from index

    return (
        <div>
            <Code_1 />
        
        </div>
    )
}

export default DrawerContentOnCode

