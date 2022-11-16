import React, { ReactNode } from "react";
import { TitleWrap, SubTitleWrap, ParagraphWrap, WidgetHeaderWrap } from "./styles";

type ChildrenProps = {
    children?: ReactNode | ReactNode[];
}

const Title = ({ children }: ChildrenProps) =>
    <TitleWrap>{children}</TitleWrap>;

const SubTitle = ({ children }: ChildrenProps) =>
    <SubTitleWrap>{children}</SubTitleWrap>;

const Paragraph = ({ children }: ChildrenProps) =>
    <ParagraphWrap>{children}</ParagraphWrap>;


function Header({ children }: ChildrenProps) {
    return (
        <WidgetHeaderWrap>{children}</WidgetHeaderWrap>
    );
}

Header.Title = Title;
Header.SubTitle = SubTitle;
Header.Paragraph = Paragraph;

export { Header };