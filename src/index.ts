type Option = {
    keyName: string
}
type Object = {
    [x: string]: any
}
type AppendKey= (v: Object, option?: Option) => Object & { [key: string]: string}

export const appendKey: AppendKey = (v, option = {keyName: "key"}) => {
    return {...v, [option.keyName]: "key"}
};
