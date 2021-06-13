const getNumberRankProps = () => {
    const arr = [] //Возвращаемый массив из объектов атрибутов радиокнопок

    const forAttribute = 'rank' 
    const name = forAttribute

    //В СВОЙСТВЕ ОБЯЗАТЕЛЬНО ДОЛЖНА БЫТЬ ЦИФРА И 'r', ИНАЧЕ БУДУТ ОШИБКИ ПРИ РЕНДЕРИНГЕ
    const elements = {
        '2r': '2 знака',
        '3r': '3 знака',
        '4r': '4 знака',
        '5r': '5 знаков',
    }

    const createObj = () => {
        //Перебираем объект elements и заливаем в массив новый объект атрибутов для каждой кнопки 
        //На выходе получаем массив объектов
        for (let i in elements) {
            arr.push({
                for : forAttribute,
                name : name,
                id : i,
                label : elements[ i ],
                picked : i,
            })
        } 
    }
    createObj()

    return arr
}

export default getNumberRankProps
