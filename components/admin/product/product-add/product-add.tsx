
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import { useState, useEffect } from "react";;
import Productnamedespridetails from "@/components/admin/product/product-utils/forms/product-name-despridetails"
import ProductImageCard from "@/components/admin/product/product-utils/forms/product-image"
import ProductAffiandCateg from "@/components/admin/product/product-utils/forms/product-affiliate"
import Header from "../product-utils/layout/header"
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation"
export default function Dashboard() {
  const [category, setCategory] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  const [subCategory, setSubCategory] = useState<string | null>("");
  const [link, setLink] = useState<string | null>("");
  const [webLink, setWebLink] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");
  const [price, setPrice] = useState<string | null>("");
  const [image, setImage] = useState<string | null>("");
  const router = useRouter()
  const requestBody = {
    category: category ?? "", // Default to 0 if pid is null or undefined
    name: name ?? "", // Default to empty string if name is null or undefined
    subCategory: subCategory ?? "", // Default to empty string if subCategory is null or undefined
    link: link ?? "", // Default to empty string if link is null or undefined
    description: description ?? "", // Default to empty string if description is null or undefined
    price: price ?? "", // Ensure price is a string, defaulting to "0"
    image: image ?? "",
    webLink: webLink ?? "",
  };
  const productAddPost = api.product.productAdd.useMutation();
  const hasAnyFieldEmptyOrNull = Object.entries(requestBody).some(([key, value]) => {
    if (value === '' || value === undefined) {
      return true;
    }


    return false;
  });

  const addProducthandler = async () => {
    if (hasAnyFieldEmptyOrNull) {
      toast.error("please fill all the deatils ")
      alert("please fill all the deatils ")
      // console.log("has field emptyy", hasAnyFieldEmptyOrNull, requestBody)
    } else {
      // console.log("has field not emptyy", hasAnyFieldEmptyOrNull, requestBody)
      productAddPost.mutateAsync({ requestBody })
        .then(() => {

          router.push("/admin/product/productfetch")
          toast.success("sucessfully uploaded");
        })
        .catch(function (error) {
          console.log("apiaddproduct", error);
          toast.error("failed to upload product")
        });
    }

  }
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 m-4">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <Header handler={addProducthandler} title="Add Product" />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Productnamedespridetails name={name || ""} setName={setName} description={description || ""} setDescription={setDescription} price={price || ""} setPrice={(value: string) => setPrice(value)} />
            <ProductAffiandCateg
              subCategory={subCategory || ""}
              setSubCategory={setSubCategory}
              link={link || ""}
              setLink={setLink}
              category={category || ''}
              setCategory={setCategory}
              webLink={webLink || ''}
              setWebLink={setWebLink}
            />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <ProductImageCard image={image || ""} setImage={setImage} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm" onClick={() =>
            addProducthandler()}
          >Save Product</Button>
        </div>
      </div>
    </main>
  )
}
