export default function Início(){
    return(
        <div>
            <h2>Exercícios</h2>
            <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
                Este site foi desenvolvido como projeto prático da disciplina de Programação Web.
                Utilize o menu acima para navegar entre os exercícios disponiveis. 
            </p>

            <div style={{margintop: '1.5rem'}}>
                <h3>Exercícios disponiveis</h3>
                <ul style={{margintop: '0.75rem', paddingLeft: '1.5rem', lineHeight: '2'}}>
                    <li><strong>Média Escolar</strong> - Calcula a média de três notas e exibe a situação do aluno</li>
                    <li><strong>Desconto</strong> - Simula o desconto de um produto com base em cupons</li>     
                </ul>
            </div>
        </div>
    )
}