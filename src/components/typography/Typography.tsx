import type { ReactNode } from "react";
// import types

import styleTypography from "./Typography.module.css";
// import css;

const defaultTags = {
    h1: { tag: "h1", styleTag: styleTypography.h1 },
    p: { tag: "p", styleTag: styleTypography.p },
    span: { tag: "span", styleTag: styleTypography.span }
} as const;

type TypographyProps = {
    tag: keyof typeof defaultTags,
    children: ReactNode,
    style?: string 
};

export function Typography({ tag, children, style }: TypographyProps) {
    const selectedTag = defaultTags[tag] || defaultTags.p;

    const Tag = selectedTag.tag;

    return (
        <Tag
            className={`${selectedTag.styleTag} ${style}`}
        >
            { children }
        </Tag>
    );
};