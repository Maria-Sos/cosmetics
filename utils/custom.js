// Main veraibles:
const btnAddBio = document.querySelector("#addBio")
const btnAddHemply = document.querySelector("#addHemply")
const productsList = document.querySelector("#addProducts")
const bio = document.querySelector('#bionist')
const hemply = document.querySelector('#hemply')

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
})()

document.querySelector("#phone").addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
});

document.querySelector("#inputZip").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});


let count = 0

function insertHtmlHemply(idNum) {
  const html = `
  <div class="col-12 d-flex additionalH" id="addHemply_${idNum}">
  <div class="col-md-9 me-3">
      <label for="hemply_${idNum}" class="form-label">HEMPLY</label>
      <select id="hemply_${idNum}" name="hemply_${idNum}" class="form-select" required>
          <option value="" selected="" disabled="" hidden>Select from Hemply</option>
          <option value="Mild scrub shampoo">Mild scrub shampoo</option>
          <option value="Moisture emulation">Moisture emulation</option>
          <option value="Hemply skin">Hemply skin facial express mask</option>
      </select>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Please select Hemply product or delete this option</div>
      <input class="col-ms-1 mt-1" id="hemply-quantity_${idNum}" name="hemply-quantity_${idNum}" type="number" value="" min="0" required>
      <label>quantity</label>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Please add quantity</div>
  </div>
</div>
            `
  return html
}

function insertHtmlBio(idNum) {
  const html = `
  
  <div class="col-12 d-flex additionalBio" id="addBio_${idNum}">
  <div class="col-md-9 me-2">
      <label for="bionist_${idNum}" class="form-label">BIONIST</label>
      <select id="bionist_${idNum}" name="bionist_${idNum}" class="form-select" required>
          <option value="" selected="" disabled="" hidden>Select from Bionist</option>
          <option value="Bio face wash">Bio face wash</option>
          <option value="Mild cleansing">Mild cleansing gel</option>
          <option value="Bio skin essence (10ml)">Bio skin essence (10ml)</option>
          <option value="Bio skin essence (30ml)">Bio skin essence (30ml)</option>
          <option value="Bio skin Lotion">Bio skin lotion</option>
          <option value="Bio white essence (10 ml)">Bio white essence (10 ml)</option>
          <option value="Bio white essence (30 ml)">Bio white essence (30 ml)</option>
      </select>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Please select Bionist product or delete this option</div>
      <input class="col-ms-1 mt-1" id="bio-quantity_${idNum}" name="bio-quantity_${idNum}" type="number" value="" min="0" required>
      <label>quantity</label>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Please add quantity</div>
  </div>
</div>
            `
  return html
}

// Add BIONIST
btnAddBio.addEventListener("click", () => {
  if (bio.value) {
    count += 1
    const div = insertHtmlBio(count)
    productsList.insertAdjacentHTML("beforeend", div)
    addDeleteButtonBio()
  }
})

// Add HEMPLY
btnAddHemply.addEventListener("click", () => {
  if (hemply.value) {
    count += 1
    const div = insertHtmlHemply(count)
    productsList.insertAdjacentHTML("beforeend", div)
    addDeleteButtonH()
  }
})

const addDeleteButtonH = () => {
  const newEls = document.querySelectorAll('.additionalH')
  newEls.forEach(el => {
    const newElID = el.id
    const hasBinDiv = document.querySelector(`#${newElID}`).querySelector('.col-md-2')
    if(hasBinDiv === null) {

      const buttonDeleteDiv = document.createElement('div')
      buttonDeleteDiv.id = `div_${newElID}`
      buttonDeleteDiv.classList.add('col-md-2')
      buttonDeleteDiv.classList.add('mt-4')
      el.appendChild(buttonDeleteDiv)

      const buttonDelete = document.createElement('input')
      buttonDelete.value = '🗑️'
      buttonDelete.type = "button"
      buttonDelete.id = `delet_${newElID}`
      buttonDelete.classList.add('btn')
      buttonDelete.classList.add('btn-outline-light')
      buttonDelete.classList.add('border-0')
      buttonDelete.classList.add('fs-4')
      buttonDelete.classList.add('mb-2')
      buttonDeleteDiv.appendChild(buttonDelete)

      buttonDelete.addEventListener("click", () => {
        if(buttonDelete.id === `delet_${newElID}`)
        productsList.removeChild(el)
      })
    }
  })
}
const addDeleteButtonBio = () => {
  const newEls = document.querySelectorAll('.additionalBio')
  newEls.forEach(el => {
    const newElID = el.id
    const hasBinDiv = document.querySelector(`#${newElID}`).querySelector('.col-md-2')
    if(hasBinDiv === null) {

      const buttonDeleteDiv = document.createElement('div')
      buttonDeleteDiv.id = `div_${newElID}`
      buttonDeleteDiv.classList.add('col-md-2')
      buttonDeleteDiv.classList.add('mt-4')
      el.appendChild(buttonDeleteDiv)

      const buttonDelete = document.createElement('input')
      buttonDelete.value = '🗑️'
      buttonDelete.type = "button"
      buttonDelete.id = `delet_${newElID}`
      buttonDelete.classList.add('btn')
      buttonDelete.classList.add('btn-outline-light')
      buttonDelete.classList.add('border-0')
      buttonDelete.classList.add('fs-4')
      buttonDelete.classList.add('mb-2')
      buttonDeleteDiv.appendChild(buttonDelete)

      buttonDelete.addEventListener("click", () => {
        if(buttonDelete.id === `delet_${newElID}`)
        productsList.removeChild(el)
      })
    }
  })
}

bio.addEventListener('change', (e) => {
  if(typeof(e.target.value) === "" || e.target.value !== null) {
    document.querySelector('#bio-quantity').setAttribute("required", "")
    btnAddBio.removeAttribute('disabled')
  }
  if (bio.value !== "" || hemply.value !== "") {
    hemply.removeAttribute("required", "")
  }
  if (bio.value) {
    btnAddBio.removeAttribute('disabled')
  }
})

hemply.addEventListener('change', (e) => {
  if(typeof(e.target.value) === "" || e.target.value !== null) {
    document.querySelector('#hemply-quantity').setAttribute("required", "")
  }
  if (bio.value !== "" || hemply.value !== "") {
    hemply.removeAttribute("required", "")
  }
  if (hemply.value) {
    document.getElementById("addHemply").removeAttribute('disabled')
  }
})

// Checking if some of product was selected or not:
const btn = document.querySelector('#CTA')
btn.addEventListener('click', () => {
  if (bio.value === "" && hemply.value === "") {
    hemply.setAttribute("required", "")
  }
  if (bio.value !== "" || hemply.value !== "") {
    hemply.removeAttribute("required", "")
  }
})