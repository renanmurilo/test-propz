$(document).ready(() => {
  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    const conteudoDiv = document.getElementById('slider');

    conteudoDiv.innerHTML = '';
     data.forEach(item => {
         const div = document.createElement('div');
        div.innerHTML = `
        <a href="" target="_blank" class="box">
            <div class="image">
                <img src="${item.image}" alt="Image">
            </div>

            <div class="desctiption">
                <div class="name">
                    <h3>${item.nome}</h3>
                    <div class="ml">${item.ml}</div>
                </div>

                <div class="price">
                    <div class="prices">
                        <div class="widget">
                            <div class="widget__price">
                                <h3>10x ${item.discount}</h3>
                                <p>sem juros¹</p>
                            </div>

                                <div class="widget__price">
                                <img src="https://www.svicente.com.br/dw/image/v2/BHGK_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw9429de65/images/footer/image 302.png" alt="">
                                <img src="https://www.svicente.com.br/dw/image/v2/BHGK_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwb7f96212/images/footer/image 299.png" alt="">
                            </div>
                        </div>

                        <div class="widget">
                            <div class="widget__price">
                                <h3>15x ${item.price}</h3>
                                <p>com juros¹</p>
                            </div>

                                <div class="widget__price total">
                                <p>ou ${item.total}à vista</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
      `;
      conteudoDiv.appendChild(div);
    });

    $(conteudoDiv).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
})
