import { useState } from "react";

function getData(maxCount, maxPow){
    const arr = []
  
    for(let i=1; i<=maxCount; i++){
        let row = []
        for(let p=1; p<=maxPow; p++){
            row.push( Math.pow(i, p) );
        }
        arr.push(row);
    }
  
    return arr;
  }

function HeaderRow({maxPow}){
    const cells = [];
    for(let i=1; i<=maxPow; i++){
        cells.push(
            <th>
                ^{i}
            </th>
        );
    }
    return <tr>{cells}</tr>
}

function Row({ record }){
    return (
        <tr>
            {
                Object.values(record).
                map((value, i) => {
                    return <td key={i}>{value}</td>
                })
            }
        </tr>
    )
}

export function HeavyComponent({maxCount, maxPow}){
    
    const [data, setData] = useState(() => {
        console.log('useState initialization');
        return getData(maxCount, maxPow);
    });

    const [trigger, setTrigger] = useState();
    const rerender = () => setTrigger({});

    const removeFirst = () => {
        setData( prevValue => {
            const [, ...rest] = prevValue;
            return rest;
        });
    }

    console.log('HeavyComponent has been rendered');

    return (
        <>
            <h2>HeavyComponent</h2>
            <button onClick={removeFirst}>Remove First</button>
            <button onClick={rerender}>Rerender</button>
            <table border={1}>
                <thead>
                    <HeaderRow maxPow={maxPow}/>
                </thead>
                <tbody>
                    {
                    data.map((record) => {
                        //console.log(record)
                        return <Row record={record}/>
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

