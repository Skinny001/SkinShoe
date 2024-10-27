import Image from "next/image";
import Link from "next/link";
import NikeAir1 from '@/Public/NikeAir1.jpg'
import Man from '@/Public/man.jpg'
import Women3 from '@/Public/women3.jpg'

export function CategoriesSelection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold tracking-tight">
                    Shop by Category
                </h2>

                <Link className="text-sm font-semibold text-primary hover:text-primary/80"
                    href="/products/all">
                    Browse all Products &rarr;
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
                    <Image src={NikeAir1} alt="All products Image" className="object-center object-cover"/>
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55"/>
                    <div className="p-6 flex items-end">
                        <Link href="/product/all">
                            <h3 className="text-white font-semibold">All Product</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                

                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative">
                    <Image src={Man} alt="Products for men" className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"/>
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/product/men">
                            <h3 className="text-white font-semibold">Product for men</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>



                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative">
                    <Image src={Women3} alt="Women products Image" className="object-buttom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"/>
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/product/women">
                            <h3 className="text-white font-semibold">Product for Women</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}