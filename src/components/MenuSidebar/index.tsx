import React, { useContext, PropsWithChildren } from 'react'

type ToggleMenuProps = {
    contentId: string

}

type ContentProps = {
    contentId: string
}

type MenuSidebarProps = {
    registerContents: string[];
}

const MenuSidebarContext = createContext({});

const Content = (props: PropsWithChildren<ContentProps>) => {
    return (
        <div>Content</div>
    )
}

const ToggleMenu = ({ children }: PropsWithChildren<ToggleMenuProps>) => {
    return (
        <div>{children}</div>
    )
}

function MenuSidebar({ children }: PropsWithChildren<MenuSidebarProps>) {
    const [isMenuOpen, setIsMenuOpen] = React.useState({
        categories: false,
        cart: true
    });

    console.log(isMenuOpen);

    return (
        <>
            <MenuSidebarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                {children}
            </MenuSidebarContext.Provider>
        </>
    )
};

MenuSidebar.ToggleMenu = ToggleMenu;
MenuSidebar.Content = Content;

export { MenuSidebar }
