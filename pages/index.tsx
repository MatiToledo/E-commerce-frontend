import HomeSearch from "components/home-search";
import MainLayaout from "components/main-layout";
import ProductsFeatured from "components/products-featured";
import type { NextPage } from "next";
import Head from "next/head";

//min 51

const Home: NextPage = () => {
  const products = [
    {
      Color: ["Beige"],
      Type: "Top",
      Category: ["Buzos & Hoodies"],
      Description:
        "Canguro hecho de corderito color beige relaxed fit. Presenta una capucha ajustable con cordón a tono con punteras reforzadas, bolsillo canguro frontal con grifa y un bordado en la parte frontal a tono de boston hype.",
      Name: "Teddy Hoodie Beige",
      Code: "221-05-02BE",
      unit_price: 6525,
      Images: [
        {
          id: "attcpxaTBWtpyioOD",
          width: 1719,
          height: 2560,
          url: "https://dl.airtable.com/.attachments/e64307cc189d233cbb1adb2fa72c79fc/403edc50/TEDDY-HOODIE-BEIGE-1-scaled.jpg?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=abb5cf8defec5e5a",
          filename: "TEDDY-HOODIE-BEIGE-1-scaled.jpg",
          size: 237986,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://dl.airtable.com/.attachmentThumbnails/8535b18b0711bb6aa7481ab6db3f1ed1/060cc78c?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=244e2daad4e6e981",
              width: 24,
              height: 36,
            },
            large: {
              url: "https://dl.airtable.com/.attachmentThumbnails/7cc844eb606ed67fd1da7bd0c727de83/e767f376?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=8f13f211ab014b80",
              width: 512,
              height: 762,
            },
            full: {
              url: "https://dl.airtable.com/.attachmentThumbnails/ce7ef9e3304df81fc99cd55323bfefbf/ec64c7d6?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=93fec817c18456e0",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
      Sizes: ["S", "M", "L"],
      objectID: "221-05-02BE",
    },
    {
      Color: ["Negro"],
      Type: "Bottom",
      Category: ["Cargos & Track Pants"],
      Description:
        "Pantalón hecho 100% de algodón (frisa/jogging) color negro con un estilo Regular Fit. Presenta una cintura con elástico con cordón ajustable y punteras, bolsillos laterales y logo de Boston Hype vertical en bolsillo izquierdo.",
      Name: "Sweatpant Negro",
      Code: "221-14-01NE",
      unit_price: 5985,
      Images: [
        {
          id: "att7dBP2Id50xCOVn",
          width: 591,
          height: 881,
          url: "https://dl.airtable.com/.attachments/396cf51f8795fe457e07910d9e633649/93411561/SWEATPANT-NEGRO-2-591x881.jpg?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=99ad2c4a395531fc",
          filename: "SWEATPANT-NEGRO-2-591x881.jpg",
          size: 19034,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://dl.airtable.com/.attachmentThumbnails/acb8de8b67f9eb0863a030576d42c071/ed641489?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=4a8f0e5d22136b5c",
              width: 24,
              height: 36,
            },
            large: {
              url: "https://dl.airtable.com/.attachmentThumbnails/5d04f8782f299e63f904f1c1eb6903f8/747897f1?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=9039928c789e3aaf",
              width: 512,
              height: 763,
            },
            full: {
              url: "https://dl.airtable.com/.attachmentThumbnails/cc0a0ed2fbd88776eda24ee7d0089e65/4d898c2e?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=841b76f2618c8695",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
      Sizes: ["S-28/29", "M-30/31", "L-32/33", "XL-34/35"],
      objectID: "221-14-01NE",
    },
  ];

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <MainLayaout>
        <HomeSearch></HomeSearch>
        <ProductsFeatured></ProductsFeatured>
      </MainLayaout>
    </div>
  );
};

export default Home;
