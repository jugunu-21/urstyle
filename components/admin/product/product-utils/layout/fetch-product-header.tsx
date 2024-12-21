
import Link from "next/link"
import {
    PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { collectionproductInterface } from "../../../collection/collection-utils/collection-interface"
import { useRouter } from "next/navigation"
export default function statusandFilter({ setSheetOpenCollection, collection, setSelectProduct }: { collection: Array<collectionproductInterface>, setSheetOpenCollection: (sheetOpenCollection: boolean) => (void), setSelectProduct: (selectProduct: boolean) => (void) }) {
    return (
        <div className="flex items-center">
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {/* <TabsTrigger value="">Active</TabsTrigger> */}
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8">
                    <Link href="/admin/product/productadd" className="flex gap-1 items-center ">
                        <PlusCircle className="h-3.5 w-3.5  " />
                        <span className=" sm:not-sr-only sm:whitespace-nowrap">
                            Add Product
                        </span>
                    </Link>
                </Button >
                {(collection.length > 0 ? <Button size="sm" variant="outline" className="h-8 flex  gap-1" onClick={() => setSheetOpenCollection
                    (true)} >
                    <PlusCircle className="h-3.5 w-3.5  " />
                    <span className=" sm:not-sr-only sm:whitespace-nowrap">
                        Create collection
                    </span>
                </Button> : <Button size="sm" variant="outline" className="  gap-1 h-8 " onClick={() => setSelectProduct
                    (true)
                }>
                    <PlusCircle className="h-3.5 w-3.5  " />
                    <span className=" sm:not-sr-only sm:whitespace-nowrap">
                        Select Product
                    </span>
                </Button>)
                }
            </div>
        </div>
    )
}


function StatusandFilterForCollection({ setSheetOpenCollection, collection, setSelectProduct }: { collection: Array<collectionproductInterface>, setSheetOpenCollection: (sheetOpenCollection: boolean) => (void), setSelectProduct: (selectProduct: boolean) => (void) }) {
    const router = useRouter()
    type QueryParams = {
        collectionId: string;
        selectProduct?: boolean;
    };
    return (
        <div className="flex items-center">
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {/* <TabsTrigger value="">Active</TabsTrigger> */}
            </TabsList>
            <div className="ml-auto flex items-center gap-2">

                <Button size="sm" variant="outline" className="h-8  gap-1" onClick={() => {
                    router.push(`/admin/product/productfetch?selectProduct=${true}`);

                    setSelectProduct(true);
                }


                }>
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className=" sm:not-sr-only sm:whitespace-nowrap">
                        Create Collection
                    </span>
                </Button>
            </div>
        </div >
    )
}

export { StatusandFilterForCollection }
















