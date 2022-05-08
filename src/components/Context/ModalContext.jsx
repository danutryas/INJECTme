import { createContext,useState } from "react";
const ModalContext = createContext({});

export function ModalProvider({children}){
    const [modalStatus,setModalStatus] = useState(false)

    const activateModal = (e) => {
        e.preventDefault()
        document.body.classList.toggle('active-modal');
        setModalStatus(prev => !prev)
    }
    const deactivateModal = () => {
        document.body.classList.toggle('active-modal');
        setModalStatus(prev => !prev)
    }

    return(
        <ModalContext.Provider value={{modalStatus,activateModal,deactivateModal}}>
            {children}
        </ModalContext.Provider>
    )
}


export default ModalContext;