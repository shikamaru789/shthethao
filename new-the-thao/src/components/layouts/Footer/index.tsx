import { CategoryItemProps } from "@/interface"
import Link from "next/link"


const Footer = ({ listCate }: { listCate: CategoryItemProps[] }) => {
    return (
        <div className="sport-footer-wrapper py-8 mt-8">
            <div className="sport-footer mx-auto flex gap-10 py-10">
                <div className="sport-footer-column flex-1">
                    <div className="sport-footer-logo">
                        <img src="/images/logo-footer.png" className="w-40" />
                    </div>
                    <div className="sport-footer-description">
                        <p className="sport-footer-title font-bold text-white">
                            ThethaoSH.com
                        </p>
                        <p className="sport-footer-description text-white mt-2" style={{ width: '330px' }}>
                            Cung cấp thông tin mới nhất về thể thao. Thể thao SH, bạn đồng hành của mọi nhà.
                        </p>
                    </div>
                </div>
                <div className="sport-footer-column flex-1">
                    <div>
                        <p className="sport-footer-column-title">Chủ đề</p>
                        <ul className="mt-3">
                            {listCate?.map(item => {
                                return <Link className="item-footer" key={`${item.slug}`} href={`/${item.slug}`}><li>{item.name}</li></Link>
                            })}

                        </ul>
                    </div>
                </div>
                <div className="sport-footer-column flex-1">
                    <p className="sport-footer-column-title">Danh mục</p>
                    <ul className="mt-3">
                        <Link href={'#'}><li>Trong nước</li></Link>
                        <Link href={'#'}><li>Ngoại Hạng Anh</li></Link>
                        <Link href={'#'}><li>Champion League</li></Link>
                        <Link href={'#'}><li>Laliga</li></Link>
                        <Link href={'#'}><li>Seria</li></Link>
                        <Link href={'#'}><li>Các giải khác</li></Link>
                    </ul>
                </div>
                <div className="sport-footer-column flex-1">
                    <p className="sport-footer-column-title">Bảng xếp hạng</p>
                    <ul className="mt-3">
                        <Link href={'#'}><li>EPL</li></Link>
                        <Link href={'#'}><li>Laliga</li></Link>
                        <Link href={'#'}><li>Seria</li></Link>
                        <Link href={'#'}><li>League 1</li></Link>
                        <Link href={'#'}><li>Các giải khác</li></Link>
                    </ul>
                </div>
            </div>
            <div className="sport-footer-license flex justify-between mt-6 items-center mx-auto">
                <p>© 2022 Bản quyền thuộc về Thể Thao SH DMCA.com Protection Status</p>
                <p className="flex gap-4 items-center">Theo dõi Thể Thao SH <img src="/icon/facebook-and-youtube.png" /></p>
            </div>
        </div>
    )
}

export default Footer