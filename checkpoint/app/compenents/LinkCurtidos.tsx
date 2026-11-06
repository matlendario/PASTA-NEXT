"use client";

import Link from "next/link";
import { useCurtidos } from "./CurtidosProvider";

export default function LinkCurtidos(){
    const {ids, carregando} = useCurtidos();
    return(
        <Link href=></Link>
    )
}