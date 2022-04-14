const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.02
const euro = 6.48
const bitCoin = 6.25

const event = () => {
    const inputReal = document.getElementById('input-converter').value
    const realValue = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }).format(inputReal)

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputReal / dolar)
    }


    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }).format(inputReal / euro)
    }

    
    if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('BTC',
            {
                style: 'currency',
                currency: 'BTC'
            }).format(inputReal / bitCoin)
    }



}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }


    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }


    event ()
}

button.addEventListener('click', event)
select.addEventListener('change', changeCurrency)

