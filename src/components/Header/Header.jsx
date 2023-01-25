import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = (props) => {
    
    const {tg, user, onClose} = useTelegram();
   

    return (
        <div className={'header'}>
            <Button onClick={onClose} >Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header