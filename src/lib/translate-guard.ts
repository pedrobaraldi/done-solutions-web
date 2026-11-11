// O tradutor embutido do Chrome/Edge/Safari (e o Google Tradutor) troca os textos da página
// por <font> próprios. Quando o React depois tenta atualizar/remover esses nós, o navegador
// lança "Failed to execute 'removeChild' on 'Node'" e a página fica em branco.
// Este ajuste (recomendado em facebook/react#11538) evita o erro sem mudar nada no visual.
export const installTranslateGuard = () => {
  if (typeof Node !== "function" || !Node.prototype) return;

  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) {
      if (child.parentNode) child.parentNode.removeChild(child);
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      return originalInsertBefore.call(this, newNode, null) as T;
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };
};
