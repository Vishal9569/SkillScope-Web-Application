export const detectTabSwitch = () => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) alert("Tab switching is not allowed!");
    });
};