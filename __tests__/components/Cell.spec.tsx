import { render } from "@testing-library/react"
import Cell from '../../src/app/components/Cell'

describe('should render Cell component', () => { 
    it('should render Cell component for live true', ()=>{
        const props = {
            live:true
        }
        render(<Cell {...props}/>)
    })
    it('should render Cell component for live false', ()=>{
        const props = {
            live:false
        }
        render(<Cell {...props}/>)
    })
 })