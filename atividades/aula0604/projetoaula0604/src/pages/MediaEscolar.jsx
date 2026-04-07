import { useState } from 'react'

export default function MediaEscolar(){
    const [notas, setNotas] = useState({n1: '',n2: '', n3: ''})
    const [resultado, setResultado] = useState(null)
    const [erro, setErro] = useState('')
    
    function calcular(){
        const n1 = parseFloat(notas.n1)
        const n2 = parseFloat(notas.n2)
        const n3 = parseFloat(notas.n3)

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
            setErro('Preencha todas as notas antes de calcular.')
            setResultado(null)
            return
        }

        setErro('')
        const media = (n1 + n2 + n3)/3

        let situacao = ''
        let classe = ''

        if (media >=6){
            situacao = 'Aprovado'
            classe = 'Aprovado'
        }else if (media >=4){
            situacao = 'Recuperação'
            classe = 'Recuperação'
        }else {
            situacao = 'Reprovado'
            classe = 'Reprovado'
        }
        
        setResultado({media: media.toFixed(2), situacao, classe})
    }

    function limpar(){
        setNotas({n1: '', n2:'', n3:''})
        setResultado(null)
        setErro('')
    }
    return(

        <div>
            <h2>Calculadora de Média escolar</h2>

            <div className='secao'>
                <label> Nota 1 (n1)</label>
                <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="Ex: 7.5"
                value={notas.n1}
                oncharge={e=> setNotas({...notas, n1: e.target.value})}
            />

            <label>Nota 2 (n2)</label>
            <input
            type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="Ex: 6.0"
                value={notas.n2}
                oncharge={e=> setNotas({...notas, n2: e.target.value})}
            />

            <label>Nota 3 (n3)</label>
            <input
            type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="Ex: 5.0"
                value={notas.n3}
                oncharge={e=> setNotas({...notas, n3: e.target.value})}
            />

            {erro && <p style={{color: 'red', marginBottom: '0.75rem'}}>{erro}</p>}
            <button onClick={calcular}>Calcular</button>
            <button onClick={limpar} style={{marginleft: '0.75rem', background: '#888' }}>Limpar</button>
        </div>
        {resultado && (
            <div className="resultado">
                <p>Media final:<strong>{resultado.media}</strong></p>
                <p>Situação: <span className={resultado.classe}>{resultado.situacao}</span></p>
            </div>
        )}
    </div>
    )
}