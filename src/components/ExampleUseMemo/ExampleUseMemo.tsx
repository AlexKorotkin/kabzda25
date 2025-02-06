import {ChangeEvent, useMemo, useState} from "react";


const ExampleUseMemo = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    const  onChangeA = (e: ChangeEvent<HTMLInputElement>) =>{
        return setA(Number(e.currentTarget.value));
    };
    const  onChangeB = (e: ChangeEvent<HTMLInputElement>) =>{
        return setB(Number(e.currentTarget.value));
    };
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let count = 1;
        for (let i = 1; i <= a; i++) {
            let num = 0;
            while (num < 10000000000) {
                num++;
                const numValue = Math.floor(Math.random() * 1000);
                num += numValue;
            }
            count = count * i;
        }
        return count;

    },[a])


    resultB = useMemo(() => {
        let count = 1;
        for (let i = 1; i <= b; i++) {
            let num = 0;
            while (num < 100000) {
                num++;
                const numValue = Math.floor(Math.random() * 1000);
                num += numValue;
            }
            count = count * i;
        }
        return count;

    },[b])

    return (
        <>
            <input value={a} onChange={onChangeA} type="text"/>
            <input value={b} onChange={onChangeB} type="text"/>
            <hr/>
            <div> Result for a: {resultA}</div>
            <div> Result for b: {resultB}</div>
        </>
    );
};

export default ExampleUseMemo;