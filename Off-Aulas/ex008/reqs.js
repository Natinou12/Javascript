const novoUser = {
    nome: "Roberto",
    idade: 15
}

const userUp = {
    nome: "Carlos",
    idade: 45
}

const UserToUp = {
    nome: "Luiz",
    idade: 27
}

export async function ver() {
    try {
        const enviar = await fetch('http://localhost:3000/usuarios')

        
        const res = await enviar.json()

        console.log(res)
            
    } catch (error) {
        console.log(error)
    }
}

export async function enviar() {
    try {
        const enviar = await fetch('http://localhost:3000/usuarios', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoUser)
        })

        const res = await enviar.json()

        console.log()
    } catch (error) {
        console.log(error)
    }
}

export async function atualizar() {
    const resposta = await fetch("http://localhost:3000/usuarios")
    const usuarios = await resposta.json()

    const usuario = usuarios.find((usuario) => usuario.nome === UserToUp.nome)

    if (usuario) { // Atualiza os usuarios
        await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userUp)
        })

            console.log(`${usuario.nome} teve seus dados atualizados.`)
        }

}
        
export async function deletar() {
    const resposta = await fetch("http://localhost:3000/usuarios")
    const usuarios = await resposta.json()

    for (const usuario of usuarios) {
        if (usuario.nome === "Carlos") { // Deleta os usuarios
            await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
                method: "DELETE"
            })

            console.log(`${usuario.nome} foi deletado.`)
        }
    }

}

export async function resultado() {
    // Funções

    await ver()
}

