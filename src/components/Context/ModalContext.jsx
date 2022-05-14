import { createContext,useState } from "react";
const ModalContext = createContext({});

export function ModalProvider({children}){
    const [modalStatus,setModalStatus] = useState(false)

    const activeModal = (e) => {
        e.preventDefault()
        setModalStatus(prev => !prev)
    }


    return(
        <ModalContext.Provider value={{modalStatus,activeModal}}>
            {children}
        </ModalContext.Provider>
    )
}


export default ModalContext;