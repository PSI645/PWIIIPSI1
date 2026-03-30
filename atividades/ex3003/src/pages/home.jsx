import { Link } from 'react-router-dom'
// Link é usado assim no JSX:
// <Link to='/trapezio'>Ir para Trapézio</Link>
//
// É equivalente ao HTML:
// <a href='/trapezio'>Ir para Trapézio</a>
//
// A diferença: Link não recarrega a página inteira — React troca apenas o conteúdo.


// Fora do componente — dados dos cards
const exercises = [
  {
    num:  '01',
    path: '/trapezio',
    icon: '📐',
    title: 'Área do Trapézio',
    desc:  'Calcule a área informando as bases e a altura.',
  },
  {
    num:  '02',
    path: '/imc',
    icon: '⚖️',
    title: 'Peso Ideal (IMC)',
    desc:  'Calcule o peso ideal baseado no sexo e altura.',
  },
  {
    num:  '03',
    path: '/imposto-renda',
    icon: '💰',
    title: 'Imposto de Renda',
    desc:  'Calcule o desconto de IR sobre o salário.',
  },
  {
    num:  '04',
    path: '/conta-luz',
    icon: '⚡',
    title: 'Conta de Luz',
    desc:  'Calcule a conta de energia pela bandeira tarifária.',
  },
  {
    num:  '05',
    path: '/idade',
    icon: '🎂',
    title: 'Idade e Classificação',
    desc:  'Descubra a classificação etária pelo ano de nascimento.',
  },
]
