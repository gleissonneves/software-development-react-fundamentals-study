export default props => {
    const { test, children } = props;

    const elseChild = children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]
    
    const ifChildren = children.filter(child => {
        return child !== elseChild && child !== elseIfChild
    })

    if(test) {
        return ifChildren
    
    } else if(elseChild) {
        return elseChild

    } else {
        return false
    }
}

const Else = props => props.children;
const ElseIf = props => props.children;

export {
    ElseIf,
    Else
}