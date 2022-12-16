import Head from "next/head";
import client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/getMenus";

export default function Index({ menus }) {
    // console.log(menus);
    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Hello, world!
            </h3>
        </div>
    );
}
export async function getStaticProps(context) {
    const { data, loading, networkStatus } = await client.query({
        query: GET_MENUS,
    });
    // console.log(data);
    return {
        props: {
            menus: {
                headerMenus: data?.headerMenus?.edges,
                footerMenus: data?.footerMenus?.edges,
            },
        },
    };
}
