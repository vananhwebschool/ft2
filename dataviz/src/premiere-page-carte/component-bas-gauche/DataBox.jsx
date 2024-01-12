import {BoxNumberContext} from "./context/BoxNumberContext.jsx";

// eslint-disable-next-line react/prop-types
export default function DataBox({boxNumber, children}) {
    return (
        <div>
            <BoxNumberContext.Provider value={boxNumber}>
                {children}
            </BoxNumberContext.Provider>
        </div>
    )
}