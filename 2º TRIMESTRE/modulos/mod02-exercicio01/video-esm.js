export function alugarFilme(nomeFilme, dataAluguel, preço)
{
    return `O filme ${nomeFilme} foi alugado: ${dataAluguel}   pelo preço ${preço}`
}

export function devolverFilme(nomeFilme, dataDevolução)
{
    return `o filme ${nomeFilme} foi devolvido ${dataDevolução} no dia`
}
