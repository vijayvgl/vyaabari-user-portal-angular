export function checkNull(value: any) {
    return (value != null) && (value != undefined) && (value != '') && (Array.isArray(value) ? value?.length > 0 : true)
}

export function titleCase(st) {
    return st.toLowerCase().split(" ").reduce((s, c) =>
        s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
}



export function toFixedNumber(data: string | Number) {

    return Number(Number(data).toFixed(2))
}

export function encodeMobile(value: any) {
    let str = `${String(value).substring(0, 4)}xxxx${String(value).substring(8, 10)}`
    return str
}