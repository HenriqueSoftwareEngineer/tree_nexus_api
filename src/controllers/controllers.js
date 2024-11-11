class ProductTreeNode{
    constructor(productList){
        this.productList = productList;
        this.rightChildNode = null; 
        this.leftChildNode = null
    }
}

class BinaryTree{
    constructor(){
        this.treeRoot = null;
    }

    insertingANewNode(value){
        const newNode = new ProductTreeNode(value);
        if(this.treeRoot === null){
            this.treeRoot = newNode;
            return this;
        }
        let current = this.treeRoot;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.leftChildNode;
            }else{
                if(!current.right){
                    current.rightChildNode = newNode;
                    return this;
                }
                current = current.rightChildNode;
            }
        }
    
    }

    search(value){
        let current = this.treeRoot;
        while(current){
            if(value === current.value){
                return current;
        }
        current = value < current.value ? current.leftChildNode: current.rightChildNode;
    }
    return null;
}
}

