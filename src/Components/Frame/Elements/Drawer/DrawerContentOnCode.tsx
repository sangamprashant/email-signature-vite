import { useAppContext } from '../../../../context'
import Code_1 from './Code_1'

const DrawerContentOnCode = () => {
    const { website } = useAppContext()

    //if code is from 1-7 the no repeat
    // from 8-19 may have duplicate so the wil be diffrenciated from index

    const render = () => {
        switch (website.appPartControls.selectedCode) {
            case 1:
                return <Code_1 />
            case 2:
                return <div>Code 2</div>
            case 3:
                return <div>Code 3</div>
        }
    }
    return (
        <div>
            {render()}
        </div>
    )
}

export default DrawerContentOnCode

