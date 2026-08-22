// Nodo abstracto para nodos
export interface ASTNode {
    kind: string
}

// Nodo del programa, la raiz
export interface Program extends ASTNode {
    body: Tag[]
}

// Nodo para los atributos de un elemento
export interface Attribute extends ASTNode {
    name: string
    value: string
}

// Nodo para el Tag, el cual es un elemento
export interface Tag extends ASTNode {
    type: string
    attributes: Attribute[]
    children: Tag[]
    parent: Tag | Program
    content: string
    id: number
}