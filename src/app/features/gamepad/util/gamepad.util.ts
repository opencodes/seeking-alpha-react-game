import { CellMetadata, rowData } from "../gamepad.interface";

export const getLiveNeighbours = (x: number, y: number, data: any[][]): any[] => {
    const neighbours = [];
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (i >= 0 && j >= 0 && i < data.length && j < data.length && !(x === i && y === j)) {
                if (data[i][j] === 1) {
                    neighbours.push({
                        x: i,
                        y: j,
                        val: 1
                    })
                }
            }
        }
    }
    return neighbours;
}
export const newValAfterRule = (val: number, neighbours: any[]) => {
    const liveNeighbourCount = neighbours.length
    // Any live cell with fewer than two live neighbours dies (underpopulation).
    if (liveNeighbourCount < 2 && val === 1) {
        return 0;
    }
    // Any live cell with two or three live neighbours lives on to the next generation.
    if ((liveNeighbourCount === 2 || liveNeighbourCount === 2) && val === 1) {
        return 1;
    }
    // Any live cell with more than three live neighbours dies (overcrowding).
    if (liveNeighbourCount > 3 && val === 1) {
        return 0;
    }
    // Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
    if (liveNeighbourCount === 3 && val === 0) {
        return 1;
    }
    return 0;
}

export const regeneratedata  = (cellMetadata:{[key:string]:CellMetadata}, size:number):rowData[] => { 
    const data:rowData[] = [];
    Object.keys(cellMetadata).forEach((key:string)=>{
        const item = cellMetadata[key];
        if (!data[item.x]) {
            data[item.x] = []
        }
        data[item.x][item.y] = item.val;
    })
    return data;
 }

export const applyTheRule = (data: rowData[]): rowData[] => {
    const cellMetadata: {[key:string]:CellMetadata} = {
    }
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const liveNeighbours = getLiveNeighbours(i, j, data);
            cellMetadata[`${i}${j}`] = {
                val: newValAfterRule(cell, liveNeighbours),
                x: i,
                y: j,
                liveNeighbour: liveNeighbours
            }
        }
    }
    return regeneratedata(cellMetadata, data.length);
}


