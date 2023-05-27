import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/Buttons/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/Buttons/FullButton";
import Layout from "../../Layout";
import styles from './index.module.scss';
import Main from '/projects/amazonShop.png';
import Checkout from '/projects/amazonClone/checkout.png';
import Item from '/projects/amazonClone/item.png';
import Complete from '/projects/amazonClone/complete.png';
 
export default function AmazonClone() {
    const navigate = useNavigate()

    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/portfolio')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="responsive_title text-black font-integral font-black">Amazon Clone</h1>
            <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">
                Amazon shop clone, with the popular features for e-commerce site.<br />               
            </p>
            <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">
                Some features this website includes: <br />
                <ul className="pl-2 pt-2">
                    <li className="pt-4"><span className="underline"> Register and login authentication</span> - created with NextAuth (now called Auth.js)</li>
                    <li className="pt-4"><span className="underline">Stripe Checkout</span> - users can checkout with stripe.</li>
                    <li className="pt-4"><span className="underline">Filter Products</span> - users are able to filter by categories, and search by name products.</li>
                    <li className="pt-4"><span className="underline">Add To Cart And Wishlist</span> - users can add to cart their products, or add to whislist.</li>
                </ul>
            </p>
            <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">TECH:</h2>
            <div className="flex flex-wrap items-center pt-8">
                <ColorBox title={"T3-Stack"} color={"#D14AB9"} bgColor="pink" />
                <ColorBox title={"Trpc"} color={"#5F55D2"} bgColor="purple"  />
                <ColorBox title={"Zod"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"NextJS"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"TailwindCSS"} color={"#DD9516"} bgColor="orange" />
                <ColorBox title={"Next-Auth"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"Stripe"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"GSAP"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"MongoDB"} color={"#DD9516"} bgColor="orange"  />
            </div>
            <div className={`w-full table ${styles.table_wrapper}`}>
                <div className="w-2/4 float-left pr-2">
                    <img src={Main} className="w-full"/>
                </div>
                <div className="w-2/4 float-right">
                    <img src={Checkout} className="w-full"/>
                    <img src={Item} className="w-full pt-4"/>
                    <img src={Complete} className="w-full pt-4"/>
                </div>
            </div>
            <div className={`${styles.bottom} flex justify-center pt-12`}>
                <a href="https://amazon-shop-tau.vercel.app/" target="_blank">
                    <FullButton title="Live Website" marginRight="2rem"/>
                </a>
                <a href="https://github.com/antonm7/amazon-shop" target="_blank">
                    <BorderedButton title="GitHub"/>
                </a>
            </div>
        </Layout>
    )
}