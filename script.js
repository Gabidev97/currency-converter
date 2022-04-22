const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const event = async () => {
    const inputReal = document.getElementById('input-converter').value
    const realValue = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

   const data =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

   const dolar = data.USDBRL.high
   const euro = data.EURBRL.high
   const bitCoin = data.BTCBRL.high
   


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

