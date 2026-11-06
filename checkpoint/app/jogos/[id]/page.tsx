import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jogos } from "@/lib/jogos";
import BotaoCurtir from "@/app/compenents/BotaoCurtir";

export default async function Detalhes({
    params,
}:{
    params: Promise<{ id: string }>;
}){
    const { id } = await params;
    const jogo = jogos.find((jogo) => jogo.id === Number(id));

    if(!jogo){
        notFound();
    }

    return(
        <main className="container">
            <Link href="/" className="voltar">Voltar ao catálogo</Link>
            <article className="detalhes">
                    <Image src={jogo.imagem} alt={jogo.titulo} width={460} height={215}></Image>
                    <div className="detalhes-conteudo">
                        <p className="genero">{jogo.genero}</p>
                        <h2>{jogo.titulo}</h2>
                        <p>{jogo.descricao}</p>
                        <BotaoCurtir jogoId={jogo.id}/>
                    </div>
            </article>
        </main>
    )
}

