import { useEffect, useState } from "react"

export const useQueryParameter = ( {defaultValue,key})  => {
    const [parameter,setParameter]=useState(defaultValue)
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search)
        if(params.get(key)){
            setParameter(params.get(key))
        }
    },[window.location.search])

    return parameter
}

export const myNavigator = ( {defaultValue,key})  => {
    const [parameter,setParameter]=useState(defaultValue)
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search)
            setParameter(params.get(key))
    },[window.location.search])

    return parameter
}
// export default useQueryParameter