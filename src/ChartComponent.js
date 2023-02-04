import { useRef, useState, memo } from "react";

export default function ChartComponent(){
    return <Node maxLevel={4} cellWidth={50} cellHeight={50} />
    /*
    const blockStyle = {
        width: 50,
        height: 100,
        background: 'yellow',
        border: '2px solid black',
        position: 'absolute',
        top: 10,
        left: 10
    }

    return (
        <>
            <h1>Chart Component</h1>
            <Node blockStyle={blockStyle} maxDepth={4} />
        </>
    )
    */
}

function Line({ width, left, top }){
    const style = {
        position: 'absolute',
        left,
        top,
        width,
        height: '0px',
        border: '1px dashed black',
    };
    return <div style={style}></div>;
}

const Node = memo(({
    level = 1,
    cellWidth,
    cellHeight,
    maxLevel,
    left = 50,
    top = 50,
}) => {
    const rendersCounter = useRef(0);
    const [borderColor, setBorderColor] = useState('black');
    const height = cellHeight * Math.pow(2, maxLevel - level);

    const style = {
        left,
        top,
        width: cellWidth,
        height,
        backgroundColor: 'yellow',
        position: 'absolute',
        border: `2px solid ${borderColor}`,
        borderRadius: 10,
        transition: 'all 500ms linear',
        zIndex: 100,
        color: 'black',
    };

    const onClick = (event) => {
        event.stopPropagation();
        setBorderColor({});
    }

    rendersCounter.current++;

    return (
        <div style={style} onClick={onClick}>
            {rendersCounter.current}
            {level < maxLevel ? (
                <>
                    <Line left={cellWidth} top={height / 4} width={cellWidth} />
                    <Node
                        level={level + 1}
                        maxLevel={maxLevel}
                        cellWidth={cellWidth}
                        cellHeight={cellHeight}
                        left={cellWidth * 2}
                        top={0}
                    />
                    <Line left={cellWidth} top={(height * 3) / 4} width={cellWidth} />
                    <Node
                        level={level + 1}
                        maxLevel={maxLevel}
                        cellWidth={cellWidth}
                        cellHeight={cellHeight}
                        left={cellWidth * 2}
                        top={height / 2}
                    />
                </>
            ) : null}
        </div>
    )

});

/*
function Node(props){
    console.log('Node rerender');
    const {maxDepth, blockStyle} = props;
    const [, setTrigger] = useState();
    const render = useRef(-1);
    render.current++;

    const handleClick = () => {
        console.log('click')
        setTrigger({});
    }

    let children;

    if(maxDepth > 1){
        let blockStyle2 = {
            ...blockStyle,
            height: blockStyle.height / 2,
            left: blockStyle.left + 100
        }

        children = (
            <Node maxDepth={maxDepth-1} blockStyle={blockStyle2}/>
        )
    }

    return (
        <>
            <div style={blockStyle} onClick={handleClick}>{render.current}</div>
            {children}
            
        </>
    )
}
*/