import Link from "next/link"

export default function Sobre(){
    return(
        <main className="container">
            <h1>Sobre o Checkpoint</h1>
            <p>Catálogo criado no minicurso de Next.js.</p>
            <Link href="/" className="botao-link">Voltar para os jogos</Link>
        </main>
    )
}