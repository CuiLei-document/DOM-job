window.dom = {
    // find用于获取标签和标签们
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    // 用于修改style
    style(node, name, value){
        // 如果长度为3 用户可以像修style
        if(arguments.length === 3){
            // 用户可能 dom.style(div, `color`, `red`)
            node.style[name] = value
        }else if(arguments.length ===2){
            // 长度为2 用户可能想获取 style
            if( typeof name === `string`){
                // 用户可能输入 node.style[name]
                return node.style[name]
            }else if(name instanceof Object){
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
    },
    // 遍历所有节点
    
    each(nodeList, fn){
        for(let i=0; i< nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    },
    children(node){
        return node.children
    }
}