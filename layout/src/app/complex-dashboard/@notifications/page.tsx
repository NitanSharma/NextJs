import { Card } from "@/app/components/Card"
import Link from "next/link"


export default function Notifactions(){
    return <>
        <Card>
           <div>Notifactions</div> 
           <div>
            <Link href="/complex-dashboard/archived">Archived</Link>
           </div>
        </Card>
    </>
}