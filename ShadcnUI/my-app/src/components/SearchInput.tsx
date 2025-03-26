import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type Props = {
    placeholder?: string,

}

export function SearchInput({ placeholder }: Props) {
    return(
        <div className="border rounded-lg justify-between items-center">
            <Input type="text" placeholder={placeholder || "Search"} className="border-none "></Input>
            <Button variant="ghost" size='icon'>
                <Search></Search>
                <span className="sr-only">Search</span>
            </Button>
        </div>
    )
}