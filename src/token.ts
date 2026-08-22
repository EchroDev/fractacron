import { TokenType } from "./token_type";

export interface Token {
    content: string,
    type: TokenType
}