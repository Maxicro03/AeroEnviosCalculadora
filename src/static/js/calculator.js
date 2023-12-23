function Calculate(){
    const expositor = document.getElementById("expositor")
    const category = document.getElementById("category")
    const value = document.getElementById("value")
    const weight = document.getElementById("weight")
    const destination = document.getElementById("destination")
    const contentGeneral = document.getElementById("contentGeneralCalculate")

    const selectIndexCategory = category.selectedIndex
    const selectIndexDestination = destination.selectedIndex

    let selectCategory = category[selectIndexCategory].innerText
    const selectDestination = destination[selectIndexDestination].innerText

    if(category.value === "" || value.value == "" || weight.value == "" || destination.value === ""){
        if(category.value === ""){
            category.className = "errorSelect"
        }
        if(value.value == ""){
            value.className = "errorInput"
        }
        if(weight.value == ""){
            weight.className = "errorInput"
        }
        if(destination.value === ""){
            destination.className = "errorSelect"
        }
    } else {

        if (category.classList.contains("errorSelect")) {
            category.classList.remove("errorSelect")
            category.className = "sizeSelect"
        }
    
        if (value.classList.contains("errorInput")) {
            value.classList.remove("errorInput")
            value.className = "sizeInput"
        }
    
        if (weight.classList.contains("errorInput")) {
            weight.classList.remove("errorInput")
            weight.className = "sizeInput"
        }
    
        if (destination.classList.contains("errorSelect")) {
            destination.classList.remove("errorSelect")
            destination.className = "sizeSelect"
        }
        const seguro = parseFloat((value.value * 0.01).toFixed(2))
        const impuesto = parseFloat((value.value * category.value).toFixed(2))
        let flete
        if(weight.value < 1){
            flete = 1 * destination.value
        } else {
            flete = weight.value * destination.value
        }
        const totalEnvio = seguro + impuesto + flete

        if(expositor){

            const hr = document.createElement("hr")
            hr.className = "hr"
            expositor.appendChild(hr)


            const ul = document.createElement("ul")
            ul.id = "listProduct"

            const liProduct = document.createElement("li")
            liProduct.id = "liContent"
            liProduct.textContent = selectCategory
            ul.appendChild(liProduct)

            const liValue = document.createElement("li")
            liValue.id = "liContent"
            liValue.textContent = `$${value.value}`
            ul.appendChild(liValue)

            const liWeight = document.createElement("li")
            liWeight.id = "liContent"
            liWeight.textContent = weight.value
            ul.appendChild(liWeight)

            const liDestination = document.createElement("li")
            liDestination.id = "liContent"
            liDestination.textContent = selectDestination
            ul.appendChild(liDestination)

            const liFlete = document.createElement("li")
            liFlete.id = "liContent"
            liFlete.textContent = `$${flete}`
            ul.appendChild(liFlete)

            const liSeguro = document.createElement("li")
            liSeguro.id = "liContent"
            liSeguro.textContent = `$${seguro}`
            ul.appendChild(liSeguro)

            const liImpuesto = document.createElement("li")
            liImpuesto .id = "liContent"
            liImpuesto .textContent = `$${impuesto}`
            ul.appendChild(liImpuesto)

            const liTotal = document.createElement("li")
            liTotal.id = "liContentTotal"
            liTotal.textContent = `$${totalEnvio}`
            ul.appendChild(liTotal)

            expositor.appendChild(ul)
        } else {
            const expositor = document.createElement("div")
            expositor.id = "expositor"

            const textContent = document.createElement("div")
            textContent.className = "envioTitle"

            const text = document.createElement("p")
            text.textContent = "Costos Envío"
            textContent.appendChild(text)
            
            expositor.appendChild(textContent)

            const ulGuia = document.createElement("ul")
            ulGuia.id = "listProduct"

            const liGuiaProduct = document.createElement("li")
            liGuiaProduct.id = "liContent"
            liGuiaProduct.textContent = "Producto"
            ulGuia.appendChild(liGuiaProduct)

            const liGuiaValue = document.createElement("li")
            liGuiaValue.id = "liContent"
            liGuiaValue.textContent = "Valor(U$D)"
            ulGuia.appendChild(liGuiaValue)

            const liGuiaWeight = document.createElement("li")
            liGuiaWeight.id = "liContent"
            liGuiaWeight.textContent = "Peso(Kg)"
            ulGuia.appendChild(liGuiaWeight)

            const liGuiaDestination = document.createElement("li")
            liGuiaDestination.id = "liContent"
            liGuiaDestination.textContent = "Origen"
            ulGuia.appendChild(liGuiaDestination)

            const liGuiaFlete = document.createElement("li")
            liGuiaFlete.id = "liContent"
            liGuiaFlete.textContent = "Flete(U$D)"
            ulGuia.appendChild(liGuiaFlete)

            const liGuiaSeguro = document.createElement("li")
            liGuiaSeguro.id = "liContent"
            liGuiaSeguro.textContent = "Seguro(U$D)"
            ulGuia.appendChild(liGuiaSeguro)

            const liGuiaImpuesto = document.createElement("li")
            liGuiaImpuesto.id = "liContent"
            liGuiaImpuesto.textContent = "Impuesto(U$D)"
            ulGuia.appendChild(liGuiaImpuesto)

            const liGuiaTotal = document.createElement("li")
            liGuiaTotal.id = "liContentTotal"
            liGuiaTotal.textContent = "Total Envio"
            ulGuia.appendChild(liGuiaTotal)


            expositor.appendChild(ulGuia)
            document.body.appendChild(expositor)


            const hr = document.createElement("hr")
            hr.className = "hr"
            expositor.appendChild(hr)

            const ul = document.createElement("ul")
            ul.id = "listProduct"

            const liProduct = document.createElement("li")
            liProduct.id = "liContent"
            liProduct.textContent = selectCategory
            ul.appendChild(liProduct)

            const liValue = document.createElement("li")
            liValue.id = "liContent"
            liValue.textContent = `$${value.value}`
            ul.appendChild(liValue)

            const liWeight = document.createElement("li")
            liWeight.id = "liContent"
            liWeight.textContent = weight.value
            ul.appendChild(liWeight)

            const liDestination = document.createElement("li")
            liDestination.id = "liContent"
            liDestination.textContent = selectDestination
            ul.appendChild(liDestination)

            const liFlete = document.createElement("li")
            liFlete.id = "liContent"
            liFlete.textContent = `$${flete}`
            ul.appendChild(liFlete)

            const liSeguro = document.createElement("li")
            liSeguro.id = "liContent"
            liSeguro.textContent = `$${seguro}`
            ul.appendChild(liSeguro)

            const liImpuesto = document.createElement("li")
            liImpuesto .id = "liContent"
            liImpuesto .textContent = `$${impuesto}`
            ul.appendChild(liImpuesto)

            const liTotal = document.createElement("li")
            liTotal.id = "liContentTotal"
            liTotal.textContent = `$${totalEnvio}`
            ul.appendChild(liTotal)

            expositor.appendChild(ul)
            contentGeneral.appendChild(expositor)
        }
    }
}