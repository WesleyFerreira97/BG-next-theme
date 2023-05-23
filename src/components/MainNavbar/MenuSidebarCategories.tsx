import { CaretRight } from "phosphor-react"
import { SidebarCategoriesWrap } from "./styles"

const menuItems = [
    { label: "Ínicio", link: "/" },
    { label: "Camisas", link: "/" },
    { label: "Regatas", link: "/" },
    { label: "Sandálias", link: "/" },
    { label: "Saias", link: "/" },
    { label: "Outros", link: "/" },
];

export const MenuSidebarCategories = () => {
    return (
        <SidebarCategoriesWrap>
            <ul className="menu-categories">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>
                            {item.label}
                        </a>
                        <CaretRight size={20} className="icon" />
                    </li>
                ))}
            </ul>
        </SidebarCategoriesWrap>
    )
}