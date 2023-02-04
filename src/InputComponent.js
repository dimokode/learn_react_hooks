import { useCallback, useState } from "react";


function InputElement({label, value, setValue}){
    return (
        <div style={{ margin: 10 }}>
            <span style={{ marginRight: 10 }}>{label}</span>
            <input type="text" value={value} onChange={
                (e) => setValue(e.target.value)
            }/>
        </div>
    )
}


function createMappedState(mapper){
    return function(initialValue){
        const [value, setValue] = useState(mapper(initialValue));

        const changeValue = useCallback((value) => {
            setValue(mapper(value));
        }, []);

        return [value, changeValue];
    }
}

const useUppercaseState = createMappedState((value) => {
    return value?.toUpperCase();
});

const useLowercaseState = createMappedState((value) => {
    return value?.toLowerCase();
})

const useTrimState = createMappedState((value) => {
    return value?.trim();
})


export default function InputComponent(){

    const [uppercase, setUppercase] = useUppercaseState('sasdas sd sd');
    const [lowercase, setLowercase] = useLowercaseState('LKLD ;ALASKDK SA;');
    const [trimcase, setTrimcase] = useTrimState('   djkh   kashd  ');

    return (
        <>
            <h1>InputComponent</h1>
            <InputElement label="UPPER CASE" value={uppercase} setValue={setUppercase}/>
            <InputElement label="LOWER CASE" value={lowercase} setValue={setLowercase}/>
            <InputElement label="TRIM CASE" value={trimcase} setValue={setTrimcase}/>
        </>
    )
}