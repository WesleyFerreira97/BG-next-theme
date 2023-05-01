import React, { useContext, PropsWithChildren, createContext, useState } from 'react'
import { useSidebarMenu } from 'src/hooks/useSidebarMenu'

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

const Content = ({ contentId }: PropsWithChildren<ContentProps>) => {
    const { isMenuOpen } = useContext(MenuSidebarContext);
    let contentState = isMenuOpen[contentId];
    const scope = useSidebarMenu(contentState);

    console.log(contentState);

    return (
        <div ref={scope}>
            <div>
                Content
            </div>
        </div>
    )
}

const ToggleMenu = ({ children }: PropsWithChildren<ToggleMenuProps>) => {
    return (
        <div>{children}</div>
    )
}

function MenuSidebar({ children, registerContents }: PropsWithChildren<MenuSidebarProps>) {
    const mappedContentsToBoolean = registerContents.reduce((prevItem, currentItem) =>
        ({ ...prevItem, [currentItem]: true }), {})
    const [isMenuOpen, setIsMenuOpen] = useState(false || mappedContentsToBoolean);

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
