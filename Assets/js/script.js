const navLinks = document.querySelectorAll('#navLinks a');

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
    let currentSection = '';

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 100; // Adjusted offset for better detection
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

function payment() {
    const paymentSelect = document.getElementById('payment');
    const paymentResult = document.getElementById('paymentResult');
  
    const originalText = paymentResult.innerText;
    paymentResult.innerText = `${paymentSelect.value} has been selected as the preferred payment method`;
  
    setTimeout(function() {
      paymentResult.innerText = originalText;
    }, 1000); // 1000 milliseconds = 1 second
  }

function subscribe(id, options) {
    const subscribe = document.getElementById(`subscribe${id}`)

    let optionsCheck = '';
    options.forEach(object => {
        optionsCheck += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="" />
        <label class="form-check-label" for=""> ${object} </label>
    </div>`
    })
    subscribe.innerHTML = `<div id="subscribe1" class="mt-4 m-auto">
        ${optionsCheck}
    <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-primary" onclick="subscribeSubmit(${id})">Submit</button>
    </div>
</div>`
}

function subscribeSubmit(id) {
    document.getElementById(`subscribe${id}`).innerHTML = ''
}

function message(){

    const messageBox = document.getElementById('messageBox');
    const messageInput = document.getElementById('messageInput');
    if (messageInput.value.trim() === '') return;

    messageBox.innerHTML += `<div class="my-4 bg-primary text-light p-3" style="width: fit-content;overflow-wrap:anywhere;border-radius: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    ${messageInput.value}
    </div>`;
    
    messageInput.value = "";
}