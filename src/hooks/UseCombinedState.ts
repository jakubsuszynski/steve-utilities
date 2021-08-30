import {useRef, useState} from "react";

const useCombinedState = <S = undefined>(initialState: S): [S, (newState: S) => void] => {
    const [state, setState] = useState<S>(initialState);
    const ref = useRef<S>();
    return [state, (newState: S) => {
        const lastUpdate = ref.current;
        ref.current = {...ref.current, ...newState};
        setState({...state, ...lastUpdate, ...newState});
    }];
};

export default useCombinedState;