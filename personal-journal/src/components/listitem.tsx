import { Checkbox } from "@/components/ui/checkbox";

export default function ListItem(name: string){
    return (
        <div>
            <Checkbox />
            <span>{name}</span>
        </div>
    )
}