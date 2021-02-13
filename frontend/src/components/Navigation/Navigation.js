import { NavLink } from 'react-router-dom';
import { navItems } from './data';

const Navigation = () => {
    return (
        <header>
            <nav>
                <ul className="nav-menu">{navItems.map((navItem) => (
                    <li className="nav-menu__item" key={navItem.route}>
                        <NavLink 
                            exact to={navItem.route}
                            activeStyle={{/* TODO LATER */}}
                        >
                            {navItem.name}
                        </NavLink>
                    </li>
                ))}
                </ul>
            </nav>
        </header>   
    )
};

export default Navigation;