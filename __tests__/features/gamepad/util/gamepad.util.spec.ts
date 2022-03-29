import { applyTheRule, getLiveNeighbours, newValAfterRule, } from '../../../../src/app/features/gamepad/util/gamepad.util'
import { gameSample1 } from "../sample.data"


describe('should check utill function', () => {
    it('should getLiveNeighbours function return data properly', () => {
        const result = getLiveNeighbours(2, 2, gameSample1);
        expect(result.length).toBe(2)
    })
    it('should newValAfterRule function return data properly', () => {
        const neighbours = getLiveNeighbours(2, 2, gameSample1);
        const result = newValAfterRule(1, neighbours);
        expect(result).toBe(1)
    })
    it('should applyTheRule function return data properly', () => {
        const result = applyTheRule(gameSample1);
        expect(result[1][2]).toBe(1)
    })
})
 
 

