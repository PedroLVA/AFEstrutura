import IProduct from "./IProduct";

class NodeTree {
  product: IProduct;
  left: NodeTree | null;
  right: NodeTree | null;

  constructor(product: IProduct) {
      this.product = product;
      this.left = null;
      this.right = null;
  }
}

export class BinaryTree {
  root: NodeTree | null;

  constructor() {
      this.root = null;
  }

  insert(product: IProduct): void {
      this.root = this.insertRec(this.root, product);
  }

  private insertRec(root: NodeTree | null, product: IProduct): NodeTree {
      if (root === null) {
          return new NodeTree(product);
      }
      if (product.price < root.product.price) {
          root.left = this.insertRec(root.left, product);
      } else if (product.price >= root.product.price) {
          root.right = this.insertRec(root.right, product);
      }
      return root;
  }

  inorder(): IProduct[] {
      const result: IProduct[] = [];
      this.inorderRec(this.root, result);
      return result;
  }

  private inorderRec(root: NodeTree | null, result: IProduct[]): void {
      if (root !== null) {
          this.inorderRec(root.left, result);
          result.push(root.product);
          this.inorderRec(root.right, result);
      }
  }
}
