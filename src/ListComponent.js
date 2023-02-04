import { useCallback, useRef, useState } from "react";





function List(){
    console.log('RENDER List');
    const items = [
        { id: 0, title: 'aaa'},
        { id: 1, title: 'bbb'},
        { id: 2, title: 'ccc'},
    ];

    return (
        <>
            <h1>List Component</h1>
            {
                items.map((item, index) => (
                    <ListItem key={index} item={item}/>
                ))
            }
        </>
    )
}



function ListItem({item}){
    console.log('RENDER ListItem');
    const [state, setState] = useState(null);
    const [, setRerender] = useState();

    const rerender = () => {
        setRerender({});
    }

    const handleClickItem = useCallback((e) => {
        console.log('click', e.target.innerHTML);
    }, []);
    /*
    const handleClickItem = (e) => {
        console.log('click', e.target.innerHTML);
    };
    */
//    console.log(state);


    if(state !== handleClickItem){
        setState(() => {
            return handleClickItem;
        });
        console.log('not equals');
    }else{
        console.log('equals');
    }


    return (
        <>
            <div onClick={handleClickItem} key={item.id}>{item.title}</div>
            <button onClick={rerender}>R</button>
        </>
    )
}


function LoggerComponent(WrappedComponent){
    console.log('RENDER LoggerComponent');
    return WrappedComponent;
}


const ListComponent = LoggerComponent(List);
export default ListComponent;