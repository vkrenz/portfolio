import { useDarkMode } from '../DarkModeContext'

const Container = ({
    children,
}) => {
    const { isDarkMode } = useDarkMode()
    return (
        
        {children}
    );
}
 
export default Container;