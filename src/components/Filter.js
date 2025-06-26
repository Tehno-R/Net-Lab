const Filter = (props) => {
    // Обработчик отправки формы фильтрации
    const handleSubmit = (event) => {
        event.preventDefault();

        // Собирает значения полей формы в объект filterField
        const filterField = {
            "Название": event.target.gpuName.value.toLowerCase(),
            "G3Dmark": [
                Number(event.target.G3DmarkFrom.value) || null,
                Number(event.target.G3DmarkTo.value) || null,
            ],
            "Цена": [
                Number(event.target.priceFrom.value) || null,
                Number(event.target.priceTo.value) || null,
            ],
            "Эффективность": [
                Number(event.target.powerPerformanceFrom.value) || null,
                Number(event.target.powerPerformanceTo.value) || null,
            ],
            "Год": [
                Number(event.target.releaseYearFrom.value) || null,
                Number(event.target.releaseYearTo.value) || null,
            ],
            "Категория": event.target.category.value.toLowerCase(),
            "СабКатегория": event.target.subCategory.value.toLowerCase(),
        };

        // Фильтрует данные по каждому полю формы
        let arr = props.fullData;
        for (const key in filterField) {
            const value = filterField[key];

            // Условия для числовых диапазонов
            if (key === 'G3Dmark' || key === 'Цена' || key === 'Эффективность' || key === 'Год') {
                const [min, max] = value;
                arr = arr.filter((item) => {
                    const itemValue = item[key];
                    return (
                        (min === null || itemValue >= min) &&
                        (max === null || itemValue <= max)
                    );
                });
            } else if (value) {
                // Фильтрация по строковым полям
                arr = arr.filter((item) =>
                    item[key].toLowerCase().includes(value)
                );
            }
        }

        // Передаёт отфильтрованные данные в родительский компонент
        props.filtering(arr);
    };

    // Сбрасывает фильтры, восстанавливая исходные данные
    const handleClear = () => {
        props.filtering(props.fullData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Название:</label>
                <input name="gpuName" type="text"/>
            </p>
            <p>
                <label>G3Dmark от:</label>
                <input name="G3DmarkFrom" type="number"/>
            </p>
            <p>
                <label>G3Dmark до:</label>
                <input name="G3DmarkTo" type="number"/>
            </p>
            <p>
                <label>Цена от:</label>
                <input name="priceFrom" type="number"/>
            </p>
            <p>
                <label>Цена до:</label>
                <input name="priceTo" type="number"/>
            </p>
            <p>
                <label>Эффективность от:</label>
                <input name="powerPerformanceFrom" type="number"/>
            </p>
            <p>
                <label>Эффективность до:</label>
                <input name="powerPerformanceTo" type="number"/>
            </p>
            <p>
                <label>Год от:</label>
                <input name="releaseYearFrom" type="number"/>
            </p>
            <p>
                <label>Год до:</label>
                <input name="releaseYearTo" type="number"/>
            </p>
            <p>
                <label>Категория:</label>
                <input name="category" type="text"/>
            </p>
            <p>
                <label>СабКатегория:</label>
                <input name="subCategory" type="text"/>
            </p>
            <p>
                <button type="submit">Фильтровать</button>
                <button type="reset" onClick={handleClear}>
                    Очистить фильтры
                </button>
            </p>
        </form>
    );
};

export default Filter;