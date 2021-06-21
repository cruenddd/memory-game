import _ from 'lodash';

const container = document.querySelector('.Container')
const elements = document.querySelectorAll('.Animal')
const value = document.getElementById('value')
const animais = [{name:'passaro', img:'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png'}, 
{name:'gato', img:'https://ogimg.infoglobo.com.br/in/24649523-8a0-224/FT1086A/x88249115.jpg.pagespeed.ic.GWoSdtcJ_C.jpg'} , 
{name:'passaro', img:'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png'},
{name:'gato', img:'https://ogimg.infoglobo.com.br/in/24649523-8a0-224/FT1086A/x88249115.jpg.pagespeed.ic.GWoSdtcJ_C.jpg'},
{name:'galinha',img:'https://veja.abril.com.br/wp-content/uploads/2016/06/animais-junho-20120617-18-original.jpeg'}, 
{name:'galinha',img:'https://veja.abril.com.br/wp-content/uploads/2016/06/animais-junho-20120617-18-original.jpeg'}, 
{name:'leão', img:'http://www.uptimecont.com.br/wp-content/uploads/2019/04/malha-fina-saiba-como-nao-ser-pego-pelo-leao.jpg'},
{name:'leão', img:'http://www.uptimecont.com.br/wp-content/uploads/2019/04/malha-fina-saiba-como-nao-ser-pego-pelo-leao.jpg'},
{name:'jacaré', img:'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2020/10/06130125/jacar%C3%A9.jpg'},{name:'jacaré', img:'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2020/10/06130125/jacar%C3%A9.jpg'},{name:'macaco', img:'https://super.abril.com.br/wp-content/uploads/2020/08/31-08_covidEUA2_SITE-1.jpg'},
{name:'macaco', img:'https://super.abril.com.br/wp-content/uploads/2020/08/31-08_covidEUA2_SITE-1.jpg'},
{name:'baleia', img:'https://blog.pescagerais.com.br/wp-content/uploads/2021/02/baleia-orca.jpg'},
{name:'baleia', img:'https://blog.pescagerais.com.br/wp-content/uploads/2021/02/baleia-orca.jpg'},
{name:'piguim', img:'https://super.abril.com.br/wp-content/uploads/2020/08/07-08_pinguins_SITE.jpg'},
{name:'piguim', img:'https://super.abril.com.br/wp-content/uploads/2020/08/07-08_pinguins_SITE.jpg'}]
const interrogação ='https://thumbs.dreamstime.com/b/chess-board-transparent-background-black-white-concept-vector-chess-board-transparent-background-black-white-concept-124183197.jpg'
let before 
let soluted = []
let erros = 0 

function onClickInElement() {
    const nowAnimal = { 
        name: this.getAttribute('animal'),
        id: this.getAttribute('elemento')
    }
    const same = soluted.filter((i) => i.id === nowAnimal.id)
if(same.length) {
    console.log('esse elemento já foi solucionado!')
 return 
}
 if(!before) { 
    before = nowAnimal
        const index = this.getAttribute('elemento')
        const img = animais[index].img
        this.setAttribute('src',img)
 } else {
    const oldIdAnimal = before
    if(oldIdAnimal.name === nowAnimal.name && oldIdAnimal.id !== nowAnimal.id) {
        soluted.push(nowAnimal,oldIdAnimal)
        const acerto = document.getElementsByClassName(`${oldIdAnimal.name}`)
        const index = acerto[0].getAttribute('elemento')
        const img = animais[index].img
        acerto[0].setAttribute('src',img)
        acerto[1].setAttribute('src',img)
        before = null
        console.log('Parabés acertou!')
    } else {
        console.log('Você errou :/')
        const erro = document.getElementsByClassName(`${oldIdAnimal.name}`)
        const index = this.getAttribute('elemento')
        const img = animais[index].img
        this.setAttribute('src', img) 
         setTimeout(() => {
            this.setAttribute('src', interrogação)
            erro[0].setAttribute('src', interrogação)
            erro[1].setAttribute('src', interrogação)
         }, 700)
        before=null
        erros = erros + 1
        value.textContent = erros  
    }      
 }
}
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
      while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
function configElements() {
    const shuffledAnimais = shuffle(animais)
    shuffledAnimais.forEach((animal,index) => {
        elements[index].setAttribute('animal', animal.name)
        elements[index].setAttribute('elemento', index)
        elements[index].setAttribute('src', interrogação)
        elements[index].classList.add(`${animal.name}`)
        elements[index].addEventListener('click', onClickInElement) 
    })
}
window.onload = configElements