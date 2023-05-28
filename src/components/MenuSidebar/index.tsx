import React, { useContext, PropsWithChildren, createContext, useState, SetStateAction, KeyboardEvent } from 'react'
import { useSidebarMenu } from 'src/hooks/useSidebarMenu'
import { CloseButton, ContentWrap, OverlayBackground } from './style'
import { X } from "phosphor-react"

type ToggleMenuProps = {
    contentId: string
}

type ContentProps = {
    contentId: string;
    side?: "left" | "right";
    menuTitle?: string;
}

type MenuSidebarProps = {
    registerContents: string[];
}

type MenuContextProps = {
    isMenuOpen: { [key: string]: boolean };
    setIsMenuOpen: React.Dispatch<SetStateAction<{ [key: string]: boolean }>>;
}

const initialValue = {
    isMenuOpen: {},
    setIsMenuOpen: () => { },
}

const MenuSidebarContext = createContext<MenuContextProps>(initialValue);

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

    const handleEscPress = (e: KeyboardEvent<HTMLDivElement>) => {
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
        >
            <div className='content'>
                <CloseButton onClick={handleMenuClose} >
                    <X size={27} />
                </CloseButton>
                <div style={{
                    // background: "#000",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: '3rem',
                    marginRight: '1rem',
                }}>
                    <div className='content-header'>
                        {props.menuTitle &&
                            <h4 className='content-header__title'>
                                {props.menuTitle}
                            </h4>
                        }
                    </div>
                    {children}
                </div>
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

export { MenuSidebar };