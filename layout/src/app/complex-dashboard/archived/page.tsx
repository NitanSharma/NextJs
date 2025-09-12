import { Card } from "@/app/components/Card"
import Link from "next/link"


export default function ArchivedNotifactions(){
    return <>
        <Card>
           <div>Archived Notifactions </div> 
           <div>
            <Link className="text-orange" href="/complex-dashboard">Default</Link>
           </div>
        </Card>
    </>
}