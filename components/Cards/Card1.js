import React from "react";
import { Card, CardTitle } from "./styles";
import { Button2 } from "../../styles/widgets/Buttons";
import Image from "next/image";
import Link from "next/link";

export default function Card1({ img, title, data_aos, route }) {
  return (
    <Card data-aos={data_aos ? data_aos : null}>
      <div className="mainImage">
        <Image height={160} width={180} src={img} alt="cardImg" />
      </div>
      <CardTitle>{title}</CardTitle>
      <Link href={route} passHref>
        <Button2>
          SHOP
          <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </Button2>
      </Link>
    </Card>
  );
}
