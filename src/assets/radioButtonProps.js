const radioButtonProps = {
    _rankProps: {
        _for_name:  'rank', // атрибуты for и name
        
        _elements: {
            //Название полей должно быть строго в строковом формате, как представлено ниже: цифра и r
            //иначе будут ошибки 
            '2r': '2 знака',
            '3r': '3 знака',
            '4r': '4 знака',
            '5r': '5 знаков',
        },
    },

    _showTimeProps: {
        _for_name:  'time', // атрибуты for и name

        _elements: {
            //Название полей должно быть строго в строковом формате, как представлено ниже: цифра и r
            //иначе будут ошибки 
            '0.2s': '0.2 секунды',
            '0.5s': '0.5 секунд',
            '0.7s': '0.7 секунд',
            '1s': '1 секунда',
            '1.2s': '1.2 секунды',
            '1.5s': '1.5 секунд',
            '1.7s': '1.7 секунд',
            '2s': '2 секунды',
        },
    },

    _getRadioButtonParams(elemsObj, forAttributeValue) {
        const arr = [] //Возвращаемый массив из объектов атрибутов радиокнопок

        //Перебираем объект elemsObj и заливаем в массив новый объект атрибутов для каждой кнопки 
        //На выходе получаем массив объектов
        for (let i in elemsObj) {
            arr.push({
                for : forAttributeValue,
                name : forAttributeValue,
                id : i,
                label : elemsObj[ i ],
                picked : i,
            })
        }
        return arr
    },

    get numberRankProps() { 
        return this._getRadioButtonParams(this._rankProps._elements, this._rankProps._for_name)
    },

    get showTimeProps() {
        return this._getRadioButtonParams(this._showTimeProps._elements, this._showTimeProps._for_name)
    }
}

export default radioButtonProps