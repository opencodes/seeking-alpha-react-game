export type cellData = 1 | 0;
export type rowData = number[];
export interface CellMetadata {
    val: number
    x: number,
    y: number,
    liveNeighbour: any[]
}