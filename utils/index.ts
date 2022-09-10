import { IArticle } from "../types";
import { serialize } from 'next-mdx-remote/serialize'

export const hostBaseAddress=`http://localhost:1337`



export const formatDate=(d:string):string=>{
    let date = new Date(d).toLocaleDateString('en-US',{
        month:'long',
        weekday:'long',
        day:'numeric',
        year:'numeric',
    })

    return date;
}

export const formatTitle=(slug:string):string=>{
    if(typeof slug=='string'){
        
        return firstLetterCapitilize(slug.split('-').join(' '))
    }else{
        return ''
    }
}

export const firstLetterCapitilize=(str:string):string=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}



export const debounceFunction=(func :(query:string)=>void, time=500)=>{
    let timer:NodeJS.Timeout;

    const debounce=(...args:any)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(this,args)
        },time)
    }
    return debounce;
}



export const serializeMarkdown=async (item:IArticle)=>{

    const body= await serialize(item.attributes.Body as string);

    return{
        ...item,
        attributes:{
            ...item.attributes,
            Body:body
        }
    }
}