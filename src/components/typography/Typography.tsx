import type { ReactNode } from "react";
import styleTypography from "./Typography.module.css";
// import css;

type propsTypography = {
    tag: "h1" | "h2" | "p",
    children: ReactNode,
    style?: string
}

export function Typography({ tag, children, style }: propsTypography) {
    const defaultTags = {
        h1: {tag: "h1", styleTag: styleTypography.h1},
        h2: {tag: "h2", styleTag: styleTypography.h2},
        p: {tag: "p", styleTag: styleTypography.p}
    } as const;

    const selectTag = defaultTags[tag] || defaultTags.p;

    const Tag = selectTag.tag;

    return (
        <Tag
            className={`${selectTag.styleTag} ${style}`}
        >
            {children}
        </Tag>
    );
};