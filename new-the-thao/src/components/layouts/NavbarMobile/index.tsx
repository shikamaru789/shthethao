import { CategoryItemProps } from "@/interface"
import Link from "next/link"


const NavbarMobile = ({ listCate }: { listCate: CategoryItemProps[] }) => {
    return (
        <div className="navbar-mobile fixed h-screen overflow-y-auto z-10 bg-white w-full" id="navbar-mobile">
            <div className="p-2">
                <ul>
                    <Link href={`/`}><li>Trang chủ</li></Link>
                    <Link href={`/the-thao/sea-games-32`}><li>Seagame 32</li></Link>
                    {listCate?.map(item => {
                        return <Link key={item.slug} href={`/${item.slug}`}><li>{item.name}</li></Link>
                    })}


                </ul>
            </div>
        </div>
    )
}

export default NavbarMobile