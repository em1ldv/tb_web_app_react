const tg = window.Telegram.WebApp;


export function useTelegram() {

    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }else {
            tg.MainButton.setText("TEST");
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        onToggleButton,
    }
}