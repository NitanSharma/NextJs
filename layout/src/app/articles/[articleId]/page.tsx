import Link from "next/link"
import { Metadata } from "next";
// import { use } from "react";
// dynamic metadata
import { redirect } from "next/navigation";

type Props = {
    params : Promise<{articleId : string}>
}

// if "use client " is used u dont use metadata in page or any components
// always keep your components in server components

export const generateMetadata  = async ({params} : Props) : Promise<Metadata> =>{
    const id = (await params).articleId
    return {
        title : `Article ${id}`
    }

}

// async- await for server component
// use hook for client component

export default async function NewsArticle({
    params ,
     searchParams,
    } : 
    {params :Promise<{articleId:string}>; searchParams : Promise<{lang ?: "en" | "es" | "fr"}>;}){

        const {articleId} = await params;
        // const {articleId} = use(params); // have to add "use client"
        const {lang = "en"} = await searchParams;
        if(parseInt(articleId) > 100){
            redirect("/")
        }
    return (
        <div className="text-center text-2xl">
            <h1>
                News Article {articleId}
            </h1>
            <p>Reading in {lang}</p>

          <div className="flex gap-10 justify-center">
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
          </div>

        </div>
    )
}