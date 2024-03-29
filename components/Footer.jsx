import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";

const Footer =  () => {

    const footerNavs = [
        {
            href: '/terms',
            name: 'Terms'
        },
        {
            href: '/license',
            name: 'License'
        },
        {
            href: '/privacy',
            name: 'Privacy'
        },
        {
            href: '/about',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <span className="text-3xl">{CONSTANTS.NAME}</span>
                    <p>
                        All in one car shop.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <a href="/signup" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Let&apos;s get started
                        </a>
                       
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                                    <a key={idx} href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;