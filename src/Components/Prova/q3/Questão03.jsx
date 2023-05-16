import React, { useEffect, useState } from "react";

const Questão03 = () => {
 
    const [populacao, setPopulacao] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then(
                (response) => {
                    return response.json()
                }
            ) 
            .then(
                (populacao) => setPopulacao(populacao))

            .catch(error => console.log(error));
    }, []);


    //Neste contexto, é feita uma exploração dos elementos contidos na população, para examiná-los
    const MiniMax = () => {
        if (populacao.length === 0) { 
            return null;
        }

        let max = -Infinity; 
        let min = Infinity;
        let capitalMax = ""; 
        let capitalMin = "";
        //Nessa etapa, ocorre o cálculo da maior e menor população por meio de (if). Utilizando um contador, é feita uma investigação para identificar às maiores e menores populações encontradas
        populacao.forEach((country) => {
            const population = country.population; 
            const capital = country.capital[0];
            if (population > max) { //Nesta parte, é verificado qual é a capital de maior tamanho. A cada iteração, se uma capital for maior do que a anteriormente comparada, ela substitui a capital anterior, tornando-se a nova capital de maior tamanho
                max = population;
                capitalMax = capital;
            }
            //Mesma coisa de cima so que com a menor capital
            if (population < min) { 
                min = population;
                capitalMin = capital;
            }
        });

        return { capitalMax, capitalMin };
    };

    // variavel para mostrar o resultado
    const capitais = MiniMax(); 

    return (
        <div>
            {capitais && (
                <div>
                    <p>Capital com Maior População: {capitais.capitalMax}</p>
                    <p>Capital com Menor População: {capitais.capitalMin}</p>
                </div>
            )}
        </div>
    );
};

export default Questão03;