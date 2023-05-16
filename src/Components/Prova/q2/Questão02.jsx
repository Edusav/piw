
//As variaveis useEffect e useState foram criadas para modificar a imagem que seria o useEffect, e o useState para fazer com que o estado do botão seja modificado atravez do true e false
import { useEffect, useState } from "react"

const Questão02 = () => {
    const [img, setimg] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);
    //O valor true foi dado para que depois possamos muda-lo
    const [virar, setvirar] = useState(true); 
    


    
    useEffect(//(useEffect) usado para mudar a variavel no nosso caso atraves do uso do if e else para mudar a imagem
        () => {
            //atribuimos que se o valor for true a imagem mostarda sera de frente, deixando basicamente da mesma forma que ela começou
            if (virar == true) { 
                setimg (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`);
            }
            //caso não seja true a imagem mostrada sera a de costas
            else {
                setimg (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png`);
            }
        },[virar]
    )

    //O botão que virará a imagem será retornado
    return (
        
        <div>
            <img
                src={img}
                alt="Pokemon"
                
                style={{ width: "200px"}}

            //o prev é usado para armazenar a informação ou valor anterior e inverter esse valor 
            />
            <button onClick={() => setvirar((prev) => !prev)} 
            > Virar </button>

        </div>
    )
}

export default Questão02