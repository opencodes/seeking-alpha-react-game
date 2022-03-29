import { render } from "@testing-library/react"
import GamePad from '../../../src/app/features/gamepad/GamePad'
import { gameSample1 } from "./sample.data"

describe('should render GamePad component', () => { 
    it('should render GamePad component', ()=>{
        const props = {
            data:gameSample1
        }
        render(<GamePad {...props}/>)
    }) 
 })