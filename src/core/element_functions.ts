import { Container, ContainerPresetType, ContainerTagType, ContainerType } from "../elements/containter";
import type { Base, BaseType } from "./extends/base";
import { Text } from "../elements/text";
import { BaseContentType } from "./extends/base_content";

export const div = (children: Base | Base[] = [], tagType: ContainerTagType = "div", preset: ContainerPresetType = "default", options: Partial<BaseType & ContainerType> = {}) => new Container(children, tagType, preset, options);
export const p = (children: Base | Base[] = [], content: string, options: Partial<BaseContentType> = {}) => new Text(children, content, options);