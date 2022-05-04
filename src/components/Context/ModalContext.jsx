import { createContext,useState } from "react";

const ModalContext = createContext({});

export function ModalProvider({children}){
    const [modalStatus,setModalStatus] = useState(false)

    const changeModal = () => {
        document.body.classList.toggle('active-modal');
        setModalStatus(prev => !prev)
    }

    return(
        <ModalContext.Provider value={{modalStatus,changeModal}}>
            {children}
        </ModalContext.Provider>
    )
}


export default ModalContext;