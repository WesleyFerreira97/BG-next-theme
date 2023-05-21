import React, { useContext, PropsWithChildren, createContext, useState, useEffect, SetStateAction } from 'react'
import { useSidebarMenu } from 'src/hooks/useSidebarMenu'
import { ContentWrap, OverlayBackground } from './style'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'

type ToggleMenuProps = {
    contentId: string

}

type ContentProps = {
    contentId: string;
    side?: "left" | "right";
}

type MenuSidebarProps = {
    registerContents: string[];
}

type MenuContextProps = {
    isMenuOpen: { [key: string]: boolean };
    setIsMenuOpen: React.Dispatch<SetStateAction<{ [key: string]: boolean }>>;
}

const MenuSidebarContext = createContext<MenuContextProps>({});

const Content = ({ children, contentId, ...props }: PropsWithChildren<ContentProps>) => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuSidebarContext);
    let contentState = isMenuOpen[contentId];

    const scope = useSidebarMenu({
        isOpen: contentState,
        side: props.side
    });

    const handleMenuClose = () => {
        setIsMenuOpen(prevState => ({
            ...prevState,
            [contentId]: false
        }))
    };

    const handleEscPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleMenuClose();
        }
    }

    return (
        <ContentWrap
            ref={scope}
            onKeyUp={(e) => handleEscPress(e)}
            tabIndex={0}
            side={props.side}
            contaienerWrap
        >
            <div className='content' >
                Content
                <Button onPress={handleMenuClose}>
                    Close
                </Button>
                {children}
            </div>
            <OverlayBackground
                open={contentState}
                onClick={handleMenuClose}
            />
        </ContentWrap>
    )
}

const ToggleMenu = ({ children, contentId }: PropsWithChildren<ToggleMenuProps>) => {
    const { setIsMenuOpen } = useContext(MenuSidebarContext);

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => ({
            ...prevState,
            [contentId]: !prevState[contentId]
        }));
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
        ({ ...prevItem, [currentItem]: false }), {})
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