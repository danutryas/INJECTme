import { createContext,useState } from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
const ModalContext = createContext({});

export function ModalProvider({children}){
    const [modalStatus,setModalStatus] = useState(false)

    const activateModal = (e) => {
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