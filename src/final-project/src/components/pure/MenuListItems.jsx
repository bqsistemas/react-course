import { useLocation, useNavigate  } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Settings, Task } from '@mui/icons-material'

const getIcon = (icon) => {
    switch(icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Home/>)
        case 'SETTINGS':
            return (<Home/>)
        default:
            break
    }
}

const MenuListItems = ({list}) => {
    const navigate = useNavigate()

    const goToNavigate = (path) => {
        navigate(path, { replace: true })
    }

    return (
        <List>
            { list.map(({text, path, icon}, index) => (
                <ListItem key={index} button onClick={() => goToNavigate(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default MenuListItems