import React, { ReactNode } from "react";
import { TitleWrap, SubTitleWrap, ParagraphWrap, WidgetHeaderWrap } from "./styles";

type ChildrenProps = {
    children: ReactNode;
}

const Title = ({ children }: ChildrenProps) =>
    <TitleWrap>{children}</TitleWrap>;

const SubTitle = ({ children }: ChildrenProps) =>
    <SubTitleWrap>{children}</SubTitleWrap>;

const Paragraph = ({ children }: ChildrenProps) =>
    <ParagraphWrap>{children}</ParagraphWrap>;

Header.Title = Title;
Header.SubTitle = SubTitle;
Header.Paragraph = Paragraph;

export function Header({ children }: ChildrenProps) {
    return (
        <WidgetHeaderWrap>{children}</WidgetHeaderWrap>
    );
}
