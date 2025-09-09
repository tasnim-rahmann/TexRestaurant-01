import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
            });
    }, []);
    return { menuItems };
};

export default useMenu;