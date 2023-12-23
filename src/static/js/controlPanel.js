function createAddInterface(){
    const contentModify = document.getElementById("contentModify")
    contentModify.innerHTML = ""

    const form = document.createElement("form")
    form.action = "/Aeroenvios/ControlPanel"
    form.method = "post"
    form.className = "formAdd"

    const divTitle = document.createElement("div")
    divTitle.className = "contentAddCategory"

    const divCategory = document.createElement("div")
    divCategory.className = "contentAddCategory"

    const divPorcentage = document.createElement("div")
    divPorcentage.className = "contentAddCategory"

    const divBtnSubmit = document.createElement("div")
    divBtnSubmit.className = "contentAddCategory"

    const textTitle = document.createElement("p")
    textTitle.className = "titleControlPanel"
    textTitle.textContent = "Agregar Categoria"
    divTitle.appendChild(textTitle)

    const labelAddCategory = document.createElement("label")
    labelAddCategory.htmlFor = "category"
    labelAddCategory.textContent = "Categoria"
    divCategory.appendChild(labelAddCategory)

    const inputAddCategory = document.createElement("input")
    inputAddCategory.name = "category"
    inputAddCategory.type = "text"
    inputAddCategory.required = true
    inputAddCategory.className = "inputAdd"
    divCategory.appendChild(inputAddCategory)

    const labelAddPorcentage = document.createElement("label")
    labelAddPorcentage.htmlFor = "porcentage"
    labelAddPorcentage.textContent = "Porcentaje"
    divPorcentage.appendChild(labelAddPorcentage)

    const inputAddPorcentage = document.createElement("input")
    inputAddPorcentage.name = "porcentage"
    inputAddPorcentage.type = "text"
    inputAddPorcentage.required = true
    inputAddPorcentage.className = "inputAdd"
    divPorcentage.appendChild(inputAddPorcentage)

    const btnAdd = document.createElement("button")
    btnAdd.type = "submit"
    btnAdd.className = "btnCategory"
    btnAdd.textContent = "Agregar Categoria"
    divBtnSubmit.appendChild(btnAdd)

    form.appendChild(divTitle)
    form.appendChild(divCategory)
    form.appendChild(divPorcentage)
    form.appendChild(divBtnSubmit)

    contentModify.appendChild(form)
}

function createModifyInterface(producto) {
    const contentModify = document.getElementById("contentModify");
    contentModify.innerHTML = "";

    const form = document.createElement("form");
    form.action = "/Aeroenvios/ControlPanel";
    form.method = "post";  // Cambiado a "post" para evitar problemas de compatibilidad con algunos navegadores
    form.className = "formModify";

    const divTitle = document.createElement("div");
    divTitle.className = "contentModifyCategory";

    const divCategory = document.createElement("div");
    divCategory.className = "contentModifyCategory";

    const divPorcentage = document.createElement("div");
    divPorcentage.className = "contentModifyCategory";

    const divBtnSubmit = document.createElement("div");
    divBtnSubmit.className = "contentModifyCategory";

    const textTitle = document.createElement("p");
    textTitle.className = "titleControlPanel";
    textTitle.textContent = "Modificar Porcentaje";
    divTitle.appendChild(textTitle);

    const labelModifyCategory = document.createElement("label");
    labelModifyCategory.htmlFor = "category";
    labelModifyCategory.textContent = "Categoria";
    divCategory.appendChild(labelModifyCategory);

    const selectModifyCategory = document.createElement("select");
    selectModifyCategory.name = "category";
    selectModifyCategory.required = true;
    selectModifyCategory.className = "selectCategory";
    divCategory.appendChild(selectModifyCategory);

    const option = document.createElement("option");
    option.value = "";
    option.textContent = "-- Selecciona una Opción --";
    selectModifyCategory.appendChild(option);

    const productos = JSON.parse(producto);

    for (const category of productos) {
        const option = document.createElement("option");
        option.value = category._id;
        option.textContent = category.category;
        selectModifyCategory.appendChild(option);
    }

    const labelModifyPorcentage = document.createElement("label");
    labelModifyPorcentage.htmlFor = "porcentage";
    labelModifyPorcentage.textContent = "Nuevo Porcentaje";
    divPorcentage.appendChild(labelModifyPorcentage);

    const inputModifyPorcentage = document.createElement("input");
    inputModifyPorcentage.name = "porcentage";
    inputModifyPorcentage.type = "text";
    inputModifyPorcentage.required = true;
    inputModifyPorcentage.className = "inputModify";
    divPorcentage.appendChild(inputModifyPorcentage);

    const btnModify = document.createElement("button");
    btnModify.type = "button";  // Cambiado a "button" para evitar el envío automático del formulario
    btnModify.className = "btnCategory";
    btnModify.textContent = "Modificar Porcentaje";

    // Añade un event listener para manejar el envío personalizado del formulario
    btnModify.addEventListener("click", async function () {
        const selectedCategory = selectModifyCategory.value;
        const newPorcentage = inputModifyPorcentage.value;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ category: selectedCategory, porcentage: newPorcentage })
        };

        try {
            const response = await fetch("/Aeroenvios/ControlPanel", requestOptions);

            if (!response.ok) {
                throw new Error("No se pudo modificar el porcentaje.");
            }

            console.log("Porcentaje modificado con éxito");
        } catch (error) {
            console.error("Error al modificar el porcentaje:", error.message);
        }
    });

    divBtnSubmit.appendChild(btnModify);

    form.appendChild(divTitle);
    form.appendChild(divCategory);
    form.appendChild(divPorcentage);
    form.appendChild(divBtnSubmit);

    contentModify.appendChild(form);
}


function createDeleteInterface(producto) {
    const contentModify = document.getElementById("contentModify");
    contentModify.innerHTML = "";

    const form = document.createElement("form");
    form.action = "/Aeroenvios/ControlPanel";
    form.method = "post";  // Cambiado a "post" para evitar problemas de compatibilidad con algunos navegadores
    form.className = "formModify";

    const divTitle = document.createElement("div");
    divTitle.className = "contentModifyCategory";

    const divCategory = document.createElement("div");
    divCategory.className = "contentModifyCategory";

    const divBtnSubmit = document.createElement("div");
    divBtnSubmit.className = "contentModifyCategory";

    const textTitle = document.createElement("p");
    textTitle.className = "titleControlPanel";
    textTitle.textContent = "Eliminar Categoria";
    divTitle.appendChild(textTitle);

    const labelDeleteCategory = document.createElement("label");
    labelDeleteCategory.htmlFor = "category";
    labelDeleteCategory.textContent = "Categoria";
    divCategory.appendChild(labelDeleteCategory);

    const selectDeleteCategory = document.createElement("select");
    selectDeleteCategory.name = "category";
    selectDeleteCategory.required = true;
    selectDeleteCategory.className = "selectCategory";
    divCategory.appendChild(selectDeleteCategory);

    const option = document.createElement("option");
    option.value = "";
    option.textContent = "-- Selecciona una Opción --";
    selectDeleteCategory.appendChild(option);

    const productos = JSON.parse(producto);

    for (const category of productos) {
        const option = document.createElement("option");
        option.value = category._id;
        option.textContent = category.category;
        selectDeleteCategory.appendChild(option);
    }

    const btnDelete = document.createElement("button");
    btnDelete.type = "button";  // Cambiado a "button" para evitar el envío automático del formulario
    btnDelete.className = "btnCategory";
    btnDelete.textContent = "Eliminar Categoria";

    // Añade un event listener para manejar el envío personalizado del formulario
    btnDelete.addEventListener("click", async function () {
        const selectedCategory = selectDeleteCategory.value;

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ category: selectedCategory })
        };

        try {
            const response = await fetch("/Aeroenvios/ControlPanel", requestOptions);

            if (!response.ok) {
                throw new Error("No se pudo eliminar la categoría.");
            }

            console.log("Categoría eliminada con éxito");
        } catch (error) {
            console.error("Error al eliminar la categoría:", error.message);
        }
    });

    divBtnSubmit.appendChild(btnDelete);

    form.appendChild(divTitle);
    form.appendChild(divCategory);
    form.appendChild(divBtnSubmit);

    contentModify.appendChild(form);
}

