import { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData().then(res => setData(res));
    }, []);

    return (
        <div>
            <h1>Velavan Agro</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;
