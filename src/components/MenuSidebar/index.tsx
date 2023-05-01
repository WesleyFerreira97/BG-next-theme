import React, { useContext, PropsWithChildren, createContext, useState, useEffect } from 'react'
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

type MenuContextProps = {
    isMenuOpen: { [key: string]: boolean };
    setIsMenuOpen: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

const MenuSidebarContext = createContext<MenuContextProps>({});

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

const ToggleMenu = ({ children, contentId }: PropsWithChildren<ToggleMenuProps>) => {
    const { setIsMenuOpen } = useContext(MenuSidebarContext);

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => ({
            ...prevState,
            [contentId]: !prevState[contentId]
        }
        ));
    }

    return (
        <>
            <div onClick={handleMenuToggle} >
                {children}
            </div >
        </>
    )
}

function MenuSidebar({ children, registerContents }: PropsWithChildren<MenuSidebarProps>) {
    const mappedContentsToBoolean = registerContents.reduce((prevItem, currentItem) =>
        ({ ...prevItem, [currentItem]: true }), {})
    const [isMenuOpen, setIsMenuOpen] = useState(false || mappedContentsToBoolean);

    useEffect(() => {
        console.log(isMenuOpen);

    }, [isMenuOpen])

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
