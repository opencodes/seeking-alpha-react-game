import React, { useEffect, useState } from 'react';
import GamePad from './app/features/gamepad/GamePad';
import { gameSample1 } from './sample.data';

function App() {
  const [data, setData] = useState<number[][] | null>(null);

  useEffect(() => {
    setData(gameSample1)
  }, [])

  return (
    <div className="App">
      {
        data ? <GamePad data={data} /> : 'No Data '
      }
    </div>
  );
}

export default App;
